import { TennisScore } from "../TennisScore";

describe("Run the game", () => {
  it("Should make playerA the winner", () => {
    //Intial Arrange and assert
    const tenniScorer = new TennisScore();
    expect(tenniScorer.getRunningScore()).toEqual("love-love");
    //Scoring and checking the runningscore
    tenniScorer.scoreForPlayer("playerA");
    expect(tenniScorer.getRunningScore()).toEqual("fifteen-love");
    tenniScorer.scoreForPlayer("playerB");
    expect(tenniScorer.getRunningScore()).toEqual("fifteen-fifteen");
    tenniScorer.scoreForPlayer("playerA");
    expect(tenniScorer.getRunningScore()).toEqual("thirty-fifteen");
    tenniScorer.scoreForPlayer("playerA");
    expect(tenniScorer.getRunningScore()).toEqual("forty-fifteen");
    tenniScorer.scoreForPlayer("playerB");
    expect(tenniScorer.getRunningScore()).toEqual("forty-thirty");
    tenniScorer.scoreForPlayer("playerB");
    expect(tenniScorer.getRunningScore()).toEqual("deuce");
    tenniScorer.scoreForPlayer("playerB");
    expect(tenniScorer.getRunningScore()).toEqual("advantage-playerB");
    tenniScorer.scoreForPlayer("playerA");
    expect(tenniScorer.getRunningScore()).toEqual("deuce");
    tenniScorer.scoreForPlayer("playerA");
    expect(tenniScorer.getRunningScore()).toEqual("advantage-playerA");
    tenniScorer.scoreForPlayer("playerA");
    expect(tenniScorer.getRunningScore()).toEqual("playerA wins! game over");
  });
});
