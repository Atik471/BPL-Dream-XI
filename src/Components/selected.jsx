import PropTypes from "prop-types"

function Selected({selectedPlayers}){
    console.log(selectedPlayers)

    return (
        <>
            <h1>Selected</h1>
        </>
    )
}

Selected.propTypes = {
    selectedPlayers: PropTypes.array
}

export default Selected