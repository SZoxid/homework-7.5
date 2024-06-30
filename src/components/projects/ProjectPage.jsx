import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import Bgimg from "../../components/imgs/bgimg.png";
import data from "../../data.json";

const ProjectPage = () => {
  return (
    <div>
      <header className="h-[350px] mt-[65px] m-auto">
        <div
          style={{
            backgroundImage: `url(${Bgimg})`,
          }}
          className="w-[100%] h-[350px] flex items-center justify-center bg-cover bg-center"
        >
          <h1 className="text-[70px] text-white font-normal font-serif mt-[60px]">
            Our Project
          </h1>
        </div>
      </header>
      <section className="border border-[#CDA274] w-[50%] h-[70px] flex justify-evenly mt-[40px] m-auto rounded-[18px] gap-5 text-[18px] font-semibold">
        <button>Bathroom</button>
        <button>Bed Room</button>
        <button>Kitchan</button>
        <button>Living Area</button>
      </section>
      <div className="w-[80%] grid-cols-2 mt-[40px] m-auto">
        <ul className="grid grid-cols-2 gap-[50px]">
          {data.bedroom.map((item) => (
            <li key={item.id} className="">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[670px] object-cover"
              />
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="mt-[38px] text-[24px] text-[#292F36] font-semibold font-serif">
                    {item.name}
                  </h1>
                  <p className="mt-[]] text-[20px] text-[#4D5053] font-normal">
                    {item.type}
                  </p>
                </div>
                <div className="w-[70px] h-[70px] flex justify-center mt-8 items-center rounded-full bg-[#F4F0EC]">
                  <button>
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-2 gap-[50px] mt-[50px]">
          {data.bathroom.map((item) => (
            <li key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[600px] object-cover"
              />
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="mt-[38px] text-[24px] text-[#292F36] font-semibold font-serif">
                    {item.name}
                  </h1>
                  <p className="mt-[]] text-[20px] text-[#4D5053] font-normal">
                    {item.type}
                  </p>
                </div>
                <div className="w-[70px] h-[70px] flex justify-center mt-8 items-center rounded-full bg-[#F4F0EC]">
                  <button>
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-2 gap-[50px] mt-[50px]">
          {data.kitchan.map((item) => (
            <li key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[600px] object-cover"
              />
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="mt-[38px] text-[24px] text-[#292F36] font-semibold font-serif">
                      {item.name}
                    </h1>
                    <p className="mt-[]] text-[20px] text-[#4D5053] font-normal">
                      {item.type}
                    </p>
                  </div>
                  <div className="w-[70px] h-[70px] flex justify-center mt-8 items-center rounded-full bg-[#F4F0EC]">
                    <button>
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-2 gap-[50px] mt-[50px]">
          {data.livingarea.map((item) => (
            <li key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[600px] object-cover"
              />
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="mt-[38px] text-[24px] text-[#292F36] font-semibold font-serif">
                    {item.name}
                  </h1>
                  <p className="mt-[]] text-[20px] text-[#4D5053] font-normal">
                    {item.type}
                  </p>
                </div>
                <div className="w-[70px] h-[70px] flex justify-center mt-8 items-center rounded-full bg-[#F4F0EC]">
                  <button>
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
