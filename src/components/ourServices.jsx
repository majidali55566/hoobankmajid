export default function OurServices(props) {
  return (
    <div className="flex flex-col gap-4">
      {props.services.map((service) => (
        <div className="flex gap-7 px-5 py-11 h-[120px] justify-center items-center hover:bg-[#14101D] bg-opacity-25 border-0 rounded-[20px]">
          <div className="relative w-16 h-16 flex justify-center items-center">
            <div className="w-14 h-14 bg-[#09977C] bg-opacity-10 rounded-full border-0 absolute" />
            {service.content.image}
          </div>
          <div id="reward" className="">
            <p className="text-white font-semibold">
              {service.content.content.title}
            </p>
            <p className="text-base">{service.content.content.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
