import React, { ReactElement } from "react";
import {NextPageWithLayout} from "../_app";
import {MenuContainerLayout} from "../../layouts/MenuContainerLayout/MenuContainerLayout";
import {ServiceFrame} from "../../components/ServiceFrame/ServiceFrame";

const Application: NextPageWithLayout = (): ReactElement => {

    return (
        <div className="h-full w-full">
            <ServiceFrame
                url={"https://www.openstreetmap.org/export/embed.html"}
                service={"service"}
            />
        </div>
    )
}

Application.getLayout = function getLayout(page: ReactElement): ReactElement {
    return (
        <MenuContainerLayout>
            {page}
        </MenuContainerLayout>
    )
}

export default Application
