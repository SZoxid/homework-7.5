import React from "react";
import Bgimg from "../../components/imgs/mainimg.png";
import { RiArrowRightLine } from "react-icons/ri";

const ServicePage = () => {
  return (
    <div>
      <header className="border border-green-500 h-[350px] mt-[65px] m-auto">
        <div
          style={{
            backgroundImage: `url(${Bgimg})`,
          }}
          className="w-[100%] h-[350px] flex items-center justify-center bg-cover bg-center"
        >
          <h1 className="text-[70px] text-white font-normal font-serif mt-[60px]">
            Services
          </h1>
        </div>
      </header>
      <section className="w-[75%] h-[700px] mt-[200px] m-auto">
        <div className="flex justify-between">
          <span className="w-[33%] flex flex-col items-center">
            <h2 className="text-[25px] font-serif text-[#292F36] font-semibold">
              Project Plan
            </h2>
            <p className="text-[22px] mt-[20px] font-normal text-center text-[#4D5053]">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <button className="flex items-center text-[18px] font-semibold font-sans mt-[50px] gap-[15px]">
              Read More <RiArrowRightLine />
            </button>
          </span>
          <span className="w-[33%] flex flex-col  items-center">
            <h2 className="text-[25px] font-serif text-[#292F36] font-semibold">
              Interior Work
            </h2>
            <p className="text-[22px] mt-[20px] font-normal text-center text-[#4D5053]">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <button className="flex items-center text-[18px] font-semibold font-sans mt-[50px] gap-[15px]">
              Read More <RiArrowRightLine />
            </button>
          </span>
          <span className="w-[33%] flex flex-col  items-center">
            <h2 className="text-[25px] font-serif text-[#292F36] font-semibold">
              Retail Design
            </h2>
            <p className="text-[22px] mt-[20px] font-normal text-center text-[#4D5053]">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <button className="flex items-center text-[18px] font-semibold font-sans mt-[50px] gap-[15px]">
              Read More <RiArrowRightLine />
            </button>
          </span>
        </div>

        <div className="flex justify-between mt-[170px]">
          <span className="w-[33%] flex flex-col  items-center">
            <h2 className="text-[25px] font-serif text-[#292F36] font-semibold">
              2d/3d Art Work
            </h2>
            <p className="text-[22px] mt-[20px] font-normal text-center text-[#4D5053]">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <button className="flex items-center text-[18px] font-semibold font-sans mt-[50px] gap-[15px]">
              Read More <RiArrowRightLine />
            </button>
          </span>
          <span className="w-[33%] flex flex-col  items-center">
            <h2 className="text-[25px] font-serif text-[#292F36] font-semibold">
              Interior Work
            </h2>
            <p className="text-[22px] mt-[20px] font-normal text-center text-[#4D5053]">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <button className="flex items-center text-[18px] font-semibold font-sans mt-[50px] gap-[15px]">
              Read More <RiArrowRightLine />
            </button>
          </span>
          <span className="w-[33%] flex flex-col  items-center">
            <h2 className="text-[25px] font-serif text-[#292F36] font-semibold">
              Decoration Work
            </h2>
            <p className="text-[22px] mt-[20px] font-normal text-center text-[#4D5053]">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <button className="flex items-center text-[18px] font-semibold font-sans mt-[50px] gap-[15px]">
              Read More <RiArrowRightLine />
            </button>
          </span>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
