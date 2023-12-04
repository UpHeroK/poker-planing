import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import OrgForm from '../organisms/OrgForm';
import AtmLogo from '../atoms/AtmLogo';
import OrgHeader from '../organisms/OrgHeader';

function NewGamePage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    
    const handleSubmit = (formData) => {
        console.log(formData);
        localStorage.setItem('gameName', formData.name);
        navigate("/game");
    };

    return (
        <div>
            {isLoading ? (
                <AtmLogo />
            ) : (
                <>
                    <OrgHeader description='Crear partida' />
                    <OrgForm onSubmit={handleSubmit} label={'Nombre de la partida'} content={'Crear partida' }
                     />
                </>
            )}
        </div>
    );
}

export default NewGamePage;
