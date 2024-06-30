import React from "react";
import Iconimg from "../../components/imgs/mainimg.png";
import { RiArrowRightLine } from "react-icons/ri";

const HomePage = () => {
  return (
    <div>
      <header className="w-[95%] mt-[150px] m-auto relative">
        <div
          style={{
            backgroundImage: `url(${Iconimg})`,
          }}
          className="w-[100%] h-[720px] rounded-ss-[100px] rounded-ee-[100px] bg-cover bg-center relative"
        >
          <h1 className="text-[65px] text-[#fff] font-normal font-serif ml-[25px] absolute top-[70px]">
            Let's make your <br /> home beautiful together
          </h1>
          <p className="absolute top-[270px] left-[25px] text-[22px] text-[#fff] font-medium ">
            There are many variations of the passages <br /> of lorem Ipsum from
            available, majority.
          </p>
          <button className="absolute w-[220px] h-[70px] flex items-center justify-center top-[370px] left-[25px] bg-[#CDA274] text-white text-[18px] font-semibold rounded-[18px] gap-3 hover:bg-[#be884d]">
            Get Started <RiArrowRightLine className="w-[25px] h-[25px]" />
          </button>
        </div>
      </header>
      <section className=" w-[90%] h-[250px] flex justify-between mt-[100px] m-auto">
        <span className="w-[31%] flex flex-col items-center">
          <h2 className="text-[25px] font-serif text-[#292F36] font-semibold">
            Interior Work
          </h2>
          <p className="text-[22px] mt-[20px] font-normal text-center text-[#4D5053]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="flex items-center text-[18px] font-semibold font-sans mt-[50px] gap-[15px] text-[#4D5053]">
            Read More <RiArrowRightLine />
          </button>
        </span>
        <span className="w-[31%] flex flex-col items-center ">
          <h2 className="text-[25px] font-serif text-[#292F36] font-semibold">
            Interior Work
          </h2>
          <p className="text-[22px] mt-[20px] font-normal text-center  text-[#4D5053]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="flex items-center text-[18px] font-semibold font-sans mt-[50px] gap-[15px]  text-[#4D5053]">
            Read More <RiArrowRightLine />
          </button>
        </span>
        <span className="w-[31%] flex flex-col items-center ">
          <h2 className="text-[25px] font-serif text-[#292F36] font-semibold">
            Realization
          </h2>
          <p className="text-[22px] mt-[20px] font-normal text-center  text-[#4D5053]">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <button className="flex items-center text-[18px] font-semibold font-sans mt-[55px] gap-[15px]  text-[#4D5053]">
            Read More <RiArrowRightLine />
          </button>
        </span>
      </section>
    </div>
  );
};

export default HomePage;
