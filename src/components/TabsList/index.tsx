import { FC } from "react";

interface TabsListProps {
  children: React.ReactNode;
}
const TabsList: FC<TabsListProps> = ({ children }) => {
  return (
    <div className="w-full bg-[#e9e9eb] flex p-1 rounded-md">
      {children}
    </div>
  );
};

export default TabsList;
