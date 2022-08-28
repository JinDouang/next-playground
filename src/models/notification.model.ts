import { Moment } from 'moment';

export type LevelNotification = "WARNING" | "NORMAL";

export type Notification = {
    title: string;
    content: string; // html content
    appId?: number;
    date?: Moment;
    level?: LevelNotification;
};
