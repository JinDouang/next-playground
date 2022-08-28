import React from "react";
import {User} from "../../models/user.model";
import {Avatar} from "../ui/Avatar/Avatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons";

type WelcomeUserProps = {
    user: User;
};

export const WelcomeUser: React.FunctionComponent<WelcomeUserProps> = ({ user }: WelcomeUserProps) => {
	return (
        <div className="flex justify-between items-center">
            {/*avatar user icon */}
            <div className="flex items-center">
                <Avatar userSrc={user.path}/>
                <span className="font-bold text-jacarta text-3xl ml-2">Bonjour, {user.firstName}</span>
            </div>
            {/* settings */}
            <FontAwesomeIcon
                icon={faGear}
                className="w-6 h-6 text-philippine-gray cursor-pointer"
            />
        </div>
    );
}
