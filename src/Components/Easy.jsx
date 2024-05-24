import Assistant from "../assets/Assistant.svg";
import Object from "../assets/OBJECTS.svg";
import Streamline from "../assets/Streamline.svg";
import WomanSmiling from "../assets/WomanSmiling.png";
const Easy = () => {
  return (
    <div className="  bg-[#F8FAF7]  py-[71px]  font-Poppins">
      <div className=" max-w-[613px] mx-auto text-center">
        <p className="font-[600] text-[36px] text-[#252657] mb-[24px]">
          So easy to do - it’s child’s play
        </p>
        <p className=" font-[400] text-[18px] text-[#4A4A68]">
          Create an account, answer easy-to-understand questions, and let
          Taxapp&apos;s intuitive software take care of everything else.
        </p>
      </div>

      <div className="relative bg-white max-w-[920px] mx-auto rounded-[30px]  my-[51px] pt-[80px]">
        <img src={Object} alt="" className=" absolute bottom-0 left-0" />
        <div className="  grid md:flex items-center justify-between px-[48px] py-[13px]">
          <div className=" max-w-[380px]">
            <p className=" max-w-[305px] font-[600] text-[32px] text-[#252657] font-Poppins">
              No tax expertise needed
            </p>
            <p className=" font-[400] text-[16px] text-[#4A4A68] py-[16px]">
              Confused with all the complexities of tax filing? No problem! Our
              intuitive tax software will guide you through the whole process.
              Unlock tax freedom!
            </p>
            <p className="cursor-pointer inline-block text-[18px] text-[#FFFFFF] font-[600] px-[31px] py-[11px] bg-[#52D0B2]  rounded-full">
              How it works
            </p>
          </div>
          <div className="">
            <img src={Assistant} alt="" />
          </div>
        </div>
      </div>

      <div className="relative bg-[#CFE8F9] max-w-[920px] mx-auto rounded-[30px]  my-[51px] pt-[80px]">
        <div className="  grid md:flex items-center justify-between px-[48px] py-[13px]">
          <div className=" max-w-[380px]">
            <p className=" max-w-[305px] font-[600] text-[32px] text-[#252657] font-Poppins">
              Super fast, <br /> Super reliable
            </p>
            <p className=" font-[400] text-[16px] text-[#4A4A68] py-[16px]">
              Taxapp makes e-filing your tax return simple. Our tax software is
              so fast and reliable making your filing process done in as quick
              as 10 minutes!
            </p>
            <p className="cursor-pointer inline-block text-[18px] text-[#FFFFFF] font-[600] px-[31px] py-[11px] bg-[#2EAB8D]  rounded-full">
              Get started
            </p>
          </div>
          <div className="">
            <img src={Streamline} alt="" />
          </div>
        </div>
      </div>

      <div className=" my-[40px] md:my-[100px] max-w-[613px] mx-auto text-center ">
        <p className="font-[600] text-[36px] text-[#252657] mb-[24px]">
          Be in control of your own tax return
        </p>
        <p className=" font-[400] text-[18px] text-[#4A4A68]">
          E-file instantly and get instant notifications about the status of
          your tax return, giving you comfort that it is accepted by the FIRS.
        </p>
      </div>

      <div className="relative bg-[#F4F4F7] max-w-[1096px] mx-auto rounded-[30px]  my-[51px] pt-[80px]">
        <div className="  grid md:flex items-center justify-between px-[48px] py-[13px]">
          <div className="">
            <img src={WomanSmiling} alt="" />
          </div>
          <div className=" max-w-[410px]">
            <p className=" font-[600] text-[32px] text-[#252657] font-Poppins">
              Get access to support from AI Tax assist as well as live tax
              experts
            </p>
            <p className=" font-[400] text-[16px] text-[#4A4A68] py-[16px]">
              Make informed decisions and get instant answers with AI Tax
              Assist. AI chat support is available for any question, big or
              small, any time of the day.
            </p>
            <p className="cursor-pointer inline-block text-[16px] text-[#FFFFFF] font-[500] px-[66px] py-[11px] bg-[#57B87A]  rounded-full">
              Get started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Easy;
