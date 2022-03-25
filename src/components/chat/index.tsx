import React, { FC } from "react";
import Footer from "../Footer/";
import Header from "../Header/";
import Messages from "../Messages/";

interface IProps {}

const Chat: FC<IProps> = () => {
  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <Header />
      <Messages messages={[]} />
      <Footer />
    </div>
  );
};
export default Chat;
