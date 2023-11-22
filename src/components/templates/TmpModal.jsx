import React from 'react';

const TmpModal = ({ isOpen, onClose, content: ContentComponent, componentProps }) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-body">
              {ContentComponent && <ContentComponent {...componentProps} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TmpModal;
