import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="  bg-[#2D2D43]  py-[71px]  font-Poppins">
      <div className=" max-w-[613px] mx-auto text-center">
        <p className="font-[400] text-[14px] lg:text-[18px] text-[#ffffff] mb-[24px]">
          A solution for every tax payer
        </p>
        <p className=" cursor-pointer font-[700] text-[28px] lg:text-[36px] text-[#ffffff] mb-[40px]">
          Let us help you get your taxes done in real time
        </p>

        <Link to="http://web.taxpoint.ng/" target="blank">
          <p className=" inline-block text-[14px] text-[#FFFFFF] font-[500] px-[66px] py-[11px] border-[2px] border-[#57B87A]  rounded-full">
            Get started
          </p>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
