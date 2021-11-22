import sys

if sys.version_info < (3, 0):
    print("This script requires Python 3.x.")
    sys.exit(1)

import json
import os
import re
import urllib.request

INPUT_FILE = "wiki-seeds-html.txt"
OUTPUT_FILE = "easterEggs.json"

# From: https://stackoverflow.com/questions/9662346/python-code-to-remove-html-tags-from-a-string
HTML_CLEANER = re.compile("<.*?>")

with open(INPUT_FILE, "r") as file:
    data = file.readlines()

achievements = {}


def main():
    string_list = []

    line_num = 0
    for line in data:
        line_num += 1
        line = line.strip()

        if not line.startswith("<td>"):
            continue

        if len(string_list) == 0:
            # <td>16
            match = re.search(r"<td>(.+)", line)
            if not match:
                error("Failed to parse the ID on line {}: {}".format(line_num, line))
            id = match.group(1)
            string_list.append(id)

        elif len(string_list) == 1:
            # <td>BASE<br />MENT
            match = re.search(r"<td>(.+)", line)
            if not match:
                error("Failed to parse the seed on line {}: {}".format(line_num, line))
            seed_raw = match.group(1)
            seed = clean_html(seed_raw)
            string_list.append(seed)

        elif len(string_list) == 2:
            # <td>Infinite basements
            match = re.search(r"<td>(.+)", line)
            if not match:
                error(
                    "Failed to parse the in-game description on line {}: {}".format(
                        line_num, line
                    )
                )
            in_game_description_raw = match.group(1)
            in_game_description = clean_html(in_game_description_raw)
            string_list.append(in_game_description)

        elif len(string_list) == 3:
            # <td><a href="/wiki/The_Basement" class="mw-redirect" title="The Basement">The Basement</a> repeats infinitely. <span title="Disables achievements" style="cursor:help"><img alt="Disables achievements" src="https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/1/16/Achievements_Disabled.png/revision/latest/scale-to-width-down/16?cb=20210821164322" decoding="async" title="Disables achievements" width="16" height="16" data-image-name="Achievements Disabled.png" data-image-key="Achievements_Disabled.png" /></span>
            match = re.search(r"<td>(.+)", line)
            if not match:
                error(
                    "Failed to parse the effects description on line {}: {}".format(
                        line_num, line
                    )
                )
            effects_description_raw = match.group(1)
            effects_description = clean_html(effects_description_raw)
            string_list.append(effects_description)

            achievements[string_list[0]] = {
                "seed": string_list[1],
                "inGameDescription": string_list[2],
                "effectsDescription": string_list[3],
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
    cleantext = re.sub(HTML_CLEANER, "", raw_html)
    return cleantext.strip()


if __name__ == "__main__":
    main()
