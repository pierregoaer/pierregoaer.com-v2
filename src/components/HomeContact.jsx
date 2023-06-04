import React, {useState} from 'react'
import * as styles from "../styles/home-contact.module.css";

export default function HomeContact() {
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
                <form name="contact"  method="POST" netlify >
                    <div className={styles.contactFormField}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            placeholder="Your full name"
                            name="name"
                        />
                    </div>
                    <div className={styles.contactFormField}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            placeholder="Your email"
                            name="email"
                        />
                    </div>
                    <div className={styles.contactFormField}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            placeholder="How can I help you?"
                            name="message"
                        />
                    </div>
                    <button type="submit" className="btn-tertiary">Send</button>
                </form>
            </div>
        </section>
    )
}