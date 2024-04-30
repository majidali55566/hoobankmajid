import { star, shield, send } from "../assets";
import GetStartedButton from "./common/getStartedButton";
import OurServices from "./ourServices";

function Services() {
  const services = [
    {
      path: "34rv",
      content: {
        image: <img src={star} alt="start icon" className="max-w-none" />,
        content: {
          title: "Reward",
          text: "The best credit cards offer some tantalizing combinations of  promotions and prizes.",
        },
      },
    },
    {
      path: "i34",
      content: {
        image: <img src={shield} alt="shield-icon" className="max-w-none" />,
        content: {
          title: "100% Secured",
          text: "We take proactive steps make sure your information and transactions are secure.",
        },
      },
    },
    {
      path: "i34",
      content: {
        image: <img src={send} alt="send icon" className="max-w-none" />,
        content: {
          title: "Balance Transfer",
          text: "A balance transfer credit card can save you a lot of money in interest charges.",
        },
      },
    },
  ];
  return (
    <div className="mt-[180px] pr-[120px]  gap-[87px] ">
      <div className="flex gap-4 justify-center items-center">
        <div className="flex flex-col gap-8">
          <h3>You do the business,we'll handle the money.</h3>
          <p>
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <GetStartedButton />
        </div>

        <OurServices services={services} />
      </div>
    </div>
  );
}

export default Services;
