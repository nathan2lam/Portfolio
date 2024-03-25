import React, { useState } from "react"
import emailjs from "emailjs-com"

export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        checkbox: false
    });

    const [emailSent, setEmailSent] = useState(false);

    const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message
    };

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm("service_2rk6bot", "template_b1h6l9i", e.target, "bQv0wjDn4lzUA8GxO", templateParams);
            console.log("Email successfully sent");
            setEmailSent(true);
            setFormData({
                name: '',
                email: '',
                message: '',
                checkbox: false
            })
        } catch (error) {
            console.error("Email failed to send", error)
        }
    }

    return (
        <section id="Contact" className="contact-section">
            <div>
                <h2>Contact Me</h2>
                <p className="text-lg">
                    I would love to get in touch, reach out and get to know me!
                </p>
            </div>
            <form className="contact--form--container" onSubmit={handleSubmit}>
                <div className="container">
                    <label htmlFor="name" className="contact--label">
                        <span className="text-md">Name</span>
                        <input type="text" 
                        className="contact--input text-md" 
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="email" 
                        className="contact--input text-md" 
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        />
                    </label>
                </div>
                <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <textarea 
                        className="contact--input text-md" 
                        name="message"
                        id="message"
                        rows="8"
                        placeholder="Type your message..."
                        value={formData.message}
                        onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="checkbox" className="checkbox--label">
                        <input type="checkbox" 
                        required
                        name="checkbox"
                        id="checkbox" 
                        checked={formData.checkbox}
                        onChange={handleChange}
                        />
                        <span className="text-sm">I accept the terms</span>
                    </label>
                    <div>
                        <button type="submit" className="btn btn-primary contact--form--btn">
                            Submit
                        </button>
                    </div>
                    {emailSent && <p className="text-md contact--form--result">Email successfully sent!</p>}
            </form>
        </section>
    )
}