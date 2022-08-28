import { faCalendarDay, faEnvelope, faGraduationCap, faStar } from "@fortawesome/free-solid-svg-icons";
import { Widget } from "../models/widget.model";

export const widgets: Widget[] = [
    {
        color: '#ffb600',
        icon: faEnvelope,
        id: 1,
        statValue: 4,
        title: 'Mails non lus',
    },
    {
        color: '#01b187',
        icon: faGraduationCap,
        id: 2,
        statValue: 6,
        title: 'Devoirs à faire',
    },
    {
        color: '#1464f6',
        icon: faStar,
        id: 3,
        statValue: 3,
        title: 'Notes nouvelles',
    },
    {
        color: '#ff8200',
        icon: faGraduationCap,
        id: 4,
        statValue: 2,
        title: 'Moodle en cours',
    },
    {
        color: '#5235ab',
        icon: faCalendarDay,
        id: 5,
        statValue: 1,
        title: 'À venir',
    }
];
