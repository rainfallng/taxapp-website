import TaxGuide from "../assets/tax guide.svg";
import faq from "../assets/faq.svg";
import Video from "../assets/video tutorial.svg";
import Blog from "../assets/blog.svg";
import Support from "../assets/customer-support.svg";
import { MdArrowRight } from "react-icons/md";

const ResourcesHeroSection = () => {
  return (
    <div className="bg-[#F8FAF7] font-Poppins">
      <div className="max-w-5xl mx-10 lg:mx-auto pt-[40px] md:mt-0">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="font-[400] text-[#252657] lg:text-[18px] text-[14px]">
            Resources
          </p>
          <p className="font-[700] text-[#252657] lg:text-[48px] text-[20px]">
            Everything You Need to Master Your Taxes
          </p>
        </div>

        <div className=" my-[50px] grid md:grid-cols-2 gap-[24px] place-items-center">
          <div className=" p-[32px] border border-[#B8B8B8] rounded-[10px] lg:max-w-[555px] w-full">
            <div className="">
              <div className=" space-y-[36px] ">
                <img src={TaxGuide} alt="" />
                <p className="  text-[#2A2A2A] font-[600] text-[26px]">
                  Tax Guides
                </p>
                <p className=" text-start font-[400] text-[18px]">
                  Comprehensive articles to help you understand tax laws and
                  best practices.
                </p>
              </div>
              <div className=" flex items-center mt-[50px] gap-[5px]">
                <p className=" font-[500] text-[#278F76] text-[16px]">
                  Get started
                </p>
                <MdArrowRight size={30} className=" text-[#278F76]" />
              </div>
            </div>
          </div>

          <div className=" p-[32px] border border-[#B8B8B8] rounded-[10px] lg:max-w-[555px] w-full">
            <div className="">
              <div className=" space-y-[36px] ">
                <img src={faq} alt="" />
                <p className="  text-[#2A2A2A] font-[600] text-[26px]">FAQs</p>
                <p className=" text-start font-[400] text-[18px]">
                  Get quick answers to common questions about using Taxapp and
                  managing taxes.
                </p>
              </div>
              <div className=" flex items-center mt-[50px] gap-[5px]">
                <p className=" font-[500] text-[#278F76] text-[16px]">
                  Get started
                </p>
                <MdArrowRight size={30} className=" text-[#278F76]" />
              </div>
            </div>
          </div>

          <div className=" p-[32px] border border-[#B8B8B8] rounded-[10px] lg:max-w-[555px] w-full">
            <div className="">
              <div className=" space-y-[36px] ">
                <img src={Video} alt="" />
                <p className="  text-[#2A2A2A] font-[600] text-[26px]">
                  Videos & Tutorials
                </p>
                <p className=" text-start font-[400] text-[18px]">
                  Step-by-step video guides to help you navigate the app.
                </p>
              </div>
              <div className=" flex items-center mt-[50px] gap-[5px]">
                <p className=" font-[500] text-[#278F76] text-[16px]">
                  Get started
                </p>
                <MdArrowRight size={30} className=" text-[#278F76]" />
              </div>
            </div>
          </div>

          <div className=" p-[32px] border border-[#B8B8B8] rounded-[10px] lg:max-w-[555px] w-full">
            <div className="">
              <div className=" space-y-[36px] ">
                <img src={Blog} alt="" />
                <p className="  text-[#2A2A2A] font-[600] text-[26px]">Blog</p>
                <p className=" text-start font-[400] text-[18px]">
                  Stay informed on the latest tax regulations, news, and
                  financial tips.
                </p>
              </div>
              <div className=" flex items-center mt-[50px] gap-[5px]">
                <p className=" font-[500] text-[#278F76] text-[16px]">
                  Get started
                </p>
                <MdArrowRight size={30} className=" text-[#278F76]" />
              </div>
            </div>
          </div>

          <div className=" p-[32px] border border-[#B8B8B8] rounded-[10px] lg:max-w-[555px] w-full">
            <div className="">
              <div className=" space-y-[36px] ">
                <img src={Support} alt="" />
                <p className="  text-[#2A2A2A] font-[600] text-[26px]">
                  Customer Support
                </p>
                <p className=" text-start font-[400] text-[18px]">
                  Reach out to our friendly support team via chat, email, or
                  phone for assistance.
                </p>
              </div>
              <div className=" flex items-center mt-[50px] gap-[5px]">
                <p className=" font-[500] text-[#278F76] text-[16px]">
                  Get started
                </p>
                <MdArrowRight size={30} className=" text-[#278F76]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesHeroSection;
