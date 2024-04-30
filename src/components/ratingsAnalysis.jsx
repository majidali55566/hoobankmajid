import { TbMinusVertical } from "react-icons/tb";
function RatingAnalysis() {
  return (
    <div className="flex justify-between items-center pr-[120px] mt-12">
      <div className=" flex gap-6 justify-center items-center ">
        <p className="text-[2.5rem] font-semibold text-white">3800+</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#DEF9FA]">
          USERS ACTIVE
        </p>
      </div>
      <TbMinusVertical color="#33BBCF" />
      <div className=" flex gap-6 ">
        <p className="text-[2.5rem] font-semibold text-white">230+</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#DEF9FA]">
          TRUSTED COMPANIES
        </p>
      </div>
      <TbMinusVertical color="#33BBCF" />
      <div className=" flex gap-6 ">
        <p className="text-[2.5rem] font-semibold text-white">$230M+</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#33BBCF] via-[#7DE7EB] to-[#DEF9FA]">
          TRANSACTION
        </p>
      </div>
    </div>
  );
}

export default RatingAnalysis;
