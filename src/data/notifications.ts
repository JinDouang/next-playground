import moment from 'moment';

import { Notification } from "../models/notification.model";

export const notifications = [
    {
        title: 'Administration',
        content: '<span>Le parc informatique du lycée sera <b>complètement paralysé</b> pour maintenance <b>lundi 28 novembre toute la journée</b>. ' +
            'Internet sera aussi coupé. Les cours seront adaptés en fonction de ce contexte. Lorem ipsum dolor sit amet,' +
            ' consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>',
        level: "WARNING",
    },
    {
        title: 'Alexis Pichon',
        content: '<span>a partagé avec vous un <a href="/applications/magneto"><u>nouveau tableau Magnéto.</u></a></span>',
        appId: 6,
        date: moment("2023-01-26"),
    },
    {
        title: 'Catherine Ben Rahma',
        content: '<span>a partagé avec vous un <a href="/applications/blog"><u>nouveau blog Voyage en Italie.</u></a></span>',
        appId: 2,
        date: moment("2023-01-25"),
    },
    {
        title: 'Nadège Kiré',
        content: '<span>a partagé avec vous un <a href="/applications/form"><u>nouveau formulaire Sondage Cantine.</u></a></span>',
        appId: 4,
        date: moment("2023-01-24"),
    },
    {
        title: 'Alexis Pichon',
        content: '<span>a partagé avec vous un <a href="/applications/workspace"><u>nouveau document liste-etab.xlsx.</u></a></span>',
        appId: 5,
        date: moment("2022-12-13"),
    },
] as Notification[];
