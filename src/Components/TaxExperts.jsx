import HeroImage from "../assets/woman.png";
import CheckIcon from "../assets/check.svg";
import { Link } from "react-router-dom";

const TaxExperts = () => {
  return (
    <div className="    bg-[#F8FAF7]">
      <div className="  max-w-6xl mx-10 md:mx-auto mt-[40px] md:mt-0">
        <div className=" grid gap-[5px] md:gap-0 md:flex justify-between items-center">
          <div className="">
            <img src={HeroImage} alt="" />
          </div>
          <div className="  max-w-[500px]">
            <p className=" font-[600] text-[#252657] lg:text-[36px] text-[20px]">
              Let tax experts do your taxes for you, or help as you file
            </p>
            <p className=" my-[24px] font-[400] text-[14px] lg:text-[16px] text-[#4A4A68] flex items-center gap-[5px]">
              <span>
                <img src={CheckIcon} alt="" />
              </span>
              Get all the returns you deserve.
            </p>

            <p className=" my-[24px] font-[400] text-[14px] lg:text-[16px] text-[#4A4A68] flex items-center gap-[5px]">
              <span>
                <img src={CheckIcon} alt="" />
              </span>
              Be rest assured you filed your taxes correctly with expert review
            </p>
            <p className=" my-[24px] font-[400] text-[14px] lg:text-[16px] text-[#4A4A68] flex items-center gap-[5px]">
              <span>
                <img src={CheckIcon} alt="" />
              </span>
              100% accurate calculations guaranteed
            </p>
            <p className=" my-[24px] font-[400] text-[14px] lg:text-[16px] text-[#4A4A68] flex items-center gap-[5px]">
              <span>
                <img src={CheckIcon} alt="" />
              </span>
              Audit support guaranteed
            </p>
            <Link to="https://taxapp.ng/">
              <p className=" inline-block text-[18px] text-[#FFFFFF] font-[600] px-[31px] py-[11px] bg-[#52D0B2]  rounded-full">
                Get started
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxExperts;
