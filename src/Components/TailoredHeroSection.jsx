import Arrow from "../assets/curve.svg";
import Man from "../assets/businessman-working-laptop.png";
import Women from "../assets/business-women-talking-near-desk-coffee-break-hallway-big-corporation.png";
import Women2 from "../assets/side-view-businesswoman-showing-analytical-charts-her-male-coworker.png";
const TailoredHeroSection = () => {
  return (
    <div className="bg-[#F8FAF7] font-Poppins">
      <div className="max-w-6xl mx-10 md:mx-auto pt-[40px] md:mt-0">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="font-[400] text-[#252657] lg:text-[18px] text-[14px]">
            Taxapp For
          </p>
          <p className="font-[700] text-[#252657] lg:text-[48px] text-[20px]">
            Tailored Solutions for Everyone
          </p>
        </div>

        <div className=" p-[20px] relative my-[20px]  ">
          <img
            src={Arrow}
            alt="Arrow"
            className=" absolute left-[30px] top-0"
          />
          <div className=" grid lg:grid-cols-2  gap-[20px]">
            <div className="lg:max-w-[600px] w-full bg-[#E7E7E7] rounded-[10px] p-[43px]">
              <p className=" font-[500] text-[28px] text-[#2A2A2A]">
                Individual
              </p>
              <ul className=" list-disc space-y-[12px] mt-[20px] mb-[30px]">
                <li>Simplify your personal tax filings.</li>
                <li>Monitor deductions, savings, and compliance with ease.</li>
              </ul>

              <div className="max-w-[500px] h-auto w-full overflow-hidden rounded-[10px]">
                <img
                  src={Man}
                  alt="Business man"
                  className=" w-full h-full object-covero bg-center"
                />
              </div>
            </div>
            <div className=" lg:max-w-[470px] w-full space-y-[32px]">
              <div className=" bg-[#E7E7E7] rounded-[10px] p-[40px] ">
                <p className=" font-[500] text-[18px] text-[#2A2A2A]">
                  Businesses
                </p>
                <ul className=" text-[#2A2A2A] font-[400] text-[16px] list-disc mt-[16px] mb-[20px]">
                  <li>
                    Manage company taxes, employee payroll, and VAT seamlessly.
                  </li>
                  <li>
                    Stay compliant with automated tax calculations and filing
                    options.
                  </li>
                </ul>

                <div className="max-w-[400px] h-auto w-full overflow-hidden rounded-[10px]">
                  <img
                    src={Women}
                    alt="Business women"
                    className=" w-full h-full object-covero bg-center"
                  />
                </div>
              </div>
              <div className=" bg-[#CFE8F9] rounded-[10px] p-[40px] ">
                <p className=" font-[500] text-[28px] text-[#252657]">
                  Tax Professionals
                </p>
                <ul className=" list-disc space-y-[12px] text-[#252657] mt-[16px] mb-[20px]">
                  <li>
                    Provide top-notch services to clients using advanced tools.
                  </li>
                  <li>
                    Manage multiple accounts and streamline tax filings for
                    efficiency.
                  </li>
                </ul>

                <div className="max-w-[400px] h-auto w-full overflow-hidden rounded-[10px]">
                  <img
                    src={Women2}
                    alt="Business women"
                    className=" w-full h-full object-covero bg-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailoredHeroSection;
