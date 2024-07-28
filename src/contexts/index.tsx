import { FC } from "react";
import { RewardsProvider } from "./RewardsContext";
import { ProfileProvider } from "./ProfileContext";

interface MainProviderProps {
    children: React.ReactNode;
}
const MainProvider: FC<MainProviderProps> = ({ children }) => (
    <ProfileProvider>
        <RewardsProvider>
            {children}
        </RewardsProvider>
    </ProfileProvider>
)

export default MainProvider;