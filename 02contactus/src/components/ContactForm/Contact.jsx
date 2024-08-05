import React, { useState } from 'react'
import styles from "./Contact.module.css"
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
function Contact() {
    // now since we need to show the name email and text in UI therefore we need to use useState
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [text, setText] = useState("");
    // function onCallSubmit() {
    //     console.log("I am called");

    // }
    function onSubmit(e) {
        e.preventDefault();
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setText(e.target[2].value);
        // console.log(e);
        // console.log("hey");
    }
    return (

        <section className={`${styles.container}`}>
            <div className={`${styles.contact_form}`}>
                <div className={styles.top_btn}>
                    <Button
                        text="VIA SUPPORT CHAT"
                        icon={<MdMessage fontSize="24px" />} />

                    {/* <button onClick={onCallSubmit}>hi</button> */}
                    {/* In above case onCall Submit works fine buit will not directly in below case since we'll need to also send it to button component which we can do with the help of rest opeartor */}
                    {/* Now e need to add onclick function on button click therefore define function above and pass it bel */}
                    <Button
                        // onClick={onCallSubmit}
                        text="VIA CALL"
                        icon={<MdCall fontSize="24px" />} />
                </div>

                <Button
                    isOutline={true}
                    text="VIA EMAIL FORM"
                    icon={<MdEmail fontSize="24px" />} />
                {/* only by changing call we are able to change in twoplaces */}

                <form
                    onSubmit={onSubmit}
                    className={styles.form_container}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name='email' />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea type="text" rows="6" name='text' />
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "end"
                    }
                    }>
                        <Button text="SUBMIT" />

                    
                    </div>
                    <div>
                        {name + " " + email + " " + text}
                    </div>
                </form>
            </div>
            <div className={`${styles.contact_form}`}>
                <img src="./images/Service 24_7-pana 1.svg" alt="" />
            </div>
        </section>
    )
}

export default Contact
