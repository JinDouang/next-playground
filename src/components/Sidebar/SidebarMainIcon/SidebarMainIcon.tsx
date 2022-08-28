import Image from 'next/image';

type SidebarMainIconProps = {
	icon: string;
    backgroundColor: string;
    label?: string;
};

export const SidebarMainIcon: React.FunctionComponent<SidebarMainIconProps> = ({ icon, backgroundColor, label = ""}: SidebarMainIconProps) => {
	return (
        <div className={`flex items-center justify-end py-1 w-16 h-10 rounded-r-full`}>
            <Image src={icon} width={50} height={50} alt={label} />
        </div>
    );
}
