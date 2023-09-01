import { BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import { FaMapMarker, FaPhoneAlt } from "react-icons/fa";
import { IoChatboxOutline } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";
import SocialLink from "./SocialLinks";
import TopNavBar from "./TopNavBar";
import Link from "next/link";
import SmallHeader from "./SmallHeader";
import React from "react";

const Header: React.FC = () => {
    return (
        <>
            <div className="hidden lg:block relative z-10">
                <div className="bg-[#155744] text-[#FFFFFF] font-nunito px-[70px] h-[45px] border-b border-[#F5B418] items-center">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center h-[45px] pb-[1px] ">
                            <SocialLink
                                icon={<GrFacebookOption size={20} />}
                                name={"Facebook"}
                                redirect={"https://www.facebook.com/UODHROSA"}
                                hoverBg={"#3B5998"}
                            />
                            <SocialLink
                                icon={<BiLogoInstagram size={20} />}
                                name={"Instagram"}
                                redirect={"https://www.facebook.com/UODHROSA"}
                                hoverBg={"#EA3A7E"}
                            />
                            <SocialLink
                                icon={<BiLogoTwitter size={20} />}
                                name={"Twitter"}
                                redirect={"https://www.facebook.com/UODHROSA"}
                                hoverBg={"#00ACEE"}
                            />
                            <SocialLink
                                icon={<AiFillLinkedin size={20} />}
                                name={"LinkedIn"}
                                redirect={"https://www.facebook.com/UODHROSA"}
                                hoverBg={"#3B5998"}
                            />
                        </div>

                        <div className="flex items-center font-normal text-[13px] ml-14">
                            <span className="pr-1">
                                <FaPhoneAlt />
                            </span>{" "}
                            +971 50 844 8119
                            <span className="ml-2 mr-1">|</span>
                            <span>
                                <IoChatboxOutline size={18} className="mx-1" />
                            </span>{" "}
                            southasia@reps.unideb.hu
                            <span className="ml-2 mr-1">|</span>
                            <span>
                                <FaMapMarker className="mx-1" />
                            </span>
                            Level 41, Emirates Towers Sheikh Zayed Road Dubai, UAE
                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-center my-8">
                    <Link href={"/"}>
                        <img src="/unideb-logo.png" width={155} alt="uni-logo" />
                    </Link>
                </div>

                <div className="h-[75px]  bg-[#F5B418] text-[#144438] border-t border-[#F5B400] font-sans text-[13px] flex font-semibold justify-center items-center">
                    <TopNavBar />
                </div>
            </div>
            <div className="block lg:hidden px-0 h-[75px] bg-[#F5B418] relative z-10">
                <SmallHeader />
            </div>
        </>
    );
};

export default Header;
