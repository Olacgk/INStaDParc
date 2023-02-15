import React, { useState } from 'react'
import Modal from 'react-modal';
import Button from '../button'
import { MdEdit } from 'react-icons/md'


export default function UserModal({className}) {
    const [isOpen, setIsOpen] = useState(false)

    const customStyles = {
        content: {
          top: '25%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    return (
        <div>
          <MdEdit className={className} onClick={()=>{setIsOpen(true)}}/>
          <Modal
            isOpen={isOpen}
            style={customStyles}
            contentLabel="Example Modal"
          >
            {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
            {/* <button onClick={}></button> */}
            <h2> Modifier les informations </h2>
            <form >
                <div className='modal_form'>
                <div className='modal_lpart'>
                    <div>
                        <label htmlFor="name">Nom</label>
                        <input/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input/>
                    </div>
                    <div>
                        <label htmlFor="text">Direction</label>
                        <input/>
                    </div>
                </div>
                <div className='modal_rpart'>
                    <div>
                        <label htmlFor="name">Prénom</label>
                        <input/>
                    </div>
                    <div>
                        <label htmlFor="email">Rôle</label>
                        <input/>
                    </div>
                    <div>
                        <label htmlFor="text">Service</label>
                        <input/>
                    </div>
                </div>
                </div>
            </form>
            <Button title={'close'} clicked={()=>{setIsOpen(false)}}/>
          </Modal>
        </div>
      );
}
