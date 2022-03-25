import { FC } from "react";

interface IProps {}

const TheySaid: FC<IProps> = ({}) => (
  <div className="chat-message">
    <div className="flex items-end">
      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
        <div>
          <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
            Bom dia
          </span>
        </div>
      </div>
      <img
        src="https://i.pravatar.cc/96?u=2"
        alt="My profile"
        className="w-6 h-6 rounded-full order-1"
      />
    </div>
  </div>
);

export default TheySaid;
