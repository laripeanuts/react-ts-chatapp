import { FC } from "react";

interface IProps {
  authProvider: any;
};

export const Login: FC<IProps> = ({ authProvider }) => {
  const handleClick = () => {
    authProvider();
  };

  return (
    <div
      id="loading-screen"
      className="w-full bg-gray-300 h-screen flex  items-center content-center justify-center"
    >
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Entrar com Google
      </button>
    </div>
  );
};
