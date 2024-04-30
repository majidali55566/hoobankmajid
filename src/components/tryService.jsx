import GetStartedButton from "./common/getStartedButton";
import "../index.css";
export default function TryService() {
  return (
    <div className="mt-[100px]">
      <div className="flex bg-black-gradient-2 p-10 rounded-xl mr-[120px] gap-10 justify-center items-center">
        <div className="flex flex-col gap-7">
          <h3>Let's try our service now!</h3>
          <p>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div>
          <GetStartedButton />
        </div>
      </div>
    </div>
  );
}
