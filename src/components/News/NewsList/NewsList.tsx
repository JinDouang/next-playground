import React from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import { News } from "../../../models/news.model";

type NewsListProps = {
    news: News[];
};

export const NewsList: React.FunctionComponent<NewsListProps> = ({ news }: NewsListProps) => {
    return (
        <div className="flex justify-between items-center grow gap-2 h-full">
            {news?.map((n: News) => <NewsCard news={n} key={n.title} />)}
        </div>
    );
}
