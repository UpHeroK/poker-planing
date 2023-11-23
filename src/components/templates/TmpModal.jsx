  import React from 'react';

  const TmpModal = ({ isOpen, onClose, content: ContentComponent, componentProps }) => {

    const closeModal = () => {
      onClose();
    }


    return (
      <>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <div className="modal-body">
                {ContentComponent && <ContentComponent
                onSubmit={closeModal}  {...componentProps} />}
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  export default TmpModal;
