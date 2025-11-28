import React from 'react'
import styles from "./ContactHeader.module.css"

function ContactHeader() {
    return (
        <div className={`container ${styles.contact_section}`}>

            <h1>
                CONTACT US

            </h1>
            <p>
                Let’s connect and talk! Have a question or need help? Reach us through the form below or contact us via call, email, or social media.
               

            </p>
        </div>
    )
}

export default ContactHeader;