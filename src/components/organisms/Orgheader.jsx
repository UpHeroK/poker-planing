import React from "react";
import Ficha from '../../assets/Ficha.svg';
import AtmButton from '../atoms/AtmButton';

const OrgHeader = ({ description, title, playerName, buttonText, onButtonClick }) => {
    const playerIcon = playerName ? <div className="icon-player">{playerName}</div> : null;

    return (
        <div id="header">
            <div className="poker-header">
                <img className='ficha' src={Ficha} alt="Poker-header" />
                <p>{description}</p>
            </div>
            <h1 className="title-header">{title}</h1>
            <div className="right-header">
                {playerIcon}
                <AtmButton content={buttonText} customStyle={true} onClick={onButtonClick} />
            </div>
        </div>
    );
};

export default OrgHeader;
