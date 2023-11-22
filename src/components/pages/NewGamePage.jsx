import React, { useState, useEffect } from 'react';
import AtmLogo from '../atoms/AtmLogo';
import OrgForm from '../organisms/OrgForm';
import OrgHeader from '../organisms/Orgheader';

function NewGame() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

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
                radio={false}/>
               </>
            )}
        </div>
    );
}

export default NewGame;
