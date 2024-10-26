import logo from "../assets/logo.png";
import coin from "../assets/coin.png";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center px-[8%] py-[1rem] font-sora fixed top-0 left-0 right-0 bg-white w-full border-b-2 border-slate-300 z-10">
        <img src={logo} alt="logo" className="w-16 h-16"/>
        <div className="flex gap-[3rem]">
          <ul className="flex gap-[3rem]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Fixture</a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Schedules</a>
            </li>
          </ul>
          <div className="flex gap-2 font-semibold">
            <span id="coin-count">0</span>
            <span>Coin</span>
            <img src={coin} alt="" className="w-6 h-6"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
