import { Button } from "./Button";
import React, { FC } from "react";
import { AiOutlineLink } from "react-icons/ai";

export interface IUrlEntry {
  url: string;
  title: string;
  seeded: boolean;
  loading: boolean;
}
//doesnt seem to know IURL
//we have the data in a URL in urls
//We need a extra button taht allows us to select the url before sending like before
//we need to look at ollies verison and mine and compare
//adding that button to the home page

interface IURLButtonProps {
  entry: IUrlEntry;
  onClick: () => Promise<void>;
}

const UrlButton: FC<IURLButtonProps> = ({ entry, onClick }) => (
  <div key={`${entry.url}-${entry.seeded}`} className="pr-2 lg:flex-grow">
    <Button
      className={`relative overflow-hidden w-full my-1 lg:my-2 mx-2 ${
        entry.loading ? "shimmer" : ""
      }`}
      style={{
        backgroundColor: entry.seeded ? "green" : "bg-gray-800",
        color: entry.seeded ? "white" : "text-gray-200",
      }}
      onClick={onClick}
    >
      <a
        href={entry.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200 flex items-center justify-center rounded-full p-2 text-3xl text-white transition duration-200 hover:cursor-pointer dark:text-white"
      >
        <AiOutlineLink
          color="white"
          fontSize={14}
          className="hover:text-green"
        />
      </a>
      {entry.loading && (
        <div
          className="absolute inset-0"
          style={{
            zIndex: -1,
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
            animation: "shimmer 2s infinite",
          }}
        ></div>
      )}
      <div className="relative">{entry.title}</div>
    </Button>
  </div>
);

export default UrlButton;
