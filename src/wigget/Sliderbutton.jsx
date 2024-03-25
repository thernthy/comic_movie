import React from 'react';
import '../css/buttons.css';

const handleDragingButn = (e) =>{
    console.log('draggin')
}

const SliderButton = () => {
    return (
        <div id="outerContainer" className=' mt-5'>
            <div className="track_drag animate">
                <div id="item" onDrag={handleDragingButn}></div>
                <p className="track_text track_text--end animate">Confirmed</p>
                <p className="track_text track_text--after animate">Confirming...</p>
                <p className="track_text track_text--before animate">Slide to Confirm</p>
            </div>
        </div>
    );
}

const Buttons = ({ buttontype }) => {
    console.log(buttontype);

    return (
        <>
            {buttontype === 'slidebutton' ? <SliderButton /> : null}
        </>
    );
}

export default Buttons;
