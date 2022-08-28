import React from 'react';
import { News } from "../../../models/news.model";

type NewsCardProps = {
    news: News;
};

export const NewsCard: React.FunctionComponent<NewsCardProps> = ({ news }: NewsCardProps) => {
    return (
        <div className="flex flex-1 flex-col justify-end h-full bg-white bg-cover bg-center rounded-lg drop-shadow cursor-pointer" style={{ backgroundImage: `url(${news.imagePath})` }}>
            <div className="flex flex-col p-2 bg-white opacity-80 rounded-b-lg">
                <span className="font-bold line-clamp-1">{news.title}</span>
                <span className="text-sm whitespace-pre-line line-clamp-3">{news.content}</span>
            </div>
        </div>
    );
}
