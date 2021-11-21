const DISPLAY_VISIBLE = "block";
const DISPLAY_HIDDEN = "none";

/** Helper function to get type safety on a switch statement. */
export const ensureAllCases = (obj: never): never => obj;

export function getElement(id: string) {
  const element = document.getElementById(id);
  if (element === null) {
    throw new Error(`Failed to find the element with ID: ${element}`);
  }

  return element;
}

export function hide(element: HTMLElement) {
  element.style.display = DISPLAY_HIDDEN;
}

/**
 * parseIntSafe is a more reliable version of parseInt. By default, "parseInt('1a')" will return
 * "1", which is unexpected. This returns either an integer or NaN.
 */
export function parseIntSafe(input: string): number {
  if (typeof input !== "string") {
    return NaN;
  }

  // Remove all leading and trailing whitespace
  let trimmedInput = input.trim();

  const isNegativeNumber = trimmedInput.startsWith("-");
  if (isNegativeNumber) {
    // Remove the leading minus sign before we match the regular expression
    trimmedInput = trimmedInput.substring(1);
  }

  if (/^\d+$/.exec(trimmedInput) === null) {
    // "\d" matches any digit (same as "[0-9]")
    return NaN;
  }

  if (isNegativeNumber) {
    // Add the leading minus sign back
    trimmedInput = `-${trimmedInput}`;
  }

  return parseInt(trimmedInput, 10);
}

export function show(element: HTMLElement) {
  element.style.display = DISPLAY_VISIBLE;
}

export function toggle(element: HTMLElement) {
  if (element.style.display === DISPLAY_HIDDEN) {
    show(element);
  } else {
    hide(element);
  }
}
