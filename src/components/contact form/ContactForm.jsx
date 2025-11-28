import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Buttons/Button";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";


function ContactForm() {

 


 
  return (
    <section className={styles.container}>
      <div className={styles.contact_Form}>
        <div className={styles.top_btns}>
          <Button text="Via SUPPORT CHAT" icon={<MdOutlineMessage fontSize="25px" />}></Button>
          <Button text="Via Call" icon={<FaPhone fontSize="20px" />}></Button>

        </div>
        <Button isoutline={true} text="Via Email Form" icon={<IoMail fontSize="20px" />}></Button>


        <form action="" >
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />

          </div>

            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />

          </div>

            <div className={styles.form_control}>
            <label htmlFor="name">Text</label>
            <textarea name="name" rows="8" />

          </div>

          <div style={{display:"flex",justifyContent:"end"}}>
         <Button text="Submit "></Button>
          </div>


        </form>
      </div>




      <div className={styles.contact_Img}>
        <img src="/images/contact.svg" alt="contact image " />
      </div>
    </section>
  );
}

export default ContactForm;
