import PropTypes from "prop-types"
import profileImg from "../assets/profile.png"
import flagImg from "../assets/flag.png"

function Player({player, selectedPlayers, setSelectedPlayers}){
    const {name, country, image, role, battingType, bowlingType, biddingPrice } = player

    const handleClick = () => {
        setSelectedPlayers([...selectedPlayers, player])
    }

    return (
        <>
            <div className="border-solid border-2 border-slate-200 rounded-2xl p-4 flex flex-col gap-4">
                <div className=" overflow-hidden flex justify-center"><img src={image} alt="img" className="h-auto rounded-xl"/></div>
                <div className="flex gap-4 my-2">
                    <img src={profileImg} alt="profile-img" className="w-6"/>
                    <p className="text-lg font-semibold">{name}</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-2 text-gray-600 font-semibold">
                        <img src={flagImg} alt="flag-img" className="w-4 h-5"/>
                        <p className="text-gray-700 font-semibold">{country}</p>
                    </div>
                    <p className=" bg-slate-200 rounded-md px-3 py-2">{role}</p>
                </div>
                <hr />
                <p className="font-semibold">Rating</p>
                <div className="flex justify-between">
                    <p>{battingType}</p>
                    <p>{bowlingType}</p>
                </div>
                
                <div className="flex justify-between items-center">
                <p className="font-bold">Price: {biddingPrice}</p>
                <button onClick={handleClick} className="px-3 py-1 border-solid border-2 border-slate-300 hover:bg-custom-golden hover:border-white duration-300 transition-all rounded-lg">Choose Player</button>
                </div>
            </div>
        </>
    )
}

Player.propTypes = {
    key: PropTypes.int,
    player: PropTypes.object,
    setSelectedPlayers: PropTypes.func,
    selectedPlayers: PropTypes.array
}

export default Player