import Newsletter from "./newsletter"
import footer_logo from "../assets/logo-footer.png"


function Footer(){

    return (
        <>
            <div className="w-full px-[8%] py-[3rem] mt-[14rem] flex flex-col justify-center items-center bg-[#06091A] text-white relative gap-8"
                 >
                <Newsletter></Newsletter>
                <div className="mt-[10%]">
                    <img src={footer_logo} alt="logo" />
                </div>
                <div className="flex justify-between">
                    <div className="max-w-[23%]">
                        <h1 className="font-semibold mb-4">About Us</h1>
                        <p className="text-gray-400">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-4">Quick Links</h1>
                        <ul className="text-gray-400">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-semibold mb-4">Subscribe</h1>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <form className="flex ">
                            <input type="text" name="Email" placeholder="Enter Your Email" className="px-6 py-3 text-black rounded-l-md border-2 border-r-0 border-slate-300"/>
                            <input type="submit" value="Subscribe" style={{background: "linear-gradient(135deg, hsla(328, 49%, 61%, 1) 0%, hsla(33, 88%, 71%, 1) 50%, hsla(46, 70%, 62%, 1) 100%)"}}
                            className="px-6 py-3 text-black font-bold rounded-r-md cursor-pointer"/>
                        </form>
                    </div>
                </div>
               
                <div className="w-full">
                    <hr className="border-slate-500 my-4" />
                    <p className="text-gray-400 mt-8 text-center">@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer