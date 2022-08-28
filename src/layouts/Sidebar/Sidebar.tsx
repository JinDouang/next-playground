import { NextRouter, useRouter } from "next/router";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft, faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import { SidebarItem } from "../../components/Sidebar/SidebarItem/SidebarItem";
import { SidebarMainIcon } from "../../components/Sidebar/SidebarMainIcon/SidebarMainIcon";
import { SidebarSearchbar } from "../../components/Sidebar/SidebarSearchbar/SidebarSearchbar";
import { Application } from "../../models/application.model";
import { mainApps } from "../../data/mainApplications";
import { platform } from "../../data/platform";

type SidebarProps = {
    apps: Application[];
};

export const Sidebar: React.FunctionComponent<SidebarProps> = ({apps}: SidebarProps) => {
    const [isExpanded, setExpanded] = React.useState<boolean>(false);
    const [searchValue, setSearchValue] = React.useState<string>('');
    const filteredApps: Application[] = apps?.filter((app: Application) => app.name.toLowerCase().includes(searchValue.toLowerCase()));
    const router: NextRouter = useRouter();

    const expand = (): void => {
        setExpanded((expanded: boolean) => !expanded);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(event.target.value);
    };

    const getAppsLink = (app: Application): string => `/applications/${app.link}`;

    return (
        <nav className={`absolute flex flex-col z-50 w-${isExpanded ? '44' : '19'} h-full bg-sidebar-theme rounded-r-xl shadow-2xl overflow-hidden`}>
            <div className="mt-4">
                <SidebarMainIcon icon={platform.imagePath} backgroundColor="white" label={platform.name} />
            </div>
            <div className="mt-4">
                <SidebarSearchbar isOpened={isExpanded} value={searchValue} onChange={handleSearchChange} onOpen={expand} />
            </div>
            <ul className="mt-4 grow">
                {/* main apps */}
                {mainApps?.map((app: Application) =>
                    <SidebarItem
                        type='primary'
                        key={app.name}
                        label={app.name}
                        icon={app.iconPath}
                        link={app.link}
                        showLabel={isExpanded}
                        isNotificationPending={app.notificationCount > 0}
                        isActive={app.link === router.asPath}
                    />
                )}
                {/* dynamic apps loaded from api */}
                {filteredApps?.map((app: Application) =>
                    <SidebarItem
                        key={app.name}
                        label={app.name}
                        icon={app.iconPath}
                        link={getAppsLink(app)}
                        showLabel={isExpanded}
                        isNotificationPending={app.notificationCount > 0}
                        isActive={getAppsLink(app) === router.asPath}
                    />
                )}
            </ul>
            <div onClick={expand} className="flex flex-row justify-self-end justify-end py-4 cursor-pointer rounded hover:bg-brocade transition duration-300 ease-in-out">
                <FontAwesomeIcon
                    icon={isExpanded ? faAngleDoubleLeft : faAngleDoubleRight}
                    className="text-3xl text-white w-19"
                />
            </div>
        </nav>
    );
}
