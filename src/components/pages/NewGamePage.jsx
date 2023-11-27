import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AtmLogo from '../atoms/AtmLogo';
import OrgForm from '../organisms/OrgForm';
import OrgHeader from '../organisms/Orgheader';

function NewGame() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = () => {
        const newGame = event.target[0].value
        localStorage.setItem('game', newGame);
         navigate("/game");
    }
    

    return (
        <div>
            {isLoading ? (
                <>
                    <AtmLogo />
                </>
            ) : (
               <>
               <OrgHeader description='Crear partida' />
                <OrgForm label='Nombra la partida'
                content='Crear partida'
                radio={false}
                onSubmit={handleSubmit}/>
               </>
            )}
        </div>
    );
}

export default NewGame;
