import { TbTargetArrow } from "react-icons/Tb";
import { FcDonate } from "react-icons/fc";
import { FaHandsHelping } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import child1 from "../image/ourGoals/child1.jpg";
import child2 from "../image/ourGoals/child2.jpg";
import Image from "next/image";
import { useState } from "react";

const goalItems = [
  {
    icon: <TbTargetArrow className="flex-1 rounded-full justify-center mt-5" fontSize={60} color="white" />,
    title: "OUR MISSION",
    description: " Empower positive change in the world. We believe that every contribution, no matter how small, has the potential to make a significant impact. With your generous donations, we can continue our journey towards creating a better future for communities in need.",
  },
  {
    icon: <FcDonate className="flex-1 rounded-full justify-center mt-5" fontSize={60} color="white" />,
    title: "MAKE DONATIONS",
    description: "Every donation, regardless of its size, is a step towards alleviating suffering, spreading kindness, and fostering progress. Your support enables us to initiate and sustain vital programs that address a wide range of challenges, from education and healthcare to disaster relief and community development.",
  },
  {
    icon: <FaHandsHelping className="flex-1 rounded-full justify-center mt-5" fontSize={60} color="white" />,
    title: "HELP & SUPPORT",
    description: "Whether you're an individual facing hardships or a community in crisis, we're here to stand by your side. Our dedicated team works tirelessly to ensure that our programs and resources cater to a diverse range of needs, from immediate relief to long-term development.",
  },
  {
    icon: <GrProjects className="flex-1 rounded-full justify-center mt-5 transition-colors" fontSize={60} color="white" />,
    title: "OUR PROGRAMS",
    description: "Our impactful programs drive meaningful change by addressing challenges and fostering growth. Meticulously designed, each initiative leaves a lasting impact on lives we touch. With innovation and collaboration, we're dedicated to achieving positive transformation on multiple fronts.",
  },
];

const OurGoal = () => {
  const [expandedItemIndex, setExpandedItemIndex] = useState(-1);

  const handleReadMore = (index) => {
    setExpandedItemIndex(index === expandedItemIndex ? -1 : index);
  };
  return (
    <div className="flex flex-col">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 text-[#f5f3ec] justify-center">
        {goalItems.map((item, index) => (
          <div  className=" flex flex-col bg-[#1d0a5b] p-5 w-72 text-center">
            <div key={index} className="h-[400px]">
              <div className="flex items-center text-center">{item.icon}</div>
              <div className="flex items-center text-center mt-5">
                <p className="flex-1 text-lg">{item.title}</p>
              </div>
                <p>{item.description}</p>
            </div>
            <div className="border-t ">
              <button
                onClick={() => handleReadMore(index)}
                className="text-blue-500 mt-5 ring-1 p-2 hover:underline focus:outline-none"
              >
                {expandedItemIndex === index ? "Read Less" : "Read More"}
              </button> </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default OurGoal;