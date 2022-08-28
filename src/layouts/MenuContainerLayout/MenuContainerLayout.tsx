import React, { useEffect } from 'react';

import { Sidebar } from "../Sidebar/Sidebar";
import { apps } from "../../data/applications";
import { AppService } from "../../services/app";

type Props = {
  children?: React.ReactNode;
};

export const MenuContainerLayout = ({children}:Props) => {
    useEffect(() => {
        // todo test issue/6
        AppService.test()
            .then(r => console.log("test"))
            .catch(err => console.error("err", err));
    });

    return (
      <div className="absolute w-full h-full bg-slate-100">
          <Sidebar apps={apps} />
          <main className="h-full ml-19">{children}</main>
      </div>
    )
}