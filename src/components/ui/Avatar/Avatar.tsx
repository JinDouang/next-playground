import React from "react";
import Image from "next/image";

type AvatarProps = {
    userSrc: string;
    altLabel?: string;
};

export const Avatar: React.FunctionComponent<AvatarProps> = ({userSrc, altLabel = ""}: AvatarProps) => {
  return (
      <Image className="h-14 w-14 border-2 border-white rounded-full" src={userSrc} width={64} height={64} alt={altLabel} />
  );
}