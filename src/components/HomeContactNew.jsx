import React, {useState} from 'react'
import * as styles from "../styles/home-contact.module.css";
import {navigate} from "gatsby";

export default function HomeContactNew() {
    const initialFormData = {
        name: '',
        email: '',
        message: '',
    }

    const [formData, setFormData] = useState(initialFormData);

    const [messageSubmitted, setMessageSubmitted] = useState(false)

    function handleChange(event) {
        const target = event.target;
        const {name, value} = target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }


    function handleSubmit(event) {
        event.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            window.alert("All fields are required.")
            return
        }
        setMessageSubmitted(prev => !prev)
        const dataJSON = JSON.stringify(formData);

        fetch('http://127.0.0.1:3000/contact', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: dataJSON,
        }).then(response => {
            console.log(response)
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            if (response.status === 200) {
                setFormData(initialFormData)
                setMessageSubmitted(false)
                // navigate('/merci')
                console.log("Sent correctly!")
            } else {
                setMessageSubmitted(false)
                window.alert("Something went wrong, please try again!")

            }
        });
    }

    return (
        <section className={styles.homeContact} id="contact">
            <div className={styles.homeContactInner}>
                <div className={styles.introText}>
                    <h2>Contact</h2>
                    <p>Feel free to get in touch on <a href="https://www.linkedin.com/in/pierregoaer/"
                                                       target="_blank"
                                                       className="text-link">LinkedIn
                    </a>, <a
                        href="https://twitter.com/pierregoaer"
                        target="_blank"
                        className="text-link">Twitter
                    </a> or via email at <a href="mailto:hello@pierregoaer.com"
                                            target="_blank"
                                            className="text-link">hello@pierregoaer.com</a>.
                    </p>
                    <p>You can also fill out this form and I will get back to you shortly.</p>
                </div>
                <form name="contact">
                    <div className={styles.contactFormField}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            name="name"
                            onChange={handleChange}
                            value={formData.name}
                        />
                    </div>
                    <div className={styles.contactFormField}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            placeholder="Your email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                        />
                    </div>
                    <div className={styles.contactFormField}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            placeholder="How can I help you?"
                            name="message"
                            onChange={handleChange}
                            value={formData.message}
                        />
                    </div>
                    {!messageSubmitted &&
                        <button type="submit" className="btn-tertiary" onClick={handleSubmit}>Send</button>}
                    {messageSubmitted &&
                        <div className={styles.spinner}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    }
                </form>
            </div>
        </section>
    )
}