import bg_shadow from "../assets/bg-shadow.png"

function Newsletter(){

    return (
        <>
            <div className="flex flex-col justify-center items-center text-black bg-white absolute top-0 translate-y-[-50%] rounded-2xl md:w-[60%] w-[80%] p-[4rem] font-sora gap-3 border-2 border-slate-300"
                 style={{backgroundImage: `url(${bg_shadow})`,
                 backgroundRepeat: 'no-repeat',
                 backgroundSize: 'cover',}}>
                <h1 className="font-bold text-2xl">Subscribe to our Newsletter</h1>
                <p className="text-gray-500 font-semibold">Get the latest updates and news right in your inbox!</p>
                <form className="flex md:flex-row flex-col gap-3 justify-center">
                    <input type="text" name="Email" placeholder="Enter Your Email" className="px-6 py-3 text-black rounded-md border-2 border-slate-300 mr-3"/>
                    <input type="submit" value="Subscribe" style={{background: "linear-gradient(135deg, hsla(328, 49%, 61%, 1) 0%, hsla(33, 88%, 71%, 1) 50%, hsla(46, 70%, 62%, 1) 100%)"}}
                    className="px-6 py-3 text-black font-bold rounded-md cursor-pointer"/>
                </form>
            </div>
        </>
    )
}

export default Newsletter