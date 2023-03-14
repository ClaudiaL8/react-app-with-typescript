//el .d es que únicamente se pueden poner definiciones

export interface Sub {
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

export type SubsResponseFromApi = Array<{
  nick: string;
  months: number;
  profileUrl: string;
  description: string;
}>;
