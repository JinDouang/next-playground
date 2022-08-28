import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export type Application = {
    iconPath: string | IconDefinition;
    id: number;
    link: string;
    name: string;
    notificationCount: number;
};
