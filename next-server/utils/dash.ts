export function removeDashes(text: string): string {
  return text.trim().split("-").join("");
}

export function separateWithDashes(text: string): string {
  let textWithoutDashes = removeDashes(text);
  let dashedString = "";

  for (let i = 0; i < textWithoutDashes.length; i++) {
    const char = textWithoutDashes[i];
    // Add a dash after
    //        8th        12th        16th        20th character.
    if (i === 8 || i === 12 || i === 16 || i === 20) dashedString += "-";
    dashedString += char;
  }

  return dashedString;
}
