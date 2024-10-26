import PropTypes from "prop-types"
import trash from "../assets/trash-bin.png"

function SelectedPlayer({selected, setSelectedPlayers}){

    const {playerId, name, image, battingType, bowlingType} = selected

    // useEffect(() => {
    //     localStorage.setItem('selectedPlayers', JSON.stringify(selectedPlayers));
    // }, [selectedPlayers])
    // useEffect(() => {
    //     const activeBtn = JSON.parse(localStorage.getItem('selectedPlayers'))
    //     setChosen(activeBtn.some(p => p.playerId === playerId))
    // }, [])

    
    const handleClick = () => {
        let newSelected = JSON.parse(localStorage.getItem('selectedPlayers'))
        // let exists = newSelected.some(p => p.playerId === playerId)
        // if(!exists){
        //     setSelectedPlayers([...selectedPlayers, player])
        //     setChosen(!chosen)
        // }
        // else{
        console.log(newSelected)
            setSelectedPlayers(newSelected.filter(p => p.playerId !== playerId))
        //     setChosen(!chosen)
        // }
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