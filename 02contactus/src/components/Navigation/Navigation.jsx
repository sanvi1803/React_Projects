import React from 'react'
import styles from "./Navigation.module.css"
function Navigation() {
  console.log(styles);
  return (
    <div >
      {/* Here we are using module css instead of global css and since container is inside index.css therefore therer is no need to import it and we can write t directly */}
      
      
      <nav className={`${styles.navigation} container`}>
        <img src="./images/Frame 2 1.png" alt="" />
        <ul className={styles.list}>
            <li>Home</li>
            <li>About</li>
            <li>Contact-Us</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
