import {Application} from "../models/application.model";
import {faHome, faThLarge, faUserCircle} from "@fortawesome/free-solid-svg-icons";

export const mainApps: Application[] = [
    {
        iconPath: faHome,
        link: '/',
        name: 'Accueil',
        notificationCount: 0
    },
    {
        iconPath: faUserCircle,
        link: 'profile',
        name: 'Profil',
        notificationCount: 0
    },
    {
        iconPath: faThLarge,
        link: 'application',
        name: 'Applications',
        notificationCount: 0
    }
] as Application[];