import { FC } from "react";
import TheySaid from "../TheySaid/";
import ISaid from "./../ISaid/";
import {IMessage} from "../../models/IMessage";

interface IProps {
  messages: IMessage[];
};

const Messages:FC<IProps> = ({ messages }) => (
  <div
    id="messages"
    className="flex flex-col-reverse space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
  >{
      
  }
    <ISaid />
    <TheySaid />
  </div>
);

export default Messages;
