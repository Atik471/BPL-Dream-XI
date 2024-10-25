import logo from "../assets/logo.png";
import coin from "../assets/coin.png";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center  mx-[8%] my-[2rem] font-sora">
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
          <div className="flex gap-2">
            <span id="coin-count">0</span>
            <span className="font-medium">Coin</span>
            <img src={coin} alt="" className="w-6 h-6"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
