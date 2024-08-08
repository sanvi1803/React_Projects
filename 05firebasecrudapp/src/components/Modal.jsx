import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'
// This modal is basically going to be a popup that  will get opened up when we selct option to add a contact
const Modal = ({ isOpen, onClose, children }) => {
    return createPortal(
        <>
            {isOpen &&
                <div
                    className='backdrop-blur-md absolute h-screen w-screen grid place-items-center top-0 z-40' >
                    <div className='relative min-h-[200px] min-w-[50%] bg-white p-2 z-50 mx-auto'>
                        <div className='flex justify-end'>
                            <AiOutlineClose onClick={onClose}
                                className='text-2xl cursor-pointer' />
                        </div>
                        {children}
                        {/* the above children is written content from app.jsx written inside Modal */}
                    </div>
                    {/* Below div is used to add backgeound blur */}
                </div>
            }
        </>
        , document.getElementById("modal-root"))
}

// To create portal means we will make this modal code render inside modal-root div present in index.html so that the properties of relative or absolute from elements inside main root does not affect its css and also this above code rnders inside modalroot inside html when clicked on plus

export default Modal
