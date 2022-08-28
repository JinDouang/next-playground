import React from 'react';

import { Widget } from '../../../models/widget.model';
import { WidgetCard } from "../WidgetCard/WidgetCard";
import { WidgetContent } from "../WidgetContent/WidgetContent";

type WidgetsContainerProps = {
    widgets: Widget[];
};

export const WidgetsContainer: React.FunctionComponent<WidgetsContainerProps> = ({ widgets }: WidgetsContainerProps) => {
    const [selectedWidgetId, setSelectedWidgetId] = React.useState<number>(2);

    const selectWidget = (widget: Widget): void => {
        setSelectedWidgetId(widget.id);
    };

    return (
        <div className="relative flex w-full h-full">
            <div className="absolute flex justify-between gap-4 z-10 w-full px-4 overflow-hidden">
                {widgets?.map((widget: Widget) => <WidgetCard key={widget.id} widget={widget} isActive={widget.id === selectedWidgetId} onSelect={selectWidget} />)}
            </div>
            <div className="flex items-center w-full mt-16 p-4 pt-24 bg-white rounded-2xl drop-shadow">
                <WidgetContent selectedWidgetId={selectedWidgetId} />
            </div>
        </div>
    );
}
