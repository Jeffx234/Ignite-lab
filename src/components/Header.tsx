import { Lightning, List } from "phosphor-react";
import { Logo } from "./Logo";

interface showProps {
  onClick: () => void;
}

export function Header({onClick}: showProps) {
  return (
    <header 
      className="w-full px-4 py-5 flex items-center 
      justify-between bg-gray-700 
      border-b 
      border-gray-600 md:px-16 "
      
      >
      <h1>
        <Logo />
      </h1>
      <div>
       <button
        onClick={onClick}
       >
          <span className="flex gap-4 text-xl items-center md:text-2xl">
            Aulas <List size={34} />
          </span>
       </button>
      </div>
    </header>
  );
}