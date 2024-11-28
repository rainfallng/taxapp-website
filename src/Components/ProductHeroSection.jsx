import TaxFilling from "../assets/tax filing platform.svg";
import ExpenseTracker from "../assets/expense tracker.svg";
import Payroll from "../assets/payroll.svg";
import VAT from "../assets/vat management.svg";
import Dashboard from "../assets/dashboard analytics.svg";
import Notification from "../assets/notification and reminder.svg";
const ProductHeroSection = () => {
  return (
    <div className="bg-[#F8FAF7] font-Poppins">
      <div className="max-w-5xl mx-10 lg:mx-auto pt-[40px] md:mt-0">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="font-[400] text-[#252657] lg:text-[18px] text-[14px]">
            Products
          </p>
          <p className="font-[700] text-[#252657] lg:text-[48px] text-[20px]">
            Explore Our Suite of Tax Management Tools
          </p>
        </div>

        <div className=" my-[50px] grid md:grid-cols-2 lg:grid-cols-3 gap-[24px] place-items-center">
          <div className=" p-[32px] bg-[#EEEEEE] rounded-[5px] lg:max-w-[360px] w-full">
            <div className=" space-y-[36px] flex flex-col items-center justify-center">
              <img src={TaxFilling} alt="" />
              <p className=" bg-[#BEEDE2] rounded-full py-[4px] px-[13px] text-[#1F725E] font-[500] text-[18px]">
                Tax Filling Platform
              </p>
              <p className=" text-center">
                File your taxes quickly and accurately through an intuitive
                interface.
              </p>
            </div>
          </div>
          <div className=" p-[32px] bg-[#52D0B2] rounded-[5px] lg:max-w-[360px] w-full">
            <div className=" space-y-[36px] flex flex-col items-center justify-center">
              <img src={ExpenseTracker} alt="" />
              <p className=" bg-[#278F76] rounded-full py-[4px] px-[13px] text-[#ffffff] font-[500] text-[18px]">
                Expense Tracker
              </p>
              <p className=" text-white text-center">
                Keep tabs on your income and expenses for efficient tax
                calculation.
              </p>
            </div>
          </div>
          <div className=" p-[32px] bg-[#EEEEEE] rounded-[5px] lg:max-w-[360px] w-full">
            <div className=" space-y-[36px] flex flex-col items-center justify-center">
              <img src={Payroll} alt="" />
              <p className=" bg-[#BEEDE2] rounded-full py-[4px] px-[13px] text-[#1F725E] font-[500] text-[18px]">
                Payroll Integration
              </p>
              <p className=" text-center">
                Automate employee tax deductions and generate complaint reports.
              </p>
            </div>
          </div>
          <div className=" p-[32px] bg-[#EEEEEE] rounded-[5px] lg:max-w-[360px] w-full">
            <div className=" space-y-[36px] flex flex-col items-center justify-center">
              <img src={VAT} alt="" />
              <p className=" bg-[#BEEDE2] rounded-full py-[4px] px-[13px] text-[#1F725E] font-[500] text-[18px]">
                VAT Management
              </p>
              <p className=" text-center">
                Simplify VAT collection, calculation, and remittance for your
                business
              </p>
            </div>
          </div>
          <div className=" p-[32px] bg-[#EEEEEE] rounded-[5px] lg:max-w-[360px] w-full">
            <div className=" space-y-[36px] flex flex-col items-center justify-center">
              <img src={Dashboard} alt="" />
              <p className=" bg-[#BEEDE2] rounded-full py-[4px] px-[13px] text-[#1F725E] font-[500] text-[18px]">
                Analytics Dashboard
              </p>
              <p className=" text-center">
                Gain insights into your tax records, payments, and compliance
                trends.
              </p>
            </div>
          </div>
          <div className=" p-[32px] bg-[#717171] rounded-[5px] lg:max-w-[360px] w-full">
            <div className=" space-y-[36px] flex flex-col items-center justify-center">
              <img src={Notification} alt="" />
              <p className=" bg-[#E7E7E7] rounded-full py-[4px] px-[13px] text-[#414141] font-[500] text-[18px]">
                Notification & Reminder
              </p>
              <p className=" text-white text-center">
                Never miss a filing deadline with automated alerts and
                notifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeroSection;
