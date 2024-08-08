import "./App.css";
import { FiSearch } from "react-icons/fi";
import NavBar from "./components/NavBar";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
// import Modal from "./components/Modal";
import AddandUpdateContact from "./components/AddandUpdateContact";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";
function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclose();
  useEffect(() => {
    const getContacts = async () => {
      try {
        // Here we'll get data stored in collection of cloud firestore
        const contactsRef = collection(db, "contacts");
        // const contactSnapShot = await getDocs(contactsRef);
        // console.log(contactSnapShot);
        // The line of code const contactSnapShot = await getDocs(contactsRef); is using the Firebase Firestore JavaScript SDK to asynchronously retrieve all documents from a Firestore collection referenced by contactsRef.This will hold the snapshot of the documents retrieved from the Firestore collection. The snapshot contains metadata about the query as well as the actual documents.

        // getdocs: retrieves all documents from the collection or query provided as an argument. The function returns a promise that resolves to a QuerySnapshot
        // Now we need to get actual data which we'll get form contactsnapshot

        // Below statement returns data from firestore

        onSnapshot(contactsRef, (snapshot) => {
          const contactsList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          // The name contacts above should be same as contacts collection name as given in cloud firestore
          // console.log(contactsList);
          // With this above statement we can see data entered by us or stored in the firebase cloud firestore
          setContacts(contactsList)

          // the onsnapshot is basically used in order that we don't need to refresh agn to see the required change
        })

      } catch (error) {

      }
    };
    getContacts();
  }, [])

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };


  // since we'll be fetching data from server therefore we are writing useEffect and in order to execute only once write dependency as an empty array

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <NavBar />
        <div className="flex items-center gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="text-white text-3xl absolute ml-1" />
            <input
              type="text"
              onChange={filterContacts}
              className="bg-transparent border pl-9 border-white rounded-md flex-grow h-10 text-white" />
          </div>
          <AiFillPlusCircle
            onClick={onOpen}
            className="text-white text-5xl cursor-pointer" />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ?
            (
              <NotFoundContact />
            )
            :
            (
              contacts.map((contact) => (
                <ContactCard contact={contact} key={contact.id} />
              )
              )
            )
          }
        </div>
      </div>
      <AddandUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;


// Inorder to show user message that the thing is added we can show a toastify