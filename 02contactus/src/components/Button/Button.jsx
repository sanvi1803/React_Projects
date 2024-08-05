import styles from "./Button.module.css"
import { MdMessage } from "react-icons/md";

// instead of writingprops multiple times we can use destructuring i.e in line 8
// now since we need to use this button with different values at multiple places therefore we willus eprops in  contact.jsx such as text and icon
function Button({ isOutline, icon, text ,...rest}) {

    // const { isOutline, icon, text } = props;
    // instead directly write props
    return (
        <button 
        {...rest}
        // The rest needs to be given to the main funciton as props and it also needs to be given to element who'll be using this in this case onclick function wil come under rest
        className={isOutline ? styles.outline_btn : styles.primary_btn}>
            {icon}
            {/* {props.icon} without destructuring we need to write like this */}
            {text}
        </button>
    )
}

export default Button
