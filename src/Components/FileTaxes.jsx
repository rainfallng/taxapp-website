import FIleIcon from "../assets/fileIcon.svg";
import CalendarIcon from "../assets/Calendar.svg";

const FileTaxes = () => {
  return (
    <div className="  bg-white grid  md:grid-cols-2 lg:grid-cols-4 gap-[10px] place-items-center py-[71px] max-w-6xl mx-10 md:mx-auto mt-[40px] md:mt-0">
      <div className="  w-full md:max-w-[256px] bg-[#ECF1F4] rounded-[15px] px-[32px] grid gap-[24px] py-[52px] place-items-center">
        <img src={FIleIcon} alt="" />
        <p className=" text-[14px] lg:text-[18px] font-[500] text-[#000000]">
          File taxes on your own{" "}
        </p>
      </div>
      <div className=" w-full md:max-w-[256px] bg-[#ECF1F4] rounded-[15px] px-[32px] grid gap-[24px] py-[52px] place-items-center">
        <img src={CalendarIcon} alt="" />
        <p className=" text-[14px] lg:text-[18px] font-[500] text-[#000000]">
          Work with a tax pro
        </p>
      </div>
      <div className=" w-full md:max-w-[256px] bg-[#ECF1F4] rounded-[15px] px-[32px] grid gap-[24px] py-[52px] place-items-center">
        <img src={FIleIcon} alt="" />
        <p className=" text-[14px] lg:text-[18px] font-[500] text-[#000000]">
          File taxes on your own{" "}
        </p>
      </div>
      <div className=" w-full md:max-w-[256px] bg-[#ECF1F4] rounded-[15px] px-[32px] grid gap-[24px] py-[52px] place-items-center">
        <img src={FIleIcon} alt="" />
        <p className=" text-[14px] lg:text-[18px] font-[500] text-[#000000]">
          File taxes on your own{" "}
        </p>
      </div>
    </div>
  );
};

export default FileTaxes;
