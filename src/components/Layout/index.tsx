import { FC } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="w-full flex-1 overflow-x-hidden overflow-y-auto p-4">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
