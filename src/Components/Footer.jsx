import Logo from "../assets/taxapplogowhite.svg";
import Google from "../assets/getitongoogle.svg";
import AppStore from "../assets/downloadonappstore.svg";
import Twitter from "../assets/twitterlogo.svg";
import Facebook from "../assets/facebookLogo.svg";
import Instagram from "../assets/instagramlogo.svg";

const Footer = () => {
  return (
    <div className="h-auto bg-[#278F76] font-Poppins text-white">
      <div className="max-w-5xl mx-auto pt-10 pb-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <img
            src={Logo}
            alt="Taxapp Logo"
            className="max-w-[200px] w-full md:hidden"
          />
          <div className="md:max-w-[312px] w-full border-b md:border-b-0 pb-[10px] md:pb-0">
            <p className="text-[18px] font-[500] mb-[20px] lg:mb-[40px]">
              How It Works
            </p>
            <div className="space-y-[16px] font-[400] text-[16px]">
              <p>Sign Up & Set Up Your Profile</p>
              <p>Track & Calculate Taxes Automatically</p>
              <p>File & Pay Taxes Seamlessly</p>
            </div>
          </div>

          <div className="md:max-w-[150px] w-full border-b md:border-b-0 pb-[10px] md:pb-0">
            <p className="text-[18px] font-[500] mb-[20px] lg:mb-[40px]">
              Taxapp For
            </p>
            <div className="space-y-[16px] font-[400] text-[16px]">
              <p>Individuals</p>
              <p>Businesses</p>
              <p>Tax Professionals</p>
            </div>
          </div>

          <div className="md:max-w-[210px] w-full border-b md:border-b-0 pb-[10px] md:pb-0">
            <p className="text-[18px] font-[500] mb-[20px] lg:mb-[40px]">
              Products
            </p>
            <div className="space-y-[16px] font-[400] text-[16px]">
              <p>Tax Filing Platform</p>
              <p>Expense Tracker</p>
              <p>Payroll Integration</p>
              <p>VAT Management</p>
              <p>Analytics Dashboard</p>
              <p>Notifications & Reminders</p>
            </div>
          </div>

          <div className="md:max-w-[150px] w-full border-b md:border-b-0 pb-[10px] md:pb-0">
            <p className="text-[18px] font-[500] mb-[20px] lg:mb-[40px]">
              Resources
            </p>
            <div className="space-y-[16px] font-[400] text-[16px]">
              <p>Tax Guides</p>
              <p>FAQs</p>
              <p>Videos & Tutorials</p>
              <p>Blog</p>
              <p>Customer Support</p>
            </div>
          </div>
        </div>

        <div className="py-[30px] flex flex-col sm:flex-row items-center justify-between border-b border-[#2EAB8D] gap-6">
          <div className="flex flex-wrap justify-center sm:justify-start gap-[19px] items-center">
            <img
              src={Logo}
              alt="Taxapp Logo"
              className="max-w-[100px] w-full hidden md:block"
            />
            <img
              src={AppStore}
              alt="App Store"
              className="max-w-[100px] w-full"
            />
            <img
              src={Google}
              alt="Google Play"
              className="max-w-[100px] w-full"
            />
          </div>
          <div className="flex gap-[10px] items-center justify-center">
            <img src={Twitter} alt="Twitter" className="max-w-[50px] w-full" />
            <img
              src={Facebook}
              alt="Facebook"
              className="max-w-[50px] w-full"
            />
            <img
              src={Instagram}
              alt="Instagram"
              className="max-w-[50px] w-full"
            />
          </div>
        </div>

        <div className="py-[16px] text-center">
          <p className="font-[400] text-[12px]">
            Copyright © 2024. Taxapp Rainfall Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
