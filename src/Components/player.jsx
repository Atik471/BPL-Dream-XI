import PropTypes from "prop-types"
import profileImg from "../assets/profile.png"
import flagImg from "../assets/flag.png"
import { useEffect, useState } from "react"

function Player({player, selectedPlayers, setSelectedPlayers}){
    const [chosen, setChosen] = useState(false)
    const {playerId, name, country, image, role, battingType, bowlingType, biddingPrice } = player

    
    useEffect(() => {
        const activeBtn = JSON.parse(localStorage.getItem('selectedPlayers'))
        setChosen(activeBtn.some(p => p.playerId === playerId))
    }, [])

    
    const handleClick = () => {
        let newSelected = JSON.parse(localStorage.getItem('selectedPlayers'))
        let exists = newSelected.some(p => p.playerId === playerId)

        const coinCount = document.getElementById("coin-count")
        console.log(Number(biddingPrice.replace(/[^0-9.-]/g, "")) , Number(coinCount.innerText))
        let price = Number(biddingPrice.replace(/[^0-9.-]/g, ""))
        if(!exists && price <= Number(coinCount.innerText)){
            setSelectedPlayers([...selectedPlayers, player])
            setChosen(!chosen)
            coinCount.innerText = Number(coinCount.innerText) - price
        }
        else{
            setSelectedPlayers(newSelected.filter(p => p.playerId !== playerId))
            setChosen(!chosen)
            coinCount.innerText = Number(coinCount.innerText) + price 
        }
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
                <button onClick={handleClick} className={`px-3 py-1 border-solid border-2 border-slate-300  hover:border-white duration-300 transition-all rounded-lg ${chosen ? "bg-custom-golden" : "bg-slate-200 hover:bg-custom-golden"}`}
                //style={chosen ? select : deselect}
                  id="chooseBtn">Choose Player</button>
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