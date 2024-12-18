import { convertToASCIIString } from "@sims/utilities/string-utils";

describe("StringUtils-convertToASCII", () => {
  it("Should replace the special characters when equivalent ones are present.", () => {
    // Arrange
    const textWithSpecialCharacters =
      "Some text with special characters: ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜ—àáâãäåçèéêëìíîï-ñóòôõöùúûüýÿ";

    // Act
    const translatedData = convertToASCIIString(textWithSpecialCharacters);

    // Assert
    expect(translatedData).toBe(
      "Some text with special characters: AAAAAACEEEEIIIINOOOOOUUUU-aaaaaaceeeeiiii-nooooouuuuyy",
    );
  });

  it("Should return null when null is provided.", () => {
    // Arrange
    const textWithSpecialCharacters = null;

    // Act
    const translatedData = convertToASCIIString(textWithSpecialCharacters);

    // Assert
    expect(translatedData).toBeNull();
  });

  it("Should return null when undefined is provided.", () => {
    // Arrange
    const textWithSpecialCharacters = undefined;

    // Act
    const translatedData = convertToASCIIString(textWithSpecialCharacters);

    // Assert
    expect(translatedData).toBeNull();
  });
});
