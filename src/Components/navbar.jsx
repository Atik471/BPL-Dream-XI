import logo from "../assets/logo.png";
import coin from "../assets/coin.png";
import menu from "../assets/menu.png"
import { useState } from "react";

function Navbar() {
  const [dropdown, setDropdown] = useState('hidden')

  const menuClick = () => {
     setDropdown(dropdown === 'hidden' ? 'flex flex-col' : 'hidden')
  }
  
  return (
    <>
      <div className="flex justify-between items-center md:px-[8%] px-[4%] py-[1rem] font-sora fixed top-0 left-0 right-0 bg-white w-full border-b-2 border-slate-300 z-10">
        <img src={logo} alt="logo" className="w-16 h-16"/>
        <div className="flex gap-[3rem] items-center">
          <ul className="md:flex hidden gap-[3rem]">
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
          {/* mobile menu */}
          <div className="md:hidden order-1 relative">
              <button onClick={menuClick}><img src={menu} alt="menu" /></button>
              <ul className={`${dropdown} gap-4 absolute top-6 right-6 bg-white border-2 border-slate-300 rounded-lg p-6  justify-between items-center`}>
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
          </div>
          <div className="flex gap-2 font-semibold p-2 border-2 border-slate-300 rounded-md md:text-base text-[0.9rem]">
            <span id="coin-count">0</span>
            <span>Coin</span>
            <img src={coin} alt="" className="md:w-6 md:h-6 w-5 h-5"/>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Navbar;
