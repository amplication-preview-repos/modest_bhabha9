export type Horoscope = {
  createdAt: Date;
  dailyPrediction: string | null;
  id: string;
  monthlyPrediction: string | null;
  sign?: "Option1" | null;
  updatedAt: Date;
  weeklyPrediction: string | null;
  yearlyPrediction: string | null;
};
