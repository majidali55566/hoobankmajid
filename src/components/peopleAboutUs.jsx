import { majidCircle, people01, people02, people03, quotes } from "../assets";
import "../index.css";

export default function PeopleAboutUs() {
  return (
    <div className="mt-[120px] mr-[120px] relative ">
      <h3 className="mb-10">people about us</h3>

      <div className="flex gap-10 ">
        <div className="flex flex-col gap-10 p-12 w-[370px] h-[395px] bg-black-gradient-2 rounded-[20px]">
          <p>
            <img src={quotes} alt="quote icon" className="mb-5" />
            Technology is a way to change people's lives and make it better for
            the future.
          </p>
          <div className="flex justify-center items-center gap-5">
            <img src={majidCircle} alt="" />
            <div className="flex flex-col gap-3">
              <p className="text-base">Majid Ali Pahore</p>
              <p className="text-base">Founder & Leader</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 p-12 w-[370px] h-[395px] bg-black-gradient-2 rounded-[20px]">
          <p>
            <img src={quotes} alt="quote icon" className="mb-5" />
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="flex justify-center items-center gap-5">
            <img src={people02} alt="" />
            <div className="flex flex-col gap-3">
              <p className="text-base">Herman Jensen</p>
              <p className="text-base">Founder & Leader</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 p-12 w-[370px] h-[395px] bg-black-gradient-2 rounded-[20px]">
          <p>
            <img src={quotes} alt="quote icon" className="mb-5" />
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="flex justify-center items-center gap-5">
            <img src={people03} alt="" />
            <div className="flex flex-col gap-3">
              <p className="text-base">Herman Jensen</p>
              <p className="text-base">Founder & Leader</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[300px] h-[600px] border border-white rounded-[50%] bg-[#1A2980]  blur-[100px] opacity-60 absolute right-[-50px] top-[-200px]"></div>
    </div>
  );
}
