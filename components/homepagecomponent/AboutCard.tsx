import React from "react";

interface AboutCardProps {
  title: string;
  info: string[];
  image: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, info, image }) => {
  return (
    <div className="flex-1 max-w-sm bg-[#FFFFFF] border border-gray-200 rounded-lg shadow font-nunito">
      <img
        className="rounded-t-lg w-[100%] h-[250px]"
        src={image}
        alt="homePic1"
      />
      <div className="p-5">
        <a href="#">
          <span className="mt-2 text-2xl font-bold tracking-tight text-gray-900 border-b-4 border-[#F5B418] pb-2">
            {title}
          </span>
        </a>
        <ul className="text-gray-900  list-disc pl-5 mt-8">
          {info.map((infoItem, index) => (
            <li className="mb-2" key={index}>
              {infoItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutCard;
