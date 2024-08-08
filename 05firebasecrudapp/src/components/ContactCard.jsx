import { deleteDoc, doc } from 'firebase/firestore';
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from '../config/firebase';
import useDisclose from '../hooks/useDisclose';
import AddandUpdateContact from './AddandUpdateContact';
import { toast } from 'react-toastify';

const ContactCard = ({ contact }) => {
    const { isOpen, onOpen, onClose } = useDisclose();

    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contacts", id));
            toast.success("Contact deleted successfully!")
        } catch (error) {
            console.log("Error deleting contact: ", error);
        }
    }

    return (
        <>
            <div
                key={contact.id}
                className="bg-yellow flex justify-between rounded-lg p-2 items-center"
            >
                <div className="flex items-center gap-2">
                    <HiOutlineUserCircle className="text-orange text-4xl" />
                    <div>
                        <h2 className="font-medium">{contact.name}</h2>
                        <p className="text-sm">{contact.email}</p>
                    </div>
                </div>
                <div className="flex text-3xl gap-2">
                    <RiEditCircleLine
                        onClick={onOpen}
                        className='cursor-pointer'
                    />
                    <IoMdTrash
                        onClick={() => deleteContact(contact.id)}
                        className="text-orange cursor-pointer"
                    />
                </div>
            </div>
            <AddandUpdateContact
                contact={contact}
                isUpdate
                isOpen={isOpen}
                onClose={onClose} />
        </>
    );
}

export default ContactCard;
