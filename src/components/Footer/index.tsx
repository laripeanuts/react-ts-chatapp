import { FC } from "react";
import { db } from "../../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import React from "react";

interface IProps {
  user: any;
}

export const Footer: FC<IProps> = ({ user }) => {
  const [text, setText] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);
  const handleSend = () => {
    sendMessage();
    setText("");
  };

  const sendMessage = () => {
    addDoc(collection(db, "messages"), {
      from: user.uid,
      avatar: user.photoURL,
      text: text,
      createdAt: serverTimestamp(),
    });
  };

  return (
    <div className="border-t-2 border-gray-200 px-4 pt-4 mb-4 ">
      <div className="relative flex">
        <input
          value={text}
          onChange={handleChange}
          type="text"
          placeholder="Escreva sua mensagem!"
          className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
        />
        <div className="absolute right-0 items-center inset-y-0 ">
          <button
            type="button"
            onClick={handleSend}
            className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
          >
            <span className="font-bold">Enviar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 ml-2 transform rotate-90"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
