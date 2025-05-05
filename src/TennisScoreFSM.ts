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
