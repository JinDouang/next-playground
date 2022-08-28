type Props = {
    children?: React.ReactNode;
    className?: string;
};

export const Dropdown = ({children, className}: Props) => {
  return (
    <div className={`origin-top-right absolute right-0 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${className || ''}`}>
         <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">Your Profile</a>
         <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Settings</a>
         <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Sign out</a>
    </div>
  );
}