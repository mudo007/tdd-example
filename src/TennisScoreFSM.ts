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
        return `${this.getLeadScorer()} wins! game over`;
      default:
        return this.#scoreFSMstate;
    }
  }
  private getLeadScorer(): keyof Scores {
    return this.#playerScore.playerA > this.#playerScore.playerB
      ? "playerA"
      : "playerB";
  }

  public scoreForPlayer(player: keyof Scores): void {
    this.#playerScore[player]++;
    this.runScoringFSM(player);
  }

  public setScoreValuesAndState(
    playerAScore: number,
    playerBScore: number,
    desiredState: string
  ): void {
    this.#playerScore = { playerA: playerAScore, playerB: playerBScore };
    this.#scoreFSMstate = desiredState;
  }

  private runScoringFSM(player: keyof Scores): void {
    switch (this.#scoreFSMstate) {
      case "earlyGame":
        if (
          this.#playerScore[player] === 4 &&
          Math.abs(this.#playerScore.playerA - this.#playerScore.playerB) >= 2
        )
          this.#scoreFSMstate = "endGame";

        //Transitioning to deuce
        if (this.#playerScore.playerA === 3 && this.#playerScore.playerB === 3)
          this.#scoreFSMstate = "deuce";
        break;
      case "deuce":
        this.#scoreFSMstate = `advantage-${player}`;
        break;
      case "advantage-playerA":
        if (player === "playerB") this.#scoreFSMstate = "deuce";
        break;
      case "advantege-playerB":
        if (player === "playerA") this.#scoreFSMstate = "deuce";
        break;
      case "endGame":
        break;
      default:
        break;
    }
  }
}
