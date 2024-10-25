import Player from "./player"
import { useEffect, useState } from "react"


function Available(){
    const [players, setPlayers] = useState([])

    useEffect( () => {
        fetch('/availablePlayers.json')
        .then(res => res.json())
        .then(playerList => setPlayers([...playerList]))
    }, [])

    console.log(players)

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {players.map(player => <Player key={player.id} player={player}></Player>)}
            </div>
            
        </>
    )
}

export default Available