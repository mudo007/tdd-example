import { getIndividualScoreName } from "../TennisScoreFSM";

describe("Individual score names", () => {
  it("Should return love for an individual score of 0", () => {
    // Arrange
    // Act
    const individualScoreName = getIndividualScoreName(0);
    // Assert
    expect(individualScoreName).toEqual("love");
  });
  it("Should return fifteen for an individual score of 1", () => {
    expect(getIndividualScoreName(1)).toEqual("fifteen");
  });
  it("Should return thirty for an individual score of 2", () => {
    expect(getIndividualScoreName(2)).toEqual("thirty");
  });
  it("Should return forty for an individual score of 3", () => {
    expect(getIndividualScoreName(3)).toEqual("forty");
  });
});
