import parser from 'html-react-parser';
import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { Application } from "../../../models/application.model";
import { Notification } from "../../../models/notification.model";
import { displayPastDate } from '../../../utils/date';
import { apps } from '../../../data/applications';

type NotificationCardProps = {
    notification: Notification;
};

export const NotificationCard: React.FunctionComponent<NotificationCardProps> = ({ notification }: NotificationCardProps) => {
    const { title, content, level } = notification;

    if (level === 'WARNING') {
        return (
            <div className="w-full p-4 bg-[#fec63d]">
                <div className="flex flex-row items-center">
                    <span className="grow font-bold">{`Message important - ${title}`}</span>
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="ml-2 text-jacarta"
                    />
                </div>
                <div className="mt-2 text-sm">{parser(content)}</div>
            </div>
        );
    }

    const { date, appId } = notification;
    const app = apps.find((app: Application) => app.id === appId);

    return (
        <div className="flex items-center p-4 border-b-2">
            {app ? (
                <Image src={app.iconPath as string} width={32} height={32} alt={app.name} className="mr-2" />
            ) : null}
            <div className="flex flex-col grow">
                <div className="flex flex-row items-center">
                    <span className="grow font-bold text-sm text-jacarta">{title}</span>
                    {date ? <span className="text-sm text-jacarta">{displayPastDate(date)}</span> : null}
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="ml-2 text-jacarta"
                    />
                </div>
                <div className="text-sm">{parser(content)}</div>
            </div>
        </div>
    );
}
