import React from 'react';
import { useState } from 'react';
import OrgHeader from '../organisms/Orgheader';
import TmpModal from '../templates/TmpModal';
import OrgForm from '../organisms/OrgForm';
import OrgDeck from '../organisms/OrgDeck';
import OrgFormCopy from '../organisms/OrgFormCopy';



const PokerBoard = () => {

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isModalCopyOpen, setisModalCopyOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const HandleModalCopy = () => {
    setisModalCopyOpen(true);
  };

  const closeCopyModal = () => {
    setisModalCopyOpen(false);
  }




  return (
    <>
      <OrgHeader title='Sprint 21' content='Invitar jugadores' player='T1' openModal={HandleModalCopy}/>
      <TmpModal content={OrgForm} isOpen={isModalOpen} onClose={closeModal}
        componentProps={{ label: 'Tu nombre', content: 'Continuar', radio: true }} />
      <TmpModal isOpen={isModalCopyOpen} header={true} onClose={closeCopyModal} headerContent={'invitar jugadores'}
                content={OrgFormCopy} componentProps={{content: 'Copiar link'}} />

      <div className="poker-table">
        <div className="cell"></div>
        <div className="cell spot">
          <div className='card'>
            <div className='player'></div>
            <p>play1</p>
          </div>
          <div className='card'>
            <div className='player'></div>
            <p>play2</p>
          </div>
          <div className='card'>
            <div className='player'></div>
            <p>play3</p>
          </div>
        </div>
        <div className="cell "></div>
        <div className="cell spot">
          <div className='card'>
            <div className='player'></div>
            <p>play4</p>
          </div>
        </div>
        <div className="cell center ">
          <div className="board"></div>
          <div className="middle"></div>
          <div className="outline"></div>
        </div>
        <div className="cell spot">
          <div className='card'>
            <div className='player'></div>
            <p>play5</p>
          </div>
        </div>
        <div className="cell "></div>
        <div className="cell spot bottom">
          <div className='card'>
            <div className='player'></div>
            <p>play6</p>
          </div>
          <div className='card'>
            <div className='player'></div>
            <p>play7</p>
          </div>
          <div className='card'>
            <div className='player'></div>
            <p>play8</p>
          </div>
        </div>
        <div className="cell "></div>
      </div>

      <OrgDeck />



    </>
  );
};

export default PokerBoard;
