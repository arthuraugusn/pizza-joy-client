import { HomeIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="flex">
        <div
          className={`${
            open ? "w-40" : "w-24"
          } bg-white h-screen p-5 pt-8 relative duration-700`}
        >
          <div className="w-full justify-center flex">
            <HomeIcon
              onClick={() => {
                setOpen(!open);
              }}
              className={`${
                open ? "w-12 h-12" : "w-12 h-12 "
              } rounded-3xl cursor-pointer justify-center text-white bg-amarelo-sidebar border-2  p-2 duration-700 hover:scale-110  `}
            />
          </div>
        </div>
      </div>
    </>
  );
};
