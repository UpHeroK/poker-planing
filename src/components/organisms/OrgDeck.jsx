
import React from "react";

const OrgDeck = () => {
 
    return (
     <>
     <div className="deck-container">
        <p>Elije una carta 👇</p>
        <div className="deck-of-cards">
            <div className="player">0</div>
            <div className="player">1</div>
            <div className="player">3</div>
            <div className="player">5</div>
            <div className="player">8</div>
            <div className="player">13</div>
            <div className="player">21</div>
            <div className="player">34</div>
            <div className="player">55</div>
            <div className="player">89</div>
            <div className="player">?</div>
            <div className="player">☕</div>
        </div>
     </div>
     </>
    );
};

export default OrgDeck;