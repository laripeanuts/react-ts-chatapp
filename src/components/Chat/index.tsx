import React, { FC } from "react";
import { Footer } from "../Footer/";
import { Header } from "../Header/";
import { Messages } from "../Messages/";
import { db } from "../../services/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { IMessage } from "../../models/IMessage";

interface IProps {
  user: any;
  signOut: any;
}

export const Chat: FC<IProps> = ({ user, signOut }) => {
  const [messages, setMessages] = React.useState<IMessage[]>([]);

  React.useEffect(() => {
    const messagesRef = collection(db, "messages");
    let latestMessages = query(messagesRef, orderBy("createdAt", "desc"));
    const unsub = onSnapshot(latestMessages, (remote) => {
      console.log("Temos msg", remote.docs.length);
      let msgs = remote.docs.map((doc) => {
        const data = doc.data();
        const msg: IMessage = {
          id: doc.id,
          user: data["from"],
          avatar: data["avatar"],
          text: data["text"],
          WasItMe: data["from"] === user.uid,
        };
        return msg;
      });

      setMessages(msgs);
    });

    return () => unsub();
  }, [user.uid]);

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <Header user={user} signOut={signOut} />
      <Messages messages={messages} />
      <Footer user={user} />
    </div>
  );
};
