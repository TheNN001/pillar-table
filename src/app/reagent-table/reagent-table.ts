export interface reagentTable {
  id: number;
  title: string;
  scoreText: string;
  scoreColor: string;
  scoreTextColor: string;
  affirmationSubContent?: reagentSubTable[];
}

export interface reagentSubTable {
  id_sub: number;
  title_sub: string;
  scoreText_sub: string;
  scoreColor_sub: string;
  scoreTextColor_sub: string;
}
