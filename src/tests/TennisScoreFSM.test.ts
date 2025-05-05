import { getIndividualScoreName, TennisScoreFSM } from "../TennisScoreFSM";

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

describe("Running Score during early stage", () => {
  // Common Arrange
  let tenisSccorerFSM: TennisScoreFSM;
  beforeEach(() => {
    tenisSccorerFSM = new TennisScoreFSM();
  });

  it("Should return love-love at the beginning", () => {
    // Act
    // Assert
    expect(tenisSccorerFSM.getRunningScore()).toEqual("love-love");
  });

  it("Should return fifteen-love after Player A scores first", () => {
    // Act
    tenisSccorerFSM.scoreForPlayer("playerA");
    // Assert
    expect(tenisSccorerFSM.getRunningScore()).toEqual("fifteen-love");
  });

  it("Should return love-fifteen after Player B scores first", () => {
    // Act
    tenisSccorerFSM.scoreForPlayer("playerB");
    // Assert
    expect(tenisSccorerFSM.getRunningScore()).toEqual("love-fifteen");
  });

  it("Should end the game with playerA winning if it scores after the running score is forty-thirty", () => {
    // Arrange
    tenisSccorerFSM.setScoreValues(3, 2);
    // Act
    tenisSccorerFSM.scoreForPlayer("playerA");
    // Assert
    expect(tenisSccorerFSM.getRunningScore()).toEqual(
      "playerA wins! game over"
    );
  });
});
