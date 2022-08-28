import React from "react";
import Iframe from "react-iframe";

type ServiceFrameProps = {
    url: string;
    service: string;
};

export const ServiceFrame: React.FunctionComponent<ServiceFrameProps> = ({url, service}: ServiceFrameProps) => {

    return (
        <div className="h-full w-full">
            <Iframe
                url={url}
                frameBorder={0}
                id={service}
                width="100%"
                height="100%"
            />
        </div>
    );
}