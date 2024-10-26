import PropTypes from "prop-types"
import SelectedPlayer from "./selectedPlayer"
function Selected({selectedPlayers, setSelectedPlayers, addMore}){
    

    return (
        <>
            {
                selectedPlayers.map(selected => <SelectedPlayer key={selected.id} selected={selected} setSelectedPlayers={setSelectedPlayers}></SelectedPlayer>)
            }
            
            <div className='border-solid border-2 border-black rounded-xl inline-block'>
                <button className='bg-custom-golden py-3 px-5 m-2 font-semibold rounded-lg'
                        onClick={addMore}>Add More Players</button>
            </div>
        </>
    )
}

Selected.propTypes = {
    selectedPlayers: PropTypes.array,
    setSelectedPlayers: PropTypes.func,
    addMore: PropTypes.func,
}

export default Selected