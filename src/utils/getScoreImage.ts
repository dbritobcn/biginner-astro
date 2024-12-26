export const getScoreImageFilename = (score: number): string =>
  `score${score.toString().replace(/\./g, "")}`;
