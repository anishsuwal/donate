
import { TbTargetArrow } from "react-icons/Tb";
import { FcDonate } from "react-icons/fc";
import { FaHandsHelping } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import hunger from "../image/causes/cause-hunger.jpg"
import education from "../image/causes/cause-education.jpg"
import rights from "../image/causes/cause-rights.jpg"
import culture from "../image/causes/cause-culture.jpg"



import Image from "next/image"
import { useState } from "react";


// ... (previous imports and code)

const causes = [
    {
        image: hunger,
        progress: "10$ / 500$",
        title: "HUNGER AND POVERTY",
        description: "We are committed to combating hunger and poverty in the most vulnerable regions. Our goal is to alleviate the suffering caused by lack of access to basic necessities, insufficient nutrition, and financial instability.",
    },
    {
        image: education,
        progress: "100$ / 1000$",
        title: "EDUCATION AND TRAINING",
        description: "We believe that education is a fundamental right that should be accessible to all, regardless of their background or circumstances. Our focus on education and training aims to equip individuals with the knowledge and skills they need to build a better future for themselves and their communities.",
    },
    {
        image: rights,
        progress: "500$ / 1000$",
        title: "HUMAN RIGHTS",
        description: "We are dedicated to upholding the principles of human rights and dignity for every person. Our commitment to human rights encompasses advocating for equality, justice, and freedom, regardless of one's background or identity.",
    },
    {
        image: culture,
        progress: "300$ / 1000$",
        title: "ARTS AND CULTURE",
        description: "We recognize the profound impact that arts and culture have on shaping societies and inspiring individuals. We are dedicated to fostering creativity, preserving heritage, and promoting cultural diversity to enrich the lives of people in our communities.",
    },
    // ... (other causes with similar structure)
];

const OurCauses = () => {
    const [expandedCauseIndex, setExpandedCauseIndex] = useState(-1);

    const handleReadMore = (index) => {
        setExpandedCauseIndex(index === expandedCauseIndex ? -1 : index);
    };

    return (
        <div className="flex flex-col">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 text-white justify-center">
                {causes.map((cause, index) => (
                    <div className="flex flex-col bg-white ring-1 text-[#1d0a5b] w-72 text-center hover:bg-[#f5f3ec]">
                        <div key={index} className="h-[530px]" >
                            <div className="flex items-center text-center">
                                <Image src={cause.image} width={615} height={600} objectFit="none" />
                            </div>

                            <div className="relative w-64 h-6 m-4 rounded-lg bg-gray-300">
                                <div className="absolute rounded-lg top-0 left-0 h-full bg-[#1d0a5b] text-[#f5f3ec]" style={{ width: '50%' }}>
                                    {cause.progress}
                                </div>
                            </div>
                            <div className="flex items-center text-center mt-5">
                                <p className="flex-1 text-lg font-semibold ">{cause.title}</p>
                            </div>
                            <div className="flex center text-justify m-4">
                                <p>{cause.description}</p>
                            </div>
                        </div>
                        <div className="border-t mt-5 ">
                            <button
                                onClick={() => handleReadMore(index)}
                                className="text-[#f5f3ec]  bg-[#1d0a5b]  ring-1 p-2 m-5  hover:underline focus:outline-none"
                            >
                                DONATE NOW              </button> </div>
                    </div>
                ))}
            </div>

            {/* ... Rest of the code ... */}
        </div>
    );
};

export default OurCauses;
