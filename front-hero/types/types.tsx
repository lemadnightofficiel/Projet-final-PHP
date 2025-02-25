export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  Home: undefined;
  listedesheros: { searchQuery: string };
};

export type AuthStackParamList = {
  login: undefined;
  register: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Menu: undefined;
  listedesheros: { searchQuery?: string };
  HeroCreation: undefined;
  HeroDetail: { heroId: string };
};
