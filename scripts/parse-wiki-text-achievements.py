import sys

if sys.version_info < (3, 0):
    print("This script requires Python 3.x.")
    sys.exit(1)

import json
import os
import re
import urllib.request

INPUT_FILE = "wiki-achievement-html.txt"
OUTPUT_FILE = "achievements.json"
IMAGE_DIRECTORY_NAME = "images"

# From: https://stackoverflow.com/questions/9662346/python-code-to-remove-html-tags-from-a-string
HTML_CLEANER = re.compile("<.*?>")

with open(INPUT_FILE, "r") as file:
    data = file.readlines()

achievements = {}


def main():
    if not os.path.exists(IMAGE_DIRECTORY_NAME):
        os.makedirs(IMAGE_DIRECTORY_NAME)

    string_list = []

    line_num = 0
    for line in data:
        line_num += 1
        line = line.strip()

        if not line.startswith("<td"):
            continue

        if len(string_list) == 0:
            # <td data-sort-value="Magdalene" style="text-align: center"><a href="/wiki/Magdalene" title="Magdalene">Magdalene</a>
            # <td data-sort-value="Lost Baby" style="text-align: center"><a href="/wiki/Babies" class="mw-redirect" title="Babies">Lost Baby</a>
            match = re.search(
                r'<td data-sort-value=".+?" style="text-align: center"><a href="/wiki/(.+?)".*?>(.+?)</a>',
                line,
            )
            if match:
                link = match.group(1)
                name_raw = match.group(2)
            else:
                # <td data-sort-value="Everything Is Terrible!!!" style="text-align: center">Everything Is Terrible!!!
                match2 = re.search(
                    r'<td data-sort-value=".+?" style="text-align: center">(.*)',
                    line,
                )
                if not match2:
                    error(
                        "Failed to parse the name and link on line {}: {}".format(
                            line_num, line
                        )
                    )
                link = ""
                name_raw = match2.group(1)

            name = clean_html(name_raw)

            string_list.append(link)
            string_list.append(name)

        elif len(string_list) == 2:
            # <td><a href="/wiki/Magdalene" title="Magdalene"><img alt="Magdalene" src="data:image/gif;base64,R0lGODlhAQABAIABAAAAAP///yH5BAEAAAEALAAAAAABAAEAQAICTAEAOw%3D%3D" decoding="async" width="64" height="64" data-image-name="Achievement Magdalene icon.png" data-image-key="Achievement_Magdalene_icon.png" data-src="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/e/ef/Achievement_Magdalene_icon.png/revision/latest/scale-to-width-down/64?cb=20210821061157" class="lazyload" /></a>
            match = re.search(
                r'<td>.* data-src="(.+?)\?cb=\d+" .*',
                line,
            )
            if not match:
                error("Failed to parse the image on line {}: {}".format(line_num, line))
            url = match.group(1)

            achievement_num = len(achievements) + 1
            file_name = str(achievement_num) + ".png"

            image_path = os.path.join(IMAGE_DIRECTORY_NAME, file_name)
            urllib.request.urlretrieve(url, image_path)

            string_list.append(file_name)

        elif len(string_list) == 3:
            # <td>Unlocked a new character.
            match = re.search(r"<td>(.*)", line)
            if not match:
                error(
                    "Failed to parse the in-game description on line {}: {}".format(
                        line_num, line
                    )
                )
            in_game_description_raw = match.group(1)
            in_game_description = clean_html(in_game_description_raw)
            string_list.append(in_game_description)

        elif len(string_list) == 4:
            # <td>Have 7 or more <a href="/wiki/Red_Heart" class="mw-redirect" title="Red Heart">Red Heart</a> Containers at one time
            match = re.search(r"<td>(.*)", line)
            if not match:
                error(
                    "Failed to parse the unlock description on line {}: {}".format(
                        line_num, line
                    )
                )
            unlock_description_raw = match.group(1)
            unlock_description = clean_html(unlock_description_raw)
            string_list.append(unlock_description)

        elif len(string_list) == 5:
            # <td style="text-align: center">1
            match = re.search(r'<td style="text-align: center">(\d+)', line)
            if not match:
                error(
                    "Failed to parse the achievement number on line {}: {}".format(
                        line_num, line
                    )
                )

            achievement_num = match.group(1)

            achievements[achievement_num] = {
                "link": string_list[0],
                "name": string_list[1],
                # "image": string_list[2], # Image is unused
                "inGameDescription": string_list[3],
                "unlockDescription": string_list[4],
            }
            string_list = []

    with open(OUTPUT_FILE, "w", newline="\n") as file:
        json.dump(achievements, file, indent=2, separators=(",", ": "))
        file.write("\n")


def printf(*args):
    print(*args, flush=True)


def error(msg: str):
    printf(msg)
    sys.exit(1)


def clean_html(raw_html):
    clean_text = re.sub(HTML_CLEANER, "", raw_html)
    return clean_text.strip()


if __name__ == "__main__":
    main()
