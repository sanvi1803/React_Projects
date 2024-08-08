import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import Modal from './Modal'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import * as Yup from "yup"
// yup is used for form validation
import { toast } from 'react-toastify'

const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddandUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {

    const AddContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);

            toast.success("Contact added successfully");
            onClose()
        } catch (error) {
            console.log(error);
        }
    }
    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);
            toast.success("Contact updated successfully");
            onClose()
        } catch (error) {
            console.log(error);
        }
    }
    // The above is a mthod to add items from modal addDoc is used to do so by taking reference from collections
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose} >
                <Formik
                    validationSchema={contactSchemaValidation}
                    initialValues={
                        isUpdate ?
                            {
                                name: contact.name,
                                email: contact.email
                            } :
                            {
                                name: "",
                                email: ""
                            }}
                    onSubmit={(values) => {
                        console.log(values);
                        isUpdate ?
                            updateContact(values, contact.id) :
                            AddContact(values)
                        // above line is written since if we write it directlyit will call both updat eand add fucntion therefore if isupdate is tue then values will be updated else added
                    }}

                >
                    <Form className='flex flex-col gap-3'>
                        <div className='flex flex-col'>
                            <label htmlFor='name'>Name</label>
                            <Field name="name" className='border h-10 p-1 border-black rounded-md' />
                            <div className='text-xs text-red-400'>
                                <ErrorMessage name='name' />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='email'>Email</label>
                            <Field name="email" type="email" className='border p-1 h-10 border-black rounded-md' />
                            <div className='text-xs text-red-400'>
                                <ErrorMessage name='email' />
                            </div>
                        </div>
                        <button className="self-end border bg-orange rounded-md px-3 py-1.5">
                            {isUpdate ? "Update" : "Add"} contact
                        </button>
                    </Form>
                </Formik>
            </Modal>
        </div >
    )
}


// To handle form data we can use formik a third party app
export default AddandUpdateContact
