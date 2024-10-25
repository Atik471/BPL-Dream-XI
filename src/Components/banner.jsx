import banner_logo from '../assets/banner-main.png'
import banner_img from '../assets/bg-shadow.png'

function Banner(){
    // const [coins, setCoins] = useState(0);

    

    const handleClick = () => {
        const coinCount = document.getElementById('coin-count');
        coinCount.innerText = `${parseInt(coinCount.innerText) + 1000000}`;
    } 

    return (
        <>
            <div className='mx-[8%] my-[3rem] bg-black flex flex-col justify-center items-center font-sora py-16 gap-6
                            rounded-3xl'
                 style={{backgroundImage: `url(${banner_img})`,
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: 'cover',}}>
                <img src={banner_logo} alt="banner" />
                <h1 className='text-white text-[2.5rem] font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h3 className='text-gray-300 text-[1.5rem] font-semibold'>Beyond Boundaries Beyond Limits</h3>
                <div className='border-solid border-2 border-custom-golden rounded-xl'>
                    <button className='bg-custom-golden py-3 px-5 m-2 font-semibold rounded-lg'
                            onClick={handleClick}>Claim Free Credit</button>
                </div>
            </div>
        </>
    )
}

export default Banner;