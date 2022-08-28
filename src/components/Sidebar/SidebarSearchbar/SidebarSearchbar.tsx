import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type SidebarSearchbarProps = {
    isOpened: boolean;
	value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onOpen: () => void;
};

export const SidebarSearchbar: React.FunctionComponent<SidebarSearchbarProps> = ({ isOpened, value, onChange, onOpen }: SidebarSearchbarProps) => {
	return isOpened ? (
        <div className="flex justify-center items-center w-40 h-8 mx-2 bg-gray-100 rounded-full ">
            <FontAwesomeIcon
                icon={faSearch}
                className="text-xl text-gray-500"
            />
            <input type="text" value={value} onChange={onChange} autoFocus spellCheck={false} className="w-28 ml-2 bg-gray-100 caret-indigo-sloth outline-none" />
        </div>
    ) : (
        <div onClick={onOpen} className="flex justify-center items-center w-auto h-8 mx-2 text-gray-500 bg-gray-100 rounded-full cursor-pointer hover:text-white hover:bg-brocade transition duration-300 ease-in-out">
            <FontAwesomeIcon
                icon={faSearch}
                className="text-xl"
            />
        </div>
    );
}
