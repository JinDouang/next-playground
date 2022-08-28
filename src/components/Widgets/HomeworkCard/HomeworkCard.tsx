import { Homework } from "../../../models/homework.model";

type HomeworkCardProps = {
  data: Homework;
};

export const HomeworkCard: React.FunctionComponent<HomeworkCardProps> = ({ data }: HomeworkCardProps) => {
  return (
      <div className="flex justify-between items-center w-80 h-20 px-4 bg-gray-100 border-l-8 border-[#01b187] rounded-md cursor-pointer">
          <span className="font-bold line-clamp-2">{data.title}</span>
          <span className="ml-4 line-clamp-2">{data.subject}</span>
      </div>
  );
}
