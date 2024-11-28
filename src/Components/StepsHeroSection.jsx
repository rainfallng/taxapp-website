import Slider from "react-slick";
import Arrow from "../assets/doodle arrow 1.svg";
import Slide1 from "../assets/taxapp screen mockup 2.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StepsHeroSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const steps = [
    {
      id: 1,
      title: "Sign Up & Set Up Your Profile",
      description: [
        "Create an account and enter your details",
        "Customize your profile to suit your business or personal tax needs.",
      ],
      image: Slide1,
    },
    {
      id: 2,
      title: "Track & Calculate Taxes Automatically",
      description: [
        "Use Taxapp’s smart tools to monitor income and expenses in real-time.",
        "Automatically calculate your taxes based on your location and applicable regulations.",
      ],
      image: Slide1,
    },
    {
      id: 3,
      title: "File & Pay Taxes Seamlessly",
      description: [
        "File your tax returns directly from the app with a few clicks.",
        "Make secure payments or receive reminders to stay on schedule.",
      ],
      image: Slide1,
    },
  ];

  return (
    <div className="bg-[#F8FAF7] font-Poppins">
      <div className="max-w-6xl mx-10 md:mx-auto pt-[40px] md:mt-0">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="font-[400] text-[#252657] lg:text-[18px] text-[14px]">
            How It Works
          </p>
          <p className="font-[700] text-[#252657] lg:text-[48px] text-[20px]">
            Simplify Tax Management in 3 Easy Steps:
          </p>
        </div>

        <div className="flex items-center justify-center my-[20px]">
          <img src={Arrow} alt="Arrow" />
        </div>
        <div className="my-[40px]">
          <Slider {...sliderSettings}>
            {steps.map((step) => (
              <div key={step.id} className=" ">
                <div className=" grid place-items-center lg:flex  items-center gap-[48px]">
                  <div className="  max-w-[600px] w-full h-auto order-2 lg:order-1">
                    <img
                      src={step.image}
                      alt={`Step ${step.id}`}
                      className="w-full"
                    />
                  </div>

                  <div className="max-w-[408px] w-full text-center md:text-left order-1 lg:order-2">
                    <div className="flex items-center justify-center">
                      <p className="text-[48px] w-[72px] h-[72px] text-center rounded-full bg-[#2EAB8D] text-white">
                        {step.id}
                      </p>
                    </div>
                    <p className="font-[600] text-[24px] lg:text-[28px] text-[#121212] mt-[24px] text-center">
                      {step.title}
                    </p>
                    <ul className="font-Poppins font-[500] text-[14px] lg:text-[18px] text-[#717171] lg:list-disc mt-[20px] space-y-[20px]">
                      {step.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default StepsHeroSection;
