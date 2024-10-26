import PropTypes from "prop-types"
import SelectedPlayer from "./selectedPlayer"
function Selected({selectedPlayers, setSelectedPlayers}){
    

    return (
        <>
            {
                selectedPlayers.map(selected => <SelectedPlayer key={selected.id} selected={selected} setSelectedPlayers={setSelectedPlayers}></SelectedPlayer>)
            }
        </>
    )
}

Selected.propTypes = {
    selectedPlayers: PropTypes.array,
    setSelectedPlayers: PropTypes.func,
}

export default Selected