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

  public getRunningScore(): string {
    return `${getIndividualScoreName(this.#playerScore.playerA)}-${getIndividualScoreName(this.#playerScore.playerB)}`;
  }

  public scoreForPlayer(player: keyof Scores): void {
    this.#playerScore[player]++;
  }
}
