import { Application } from "../models/application.model";

export const apps = [
    {
        iconPath: '/appIcons/moodle.png',
        id: 1,
        link: 'moodle',
        name: 'Moodle',
        notificationCount: 0,
    },
    {
        iconPath: '/appIcons/blog.svg',
        id: 2,
        link: 'blog',
        name: 'Blog',
        notificationCount: 2
    },
    {
        iconPath: '/appIcons/collaborativeWall.svg',
        id: 3,
        link: 'collaborativewall',
        name: 'Mur collaboratif',
        notificationCount: 0,
    },
    {
        iconPath: '/appIcons/form.svg',
        id: 4,
        link: 'form',
        name: 'Formulaire',
        notificationCount: 0
    },
    {
        iconPath: '/appIcons/workspace.svg',
        id: 5,
        link: 'workspace',
        name: 'Espace Documentaire',
        notificationCount: 0
    },
    {
        iconPath: '/appIcons/magneto.png',
        id: 6,
        link: 'magneto',
        name: 'Magnéto',
        notificationCount: 0
    },
] as Application[];
