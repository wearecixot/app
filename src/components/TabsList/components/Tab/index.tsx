import { cn } from "@/utils/cn";
import { FC } from "react";

interface TabProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}
const Tab: FC<TabProps> = ({ children, isActive, onClick }) => {
  return (
    <div
      className={cn(
        "w-full rounded-[4px] py-0.5 flex items-center justify-center",
        isActive && "bg-white",
        !isActive && "cursor-pointer"
      )}
      onClick={onClick}
    >
      <p className="text-sm">{children}</p>
    </div>
  );
};

export default Tab;
