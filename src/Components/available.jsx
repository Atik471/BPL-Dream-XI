import PropTypes from "prop-types"
import Player from "./player"
import { useEffect, useState } from "react"


function Available({selectedPlayers, setSelectedPlayers}){
    const [players, setPlayers] = useState([])
    

    useEffect( () => {
        fetch('/availablePlayers.json')
        .then(res => res.json())
        .then(playerList => setPlayers([...playerList]))
    }, [])

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {players.map(player => <Player key={player.playerId} player={player} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Player>)}
            </div>
            
        </>
    )
}

Available.propTypes = {
    setSelectedPlayers: PropTypes.func,
    selectedPlayers: PropTypes.array
}


export default Available