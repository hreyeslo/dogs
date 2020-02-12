export interface IBreedsList {
  [breed: string]: string[];
}

export interface IBreedsResponse {
  message: IBreedsList;
  status: string;
}
