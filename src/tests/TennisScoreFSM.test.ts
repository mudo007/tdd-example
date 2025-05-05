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
  it("Should return forty-fifteen for score Values of 3-1", () => {
    // Act
    tenisSccorerFSM.setScoreValuesAndState(3, 1, "earlyGame");

    // Assert
    expect(tenisSccorerFSM.getRunningScore()).toEqual("forty-fifteen");
  });

  it("Should end the game with playerA winning if it scores after the running score is forty-love", () => {
    // Arrange
    tenisSccorerFSM.setScoreValuesAndState(3, 0, "earlyGame");
    // Act
    tenisSccorerFSM.scoreForPlayer("playerA");
    // Assert
    expect(tenisSccorerFSM.getRunningScore()).toEqual(
      "playerA wins! game over"
    );
  });
  it("Should end the game with playerA winning if it scores after the running score is forty-thirty", () => {
    // Arrange
    tenisSccorerFSM.setScoreValuesAndState(3, 2, "earlyGame");
    // Act
    tenisSccorerFSM.scoreForPlayer("playerA");
    // Assert
    expect(tenisSccorerFSM.getRunningScore()).toEqual(
      "playerA wins! game over"
    );
  });
});

describe("Running score when deuce is reached", () => {
  // Common Arrange
  let tenisSccorerFSM: TennisScoreFSM;
  beforeEach(() => {
    tenisSccorerFSM = new TennisScoreFSM();
  });
  it("Should be deuce after playerA scoring when the runnig score was thirty-forty", () => {
    // Arrange
    tenisSccorerFSM.setScoreValuesAndState(2, 3, "earlyGame");
    // Act
    tenisSccorerFSM.scoreForPlayer("playerA");
    // Assert
    expect(tenisSccorerFSM.getRunningScore()).toEqual("deuce");
  });
  it("Should be advantege-playerA when playerA scores from a deuce", () => {
    // Arrange
    tenisSccorerFSM.setScoreValuesAndState(3, 3, "deuce");
    // Act
    tenisSccorerFSM.scoreForPlayer("playerA");
    // Assert
    expect(tenisSccorerFSM.getRunningScore()).toEqual("advantage-playerA");
  });
  it("Should be deuce when playerB scores from a advantege-playerA", () => {
    // Arrange
    tenisSccorerFSM.setScoreValuesAndState(5, 3, "advantage-playerA");
    // Act
    tenisSccorerFSM.scoreForPlayer("playerB");
    // Assert
    expect(tenisSccorerFSM.getRunningScore()).toEqual("deuce");
  });
});

describe("Winning the game from advantage", () => {
  // Common Arrange
  let tenisSccorerFSM: TennisScoreFSM;
  beforeEach(() => {
    tenisSccorerFSM = new TennisScoreFSM();
  });
  it("Running Score should be playerA wins! game over, when playerA scores from advantage-playerA", () => {
    // Arrange
    tenisSccorerFSM.setScoreValuesAndState(5, 4, "advantage-playerA");
    // Act
    tenisSccorerFSM.scoreForPlayer("playerA");
    // Assert
    expect(tenisSccorerFSM.getRunningScore()).toEqual(
      "playerA wins! game over"
    );
  });
  it("Running Score should be playerB wins! game over, when playerB scores from advantage-playerB", () => {
    // Arrange
    tenisSccorerFSM.setScoreValuesAndState(5, 6, "advantage-playerB");
    // Act
    tenisSccorerFSM.scoreForPlayer("playerB");
    // Assert
    expect(tenisSccorerFSM.getRunningScore()).toEqual(
      "playerB wins! game over"
    );
  });
});
