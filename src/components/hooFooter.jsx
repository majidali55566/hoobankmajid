import { facebook, instagram, linkedin, logo, twitter } from "../assets";

export default function HooFooter() {
  return (
    <footer className="">
      <div className="flex justify-between mr-[120px] mt-36 mb-10">
        <div id="log plus text">
          <img src={logo} alt="" />
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div id="useful links">
          <p>Use Links</p>
          <p>Content</p>
          <p>How it works</p>
          <p>Create</p>
          <p>Terms & Services</p>
        </div>
        <div>
          <p>Community</p>
          <p>Help Center</p>
          <p>Partners</p>
          <p>Suggestions</p>
          <p>Blog</p>
          <p>Newletters</p>
        </div>
        <div>
          <p>Partner</p>
          <p>Our partner</p>
          <p>Become a partner</p>
        </div>
        <hr />
      </div>
      <div className="flex justify-between items-center mr-[120px] pr-[120px]">
        <div>
          <p>copyright 2023 &#169; hoobank</p>
          <p> implemented by Majid ali pahore for devolopment practice</p>
        </div>

        <div className="flex justify-around gap-12">
          <img src={instagram} alt="" className="w-5 h-5" />
          <img src={facebook} alt="" className="w-5 h-5" />
          <img src={linkedin} alt-="" className="w-5 h-5" />
          <img src={twitter} alt="" className="w-5 h-5" />
        </div>
      </div>
    </footer>
  );
}
