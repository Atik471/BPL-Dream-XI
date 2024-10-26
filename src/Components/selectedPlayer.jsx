import PropTypes from "prop-types"
import trash from "../assets/trash-bin.png"
import { showToast } from "./toastService"

function SelectedPlayer({selected, setSelectedPlayers}){

    const {playerId, name, image, battingType, bowlingType, biddingPrice} = selected
    
    const handleClick = () => {
        let newSelected = JSON.parse(localStorage.getItem('selectedPlayers'))
        setSelectedPlayers(newSelected.filter(p => p.playerId !== playerId))
        const coinCount = document.getElementById("coin-count")
        let price = Number(biddingPrice.replace(/[^0-9.-]/g, ""))
        coinCount.innerText = Number(coinCount.innerText) + price
        showToast("Player Removed!", "success");
    }

    return (
        <>
            <div className="flex justify-between items-center gap-4 mb-4 border-2 rounded-lg border-slate-300 p-4">
                <div className="flex justify-center items-center gap-3">
                    <div className="w-16 h-16 rounded-md"
                         style={{"backgroundImage": `url(${image})`,
                                 "backgroundSize": "cover",
                                 "backgroundPosition": "center",
                                 "backgroundRepeat": "no-repeat"}}>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">{name}</p>
                        <p className="text-gray-600">{battingType} | {bowlingType}</p>
                        <p className="font-semibold">{biddingPrice}</p>
                    </div>
                </div>
                <button onClick={handleClick} className="mr-4">
                    <img src={trash} alt="trash" />
                </button>
            </div>
        </>
    )
}

SelectedPlayer.propTypes = {
    selected: PropTypes.object,
    setSelectedPlayers: PropTypes.func,
    
}

export default SelectedPlayer