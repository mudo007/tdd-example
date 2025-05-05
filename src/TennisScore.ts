import { TennisScoreFSM } from "./TennisScoreFSM";

export class TennisScore {
  #tennisScoreFSM: TennisScoreFSM;
  constructor() {
    this.#tennisScoreFSM = new TennisScoreFSM();
  }
  public getRunningScore(): string {
    return this.#tennisScoreFSM.getRunningScore();
  }
  public scoreForPlayer(player: keyof Scores): void {
    this.#tennisScoreFSM.scoreForPlayer(player);
  }
}
