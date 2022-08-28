import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBell } from '@fortawesome/free-solid-svg-icons';

import { Notification } from "../../../models/notification.model";
import { NotificationCard } from '../NotificationCard/NotificationCard';

type NotificationsContainerProps = {
    notifications: Notification[];
};

export const NotificationsContainer: React.FunctionComponent<NotificationsContainerProps> = ({ notifications }: NotificationsContainerProps) => {
	return (
        <div className="w-full h-full overflow-y-auto bg-white drop-shadow">
            <div className="flex items-center p-4">
                <FontAwesomeIcon
                    icon={faBell}
                    className="text-xl text-jacarta"
                />
                <span className="mx-2 text-lg text-jacarta font-bold">Notifications</span>
                <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-xl text-jacarta"
                />
            </div>
            <div className="flex flex-col">
                {notifications?.map((notification: Notification, index: number) => <NotificationCard key={index} notification={notification} />)}
            </div>
        </div>
    );
}
