import React from 'react';
import crossClose from '../../assets/close.svg';
import PropTypes from 'prop-types';
const TmpModal = ({ header, headerContent, isOpen, onClose, content: ContentComponent, componentProps }) => {

  const closeModal = (formData) => {
    onClose(formData);
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

TmpModal.propTypes = {
  header: PropTypes.bool,
  headerContent: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  content: PropTypes.func,
  componentProps: PropTypes.object
};

TmpModal.defaultProps = {
  header: false,
  isOpen: false,
  onClose: undefined,
  content: undefined,
  componentProps: {}
};

export default TmpModal;
