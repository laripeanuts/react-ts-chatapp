import { IUser } from "./IUser";

export interface IMessage {
  id: string;
  user: IUser;
  avatar: string;
  text: string;
  WasItMe?: boolean;
}