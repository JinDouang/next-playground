import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Widget } from "../../../models/widget.model";
import styles from "./WidgetCard.module.scss";

type WidgetCardProps = {
    isActive: boolean;
    widget: Widget;
    onSelect: (widget: Widget) => void;
};

export const WidgetCard: React.FunctionComponent<WidgetCardProps> = ({ isActive, widget, onSelect }: WidgetCardProps) => {
    const { color, icon, statValue, title } = widget;
    return (
        <div className={styles["widget-card"]}>
            <div onClick={() => onSelect(widget)} className={`container ${isActive ? "active" : "idle"}`} style={isActive ? { borderColor: color } : undefined}>
                {/* content */}
                <div className={`container-content ${isActive ? "active" : "idle"}`}>
                    <span className={`container-content-title ${isActive ? "active" : "idle"}`}>{title}</span>
                    <div className="flex flex-row items-center mt-2">
                        <span className='font-medium text-4xl'>{statValue}</span>
                        <FontAwesomeIcon
                            icon={icon}
                            className="text-2xl ml-2"
                            color={color}
                        />
                    </div>
                </div>
                {/* expand arrow */}
                <div className={`container-expand ${isActive ? "active" : "idle"}`} style={{ backgroundColor: color }}>
                    <FontAwesomeIcon
                        icon={isActive ? faAngleDown : faAngleRight}
                        className="text-2xl text-white"
                    />
                </div>
            </div>
        </div>
    );
}
