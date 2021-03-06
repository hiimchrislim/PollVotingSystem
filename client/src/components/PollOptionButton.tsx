import React from "react";

interface buttonType {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  selected: boolean;
}

export const PollOptionButton = ({
  name,
  onClick,
  disabled,
  selected,
}: buttonType) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`m-2 py-2 px-40 inline-block ${
        selected ? "bg-hover" : "bg-primary"
      } ${
        disabled
          ? "cursor-not-allowed opacity-50"
          : "hover:bg-hover cursor-pointer"
      }`}
    >
      <div className={"text-xl font-bold text-white text-center"}>{name}</div>
    </button>
  );
};
