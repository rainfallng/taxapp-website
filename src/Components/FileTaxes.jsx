import FIleIcon from "../assets/fileIcon.svg";
import CalendarIcon from "../assets/Calendar.svg";
import BusinessIcon from "../assets/businessIcon.svg";

const FileTaxes = () => {
  return (
    <div className="text-center bg-white grid md:grid-cols-2 lg:grid-cols-3 gap-[10px] place-items-center py-[71px] max-w-6xl mx-10 md:mx-auto mt-[40px] md:mt-0">
      <div className="w-full md:max-w-[343px] bg-[#ECF1F4] rounded-[15px] px-[32px] py-[52px] place-items-center h-full">
        <div className="grid gap-[24px] place-items-center h-full">
          <img src={FIleIcon} alt="File Icon" />
          <p className="text-[14px] lg:text-[18px] font-[500] text-[#000000]">
            File taxes on your own
          </p>
        </div>
      </div>
      <div className="w-full md:max-w-[343px] bg-[#ECF1F4] rounded-[15px] px-[32px] py-[52px] place-items-center h-full">
        <div className="grid gap-[24px] place-items-center h-full">
          <img src={CalendarIcon} alt="Calendar Icon" />
          <p className="text-[14px] lg:text-[18px] font-[500] text-[#000000]">
            Work with a tax pro
          </p>
        </div>
      </div>
      <div className="w-full md:max-w-[343px] bg-[#ECF1F4] rounded-[15px] px-[32px] py-[52px] place-items-center h-full">
        <div className="grid gap-[24px] place-items-center h-full">
          <img src={BusinessIcon} alt="Business Icon" />
          <p className="text-[14px] lg:text-[18px] font-[500] text-[#000000]">
            Get expert advisor for small businesses
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileTaxes;
