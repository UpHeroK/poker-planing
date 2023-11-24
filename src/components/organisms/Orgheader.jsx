import React from "react";
import { useState } from "react";
import Ficha from '../../assets/Ficha.svg';
import AtmButton from '../atoms/AtmButton';
import TmpModal from "../templates/TmpModal";
import OrgFormCopy from "./OrgFormCopy";

const OrgHeader = ({ description, title, player, content , openModal }) => {

    return (
        <div id="header">
            <div className="poker-header">
                <img className='ficha' src={Ficha} alt="Poker-header" />
                <p>{description}</p>
            </div>
            <p className="title-header">{title}</p>
            <div className="right-header">
                {player && <div className="icon-player">{player}</div>}

                <AtmButton content={content} customStyle={true} onClick={openModal} />
            </div>
            
        </div>
    );
};

export default OrgHeader;