import { apple, bill, playStore } from "../assets";

export default function ControlBillings() {
  return (
    <div className="flex pr-[120px] mt-[160px] justify-center items-center relative">
      <div>
        <img src={bill} alt="" />
      </div>

      <div className="flex flex-col ">
        <h3>Easily control your billing & invoicing.</h3>
        <p>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex gap-4 mt-5">
          <img src={apple} alt="download on apple store" />
          <img src={playStore} alt="download on play store" />
        </div>
      </div>
      <div className="w-20 h-36 border border-white rounded-[50%] bg-white opacity-60  blur-[100px] absolute left-[-100px] top-0"></div>
      <div className="w-20 h-36 border border-white rounded-[50%] bg-[#FC67FA] opacity-60  blur-[100px] absolute left-[-100px] bottom-0"></div>
    </div>
  );
}
