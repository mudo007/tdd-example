export function getIndividualScoreName(playerScoreValue: number): string {
  switch (playerScoreValue) {
    case 0:
      return "love";
    case 1:
      return "fifteen";
    case 2:
      return "thirty";
    case 3:
      return "forty";
    default:
      return "invalid";
  }
}

export class TennisScoreFSM {
  #playerScore: Scores = {
    playerA: 0,
    playerB: 0
  };
  #scoreFSMstate = "earlyGame";

  public getRunningScore(): string {
    switch (this.#scoreFSMstate) {
      case "earlyGame":
        return `${getIndividualScoreName(this.#playerScore.playerA)}-${getIndividualScoreName(this.#playerScore.playerB)}`;
      case "endGame":
        return `${this.#playerScore.playerA > this.#playerScore.playerB ? "playerA" : "playerB"} wins! game over`;
      default:
        return "invalid";
    }
  }

  public scoreForPlayer(player: keyof Scores): void {
    this.#playerScore[player]++;
    this.runScoringFSM(player);
  }

  public setScoreValues(playerAScore: number, playerBScore: number): void {
    this.#playerScore = { playerA: playerAScore, playerB: playerBScore };
  }

  private runScoringFSM(player: keyof Scores): void {
    switch (this.#scoreFSMstate) {
      case "earlyGame":
        if (
          this.#playerScore[player] === 4 &&
          Math.abs(this.#playerScore.playerA - this.#playerScore.playerB) >= 2
        )
          this.#scoreFSMstate = "endGame";
        break;
      case "endGame":
        break;
      default:
        break;
    }
  }
}
