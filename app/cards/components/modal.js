import React from 'react';
import './styles/modal.sass';

const Modal = (props) => {
  return(
    // <div id="modal">
    //   { props.children }
    // </div>
    <div className="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            { props.children }
          </div>
          {
            props.action &&
            <div className="modal-footer">
              <button 
                type="button"
                className="btn btn-primary"
                onClick={props.action}
              >
                Save changes
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Modal
