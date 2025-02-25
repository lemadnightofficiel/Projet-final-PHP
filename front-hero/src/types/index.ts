export interface Superhero {
  id: number;
  real_name: string;
  pseudo_name: string;
  gender: string;
  origin_planet: string | null;
  description: string;
  superpowers: string[];
  city_of_protection: string;
  gadgets: string[];
  team: string | null;
  vehicle: string | null;
  user_id: number;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegistrationFormData {
  email: string;
  password: string;
}
