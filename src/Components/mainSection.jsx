import { useState } from "react"
import Available from "./available";
import Selected from "./selected";


function MainSection(){

    const [activeBtn, setActiveBtn] = useState('availableBtn');

    const active = {
        backgroundColor: 'rgb(231, 254, 41)',
        //border: '1px solid rgba(19, 19, 19, 0.1)',
        //borderRadius: '12px 0px 0px 12px',
    }
    const inactive = {
        backgroundColor: 'white',
    }

    const handleClick = () => {
        setActiveBtn(activeBtn === 'availableBtn' ? 'selectedBtn' : 'availableBtn');
    }

    return (
        <>
            <div className="flex justify-between items-center mx-[8%] my-[3rem]">
                <h1>Players</h1>
                <div>
                    <button style={activeBtn === 'availableBtn' ? active : inactive}
                            onClick={handleClick}>Available</button>
                    <button style={activeBtn === 'availableBtn' ? inactive : active}
                            onClick={handleClick}>Selected</button>
                </div>
            </div>
            <div>
                {activeBtn === 'availableBtn' ? <Available></Available> : <Selected></Selected>}
            </div>
        </>
    )
}

export default MainSection