import { Igame } from "../../store/gameSlice";

export interface IgameCard extends Igame {
  withDescription?: boolean;
}
