import React from "react"
import emailjs from "emailjs-com"

export default function ContactMe() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        topic: '',
        message: '',
        checkbox: false
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({ ...formData, [name]: newValue});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm("bQv0wjDn4lzUA8GxO", "template_b1h6l9i", e.target);
            console.log("Email successfully sent");
            setFormData({
                firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            topic: '',
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
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text" 
                        className="contact--input text-md" 
                        name="first-name"
                        id="first-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type="text" 
                        className="contact--input text-md" 
                        name="last-name"
                        id="last-name"
                        value={formData.lastName}
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
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input type="number" 
                        className="contact--input text-md" 
                        name="phone-number"
                        id="phone-number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required 
                        />
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact--label">
                    <span className="text-md">Choose a topic</span>
                    <select id="choose-topic" 
                    className="contact--input text-md"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    >
                        <option>Select One...</option>
                        <option>Item 1...</option>
                        <option>Item 2...</option>
                        <option>Item 3...</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <textarea 
                        className="contact--input text-md" 
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
            </form>
        </section>
    )
}