import React from 'react';
import OrgHeader from '../organisms/Orgheader';
import TmpModal from '../templates/TmpModal';
import OrgForm from '../organisms/OrgForm';



const PokerBoard = () => {
  return (
    <>
        <OrgHeader title='Sprint 21' content='Invitar jugador' player='T1'/>
        <TmpModal content={OrgForm} isOpen={true} 
        componentProps={{ label: 'Tu nombre', content: 'Continuar' , radio: true}} />
    </>
  );
};

export default PokerBoard;
