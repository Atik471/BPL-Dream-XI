import PropTypes from "prop-types"

function Player({player}){
    const {name, country, image, role, battingType, bowlingType, biddingPrice } = player

    return (
        <>
            <div className="border-solid border-2 border-slate-200 rounded-2xl">
                <div className="h-44 overflow-hidden flex justify-center"><img src={image} alt="img" className="h-full rounded-xl"/></div>
                <p>{name}</p>
                <p>{country}</p>
                <p>{role}</p>
                <p>{battingType}</p>
                <p>{bowlingType}</p>
                <p>{biddingPrice}</p>
            </div>
        </>
    )
}

Player.propTypes = {
    key: PropTypes.int,
    player: PropTypes.object
}

export default Player