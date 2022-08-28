import React from 'react';

import { courses } from "../../../data/courses";
import { homeworks } from "../../../data/homeworks";
import { CourseCard } from "../CourseCard/CourseCard";
import { HomeworkCard } from "../HomeworkCard/HomeworkCard";

type WidgetContentProps = {
    selectedWidgetId: number;
};

export const WidgetContent: React.FunctionComponent<WidgetContentProps> = ({ selectedWidgetId }: WidgetContentProps) => {
    const renderCardList = (): React.ReactNode => {
        switch (selectedWidgetId) {
            case 1:
            case 2:
            case 3:
                return homeworks?.map((homework, index) => <HomeworkCard key={index} data={homework} />);
            case 4:
            case 5:
                return courses?.map((course, index) => <CourseCard key={index} data={course} />);
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-row flex-wrap gap-4 justify-evenly">
            {renderCardList()}
        </div>
    );
}
