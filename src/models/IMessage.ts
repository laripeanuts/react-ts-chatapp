import { IUser } from "./IUser";

export interface IMessage {
  id: string;
  user: IUser;
  text: string;
  WasItMe: boolean;
}