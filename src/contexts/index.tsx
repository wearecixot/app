import { FC } from "react";
import { RewardsProvider } from "./RewardsContext";

interface MainProviderProps {
    children: React.ReactNode;
}
const MainProvider: FC<MainProviderProps> = ({ children }) => (
    <RewardsProvider>
        {children}
    </RewardsProvider>
)

export default MainProvider;