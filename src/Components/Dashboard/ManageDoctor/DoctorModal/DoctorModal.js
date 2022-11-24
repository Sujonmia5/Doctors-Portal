import React from 'react';

const DoctorModal = ({ title, message, setModal, modal, doctorDeletedHandler }) => {

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-middle sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">{title}</h3>
                    <p className="py-4 text-center">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => doctorDeletedHandler(modal)} htmlFor="my-modal-6" className="btn btn-success">Confirm</label>
                        <button onClick={() => setModal(null)} className='btn'>Cancel</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DoctorModal;