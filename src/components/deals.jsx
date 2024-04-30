import { card } from "../assets";
import GetStartedButton from "./common/getStartedButton";

export default function Deals() {
  return (
    <div className="flex mt-[120px] pr-[120px] gap-[78px] justify-center items-center">
      <div className="flex flex-col gap-6">
        <h3>Find a better card deal in few easy steps.</h3>
        <p>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <GetStartedButton />
      </div>
      <div>
        <img src={card} alt="" />
      </div>
    </div>
  );
}
