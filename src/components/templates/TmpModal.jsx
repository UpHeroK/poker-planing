import React from 'react';
import crossClose from '../../assets/close.svg';
const TmpModal = ({ header, headerContent, isOpen, onClose, content: ContentComponent, componentProps }) => {

  const closeModal = () => {
    onClose();
  }


  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            {header &&
              (<div className="modal-header">
                <p>{headerContent}</p>
                <img className='cross-close' src={crossClose} alt="close" onClick={closeModal} />
              </div>)
            }

            <div className="modal-content">

              <div className="modal-body">
                {ContentComponent && <ContentComponent
                  onSubmit={closeModal}  {...componentProps} />}
              </div>
            </div>
          </div>
        </div>

      )}
    </>
  );
};

export default TmpModal;
