import { airbnb, binance, coinbase, dropbox } from "../assets";

export default function Companies() {
  return (
    <div className="mt-[100px] pr-[120px]">
      <div className="flex items-center justify-between gap-10 ">
        <img src={airbnb} alt="airbnb" className="max-w-none w-[192px]" />
        <img src={binance} alt="binance" className="max-w-none w-[192px]" />
        <img src={coinbase} alt="coinbase" className="max-w-none w-[192px]" />
        <img src={dropbox} alt="dropbox" className="max-w-none w-[192px]" />
      </div>
    </div>
  );
}
