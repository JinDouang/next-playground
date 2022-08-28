import Image from 'next/image'
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

type SidebarItemProps = {
	icon: IconDefinition | string;
    label: string;
    link: string;
    showLabel: boolean;
    isActive?: boolean;
    isNotificationPending?: boolean;
    type?: 'primary' | 'secondary';
};

export const SidebarItem: React.FunctionComponent<SidebarItemProps> = ({ icon, label, link, showLabel, isActive = false, isNotificationPending = false, type = 'secondary' }: SidebarItemProps) => {
	return (
        <li className="relative">
            <Link className={`flex items-center h-12 rounded ${isActive ? 'bg-brocade' : 'hover:bg-brocade transition duration-300 ease-in-out'}`}
                href={link}>
                <div className="flex justify-center items-center w-11 ml-4">
                    {isNotificationPending ? (
                        <div className="absolute flex justify-center items-center w-7 h-5 left-0 bg-sunflower-mango">
                            <FontAwesomeIcon
                                icon={faExclamationCircle}
                                style={{ fontSize: 12, color: 'white' }}
                            />
                        </div>
                    ) : null}
                    {type === 'primary' ? (
                        <FontAwesomeIcon
                            icon={icon as IconDefinition}
                            style={{ fontSize: 28, color: 'white' }}
                        />
                    ) : (
                        <div className="flex justify-center items-center w-8 h-8 bg-gray-100 rounded-full z-10 overflow-hidden">
                            <Image src={icon as string} width={28} height={28} alt={label}/>
                        </div>
                    )}
                </div>
                {showLabel ? (
                    <span className="w-24 mx-2 text-sm text-white truncate">{label}</span>
                ) : null}
            </Link>
        </li>
	);
}
