import { useEffect, useState } from "react"
import Available from "./available";
import Selected from "./selected";


function MainSection(){

    const [activeBtn, setActiveBtn] = useState('availableBtn');
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    useEffect(() => {
        localStorage.setItem('selectedPlayers', JSON.stringify(selectedPlayers));
    }, [selectedPlayers])
    

    const active = {
        backgroundColor: 'rgb(231, 254, 41)',
        borderColor: 'rgb(231, 254, 41)',
    }
    const inactive = {
        backgroundColor: 'white',
        borderColor: '#cbd5e1',
    }

    const handleClick1 = () => {
        setActiveBtn('availableBtn');
    }
    const handleClick2 = () => {
        setActiveBtn('selectedBtn');
    }
    const handleClickAddMore = () => {
        setActiveBtn('availableBtn')
    }

    return (
        <>
            <section className="mx-[8%] my-[3rem] font-sora">
                <div className="flex md:flex-row flex-col gap-4 md:justify-between justify-start items-center my-[3rem]">
                    <h1 className="md:text-2xl text-xl font-bold">{activeBtn === 'availableBtn' ? 'Available Players' : `Selected Players(${selectedPlayers.length}/6)`}</h1>
                        
                    <div>
                        <button className="border-solid border-2 border-r-0 rounded-l-lg md:py-3 py-1 md:px-6 px-3 font-semibold"
                                style={activeBtn === 'availableBtn' ? active : inactive}
                                onClick={handleClick1}>Available</button>
                        <button className="border-solid border-2 border-l-0 rounded-r-lg md:py-3 py-1 md:px-6 px-3 font-semibold"
                                style={activeBtn === 'availableBtn' ? inactive : active}
                                onClick={handleClick2}>Selected({selectedPlayers.length}/6)</button>
                    </div>
                </div>
                <div>
                    {activeBtn === 'availableBtn' ? <Available selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Available> : <Selected selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} addMore={handleClickAddMore}></Selected>}
                </div>
            </section>
            
        </>
    )
}

export default MainSection