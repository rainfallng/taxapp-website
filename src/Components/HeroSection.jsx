import HeroImage from "../assets/heroImage.png";

const HeroSection = () => {
  return (
    <div className="    bg-[#F8FAF7]">
      <div className="  max-w-6xl mx-10 md:mx-auto pt-[40px] md:mt-0">
        <div className=" grid gap-[5px] md:gap-0 md:flex justify-between items-center">
          <div className="  max-w-[452px]">
            <p className=" font-[700] text-[#252657] lg:text-[56px] text-[20px]">
              Get the right tax help for you
            </p>
            <p className=" my-[24px] font-[400] text-[14px] lg:text-[20px] text-[#252657]">
              Get unlimited live help from tax experts, plus a final review
              before you file—all for free.
            </p>
            <p className="cursor-pointer text-center md:inline-block text-[18px] text-[#ffffff] font-[600] px-[31px] py-[11px] bg-[#52D0B2]  rounded-full">
              Sign up for free
            </p>
          </div>
          <div className="">
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
