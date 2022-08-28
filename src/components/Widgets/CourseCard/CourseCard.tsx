import Image from "next/image";

import { Course } from "../../../models/course.model";

type CourseCardProps = {
  data: Course;
};

export const CourseCard: React.FunctionComponent<CourseCardProps> = ({ data }: CourseCardProps) => {
  return (
      <div className="flex w-80 h-20 bg-gray-100 rounded-md overflow-hidden cursor-pointer">
          <Image src={data.imagePath} width={256} height={256} alt={data.title} className="w-20 h-20 object-cover" />
          <div className="flex flex-col m-4">
              <span className="font-bold line-clamp-1">{data.title}</span>
              <span className="line-clamp-1">{data.author}</span>
          </div>
      </div>
  );
}
