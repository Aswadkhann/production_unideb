import React from "react";
import AboutCard from "@/components/homepagecomponent/AboutCard";
import { Carousel } from "react-responsive-carousel";
import CountingNumber from "@/components/homepagecomponent/CountingNumber";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MapComponent from "@/components/common/map/MapComponent";
import ContactForm from "@/components/common/form/ContactForm";
import { BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import { FaEnvelope, FaMapMarker, FaPhoneAlt } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

interface AboutDataItem {
    image: string;
    title: string;
    info: string[];
}

interface ProgramDataItem {
    image: string;
    title: string;
    link: string;
}

interface CarouselDataItem {
    image1: string;
    image2: string;
    image3: string;
}

const Home: React.FC = () => {
    const Data = {
        AboutData: [
            {
                image: "/homeAboutPic1.jpg",
                title: "Why Study In Hungary?",
                info: [
                    "European standard research university",
                    "Reasonable fee and living expenses",
                    "Enriching cultural experience in Europe",
                    "Practical activities and internship opportunities",
                    "Having a Hungarian visa can travel to many European countries",
                ],
            },
            {
                image: "/homeAboutPic2.jpg",
                title: "City Introduction",
                info: [
                    "Population 200,000",
                    "Debrecen is the second largest city in Hungary",
                    "One of the cities with the highest per capita GDP in the east",
                    "Advanced mechanical and chemical industries",
                    "Famous hot spring resources, attracting a large number of tourists",
                ],
            },
            {
                image: "/homeAboutPic3.jpg",
                title: "University Introduction",
                info: [
                    "A prestigious school with a history of 500 years",
                    "Global ranking Top 200",
                    "European standard English teaching",
                    "Obtain a medical certificate and work in multiple countries",
                    "Diversified course items",
                    "Students hailing from over 100 nations",
                ],
            },
        ] as AboutDataItem[],
        ProgramData: [
            {
                image: "/homeProgramPic1.jpg",
                title: "Foundation Programs",
                link: "/foundation-program",
            },
            {
                image: "/homeProgramPic2.jpg",
                title: "Undergraduate Programs",
                link: "/undergraduate-program",
            },
            {
                image: "/homeProgramPic3.jpg",
                title: "Graduate Study Program",
                link: "/graduate-study-program",
            },
            {
                image: "/homeProgramPic4.jpg",
                title: "Medical Study Program",
                link: "/medical-study-program",
            },
            {
                image: "/homeProgramPic5.jpg",
                title: "PhD/Doctoral Program",
                link: "/doctoral-program",
            },
        ] as ProgramDataItem[],
        CarouselData: [
            {
                image1: "/carousel1.png",
                image2: "/carousel2.png",
                image3: "/carousel3.png",
            },
            {
                image1: "/carousel4.png",
                image2: "/carousel5.png",
                image3: "/carousel6.png",
            },
        ] as CarouselDataItem[],
    };

    return (
        <>
            <div className="relative w-full h-[90vh] overflow-hidden font-nunito">
            <video
  className="absolute inset-0 w-full h-full"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  poster="/path-to-your-poster-image.jpg"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.5)", // Adjust the brightness value (0.8) to darken the video
  }}
>
  <source src="/video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-xl font-semibold mb-8">
                        Welcome to University of Debrecen, Regional Office South Asia
                        Website
                    </h1>
                    <h1
                        className="text-white text-[60px] font-bold mb-[70px] text-center max-w-lg"
                        style={{ lineHeight: "70px" }}
                    >
                        Admission Open February 2024
                    </h1>

                    <button className="bg-[#F5B418] text-white px-[60px] font-semibold border border-[#F5B418] py-4 rounded-3xl hover:bg-transparent hover:text-[#F5B418] hover:border hover:border-white transition duration-300">
                        Apply Now
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex max-w-[1400px] justify-center flex-col items-center">
                    <h1 className="text-center text-[36px] font-bold m-[60px] text-gray-800">
                        About Hungary
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {Data.AboutData.map((item, index) => (
                            <AboutCard
                                title={item.title}
                                info={item.info}
                                key={index}
                                image={item.image}
                            />
                        ))}
                    </div>

                    <div className="flex justify-center border border-gray-200 rounded-lg shadow  mt-[80px] mb-[50px] w-[70%] sm:w-[70%] md:w-[90%]">
                        <div className="flex justify-around w-[100%] flex-col md:flex-row">
                            <CountingNumber
                                title="Total Students"
                                countText="K+"
                                end={28}
                                border
                            />
                            <CountingNumber
                                title="Programs in English"
                                countText="+"
                                end={80}
                                border
                            />
                            <CountingNumber title="Faculties" end={14} border />
                            <CountingNumber title="Campus" end={8} />
                        </div>
                    </div>

                    <h1 className="text-center text-[36px] font-bold m-10 text-gray-800">
                        Campus Life
                    </h1>
                    <Carousel
                        showArrows={true}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        useKeyboardArrows={true}
                        showStatus={false}
                        className="mb-8 sm:mb-10 md:mb-12 p-2 rounded-lg shadow  dark:border-gray-700 w-[80%] md:w-[100%] bg-[#FFFFFF]"
                    >
                        {Data.CarouselData.map((item, index) => {
                            return (
                                <div
                                    className="flex flex-col sm:flex-row justify-between gap-1 "
                                    key={index}
                                >
                                    <img
                                        src="/homeAboutPic1.jpg"
                                        alt={`Slide ${index}`}
                                        className="object-cover flex-1"
                                    />
                                    <img
                                        src="/homeAboutPic2.jpg"
                                        alt={`Slide ${index}`}
                                        className="object-cover flex-1"
                                    />
                                    <img
                                        src="/homeAboutPic3.jpg"
                                        alt={`Slide ${index}`}
                                        className="object-cover flex-1"
                                    />
                                </div>
                            );
                        })}
                    </Carousel>
                </div>

                <div className="bg-[#155744] w-[100%] flex flex-col items-center justify-center mb-4 pt-[50px] pb-[100px]">
                    <h1 className="text-[#F5B418] font-bold text-[50px] mb-[80px]">
                        Study Programs
                    </h1>
                    <div className="max-w-[1400px] flex gap-5 justify-around items-center w-[100%] flex-wrap px-5 sm:py-10">
                        {Data.ProgramData.map((item, index) => {
                            return (
                                <Link href={item.link} key={index}>
                                    <div
                                        className=" py-4 px-1 sm:px-3 hover:scale-110 transition bg-white flex flex-col items-center rounded-md"
                                        key={index}
                                    >
                                        <img
                                            src={item.image}
                                            className="h-[150px] hover:translate-y-[-30px] hover:scale-125 transition-transform duration-300 ease-in-out mb-5"
                                        />

                                        <h1 className="text-[20px] w-[70%] text-center ">
                                            {item.title}
                                        </h1>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col text-center items-center px-10">
                    <h1 className="text-[30px] sm:text-[40px] text-gray-800 font-bold mt-10 mb-5">
                        If you need more guidance, just drop us a line
                    </h1>
                    <p className="text-gray-500">
                        Feel free to reach out to our team. We who are in extremely love
                        with eco-friendly system, are here to help!
                    </p>
                    <div className="border-b-4 border-[#F5B418] w-[30%] my-5" />
                </div>
                <div className="flex w-full max-w-[1200px] gap-[60px] items-center py-5 flex-col-reverse md:flex-row px-10 mb-10 mt-5 ">
                    <div className="w-full flex-1 items-center justify-center flex flex-col">
                        <MapComponent
                            lat={25.220234}
                            long={55.28387}
                            width="580px"
                            height="300px"
                        />
                        <h2 className="text-[#155744] font-bold text-center my-8">
                            UNIVERSITY OF DEBRECEN, HUNGARY SOUTH ASIA REGIONAL OFFICE
                        </h2>
                        <div className="flex justify-around px-4 items-center">
                            <div className="flex flex-col justify-center gap-3 my-5">
                                <div className="flex items-center text-[18px] justify-center">
                                    <span className="mx-4">
                                        <FaMapMarker
                                            className="mx-1"
                                            style={{ color: "#155744" }}
                                        />
                                    </span>
                                    Level 41, Emirates Towers Sheikh Zayed Road Dubai, UAE
                                </div>
                                <div className="flex items-center text-[18px]">
                                    <span className="mx-3 pl-2">
                                        <FaPhoneAlt style={{ color: "#155744" }} />
                                    </span>{" "}
                                    +971 50 844 8119
                                </div>
                                <div className="flex items-center text-[18px]">
                                    <span className="mx-4">
                                        <FaEnvelope style={{ color: "#155744" }} className="mx-1" />
                                    </span>{" "}
                                    southasia@reps.unideb.hu
                                </div>
                            </div>

                            <div className="col-span-4 flex items-end flex-col mt-2 w-[50%] gap-3">
                                <Link href="https://www.facebook.com/UODHROSA" target="_blank">
                                    <GrFacebookOption size={30} color="#155744" />
                                </Link>
                                <Link href="https://www.facebook.com/UODHROSA" target="_blank">
                                    <BiLogoInstagram size={30} color="#155744" />
                                </Link>
                                <Link href="https://www.facebook.com/UODHROSA" target="_blank">
                                    <BiLogoTwitter size={30} color="#155744" />
                                </Link>
                                <Link href="https://www.facebook.com/UODHROSA" target="_blank">
                                    {" "}
                                    <AiFillLinkedin size={30} color="#155744" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ContactForm title="Send us a message" buttonTitle={"Send Message"} />
                </div>
            </div>
        </>
    );
};

export default Home;
