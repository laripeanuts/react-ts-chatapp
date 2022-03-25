import { FC } from "react";

export const Loading: FC = () => (
  <div
    id="loading-screen"
    className="w-full bg-gray-300 h-screen flex  items-center content-center justify-center"
  >
    <svg
      className="w-24 h-24 animate-spin"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      ></path>
    </svg>
  </div>
);