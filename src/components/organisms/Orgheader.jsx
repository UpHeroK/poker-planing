import React from "react";
import Ficha from '../../assets/Ficha.svg';
import AtmButton from '../atoms/AtmButton';

const OrgHeader =({description, title, player, content}) => {

    return (
       <div id="header">
            <div className="poker-header"><img className='ficha' src={Ficha} alt="Poker-header" />
                <p>{description}</p>
            </div>
            <p className="title-header">{title}</p>
            <div className="right-header">
                {player && <div className="icon-player">{player}</div>}
                
                <AtmButton content={content} />
            </div>
       </div>
    );
};

export default OrgHeader;