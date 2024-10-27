import React from 'react'
import './Contact.css'
import msg_icon from '../img/msg-icon.png'
import mail_icon from '../img/mail-icon.png'
import phone_icon from '../img/phone-icon.png'
import location_icon from '../img/location-icon.png'
import white_arrow from '../img/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fbd51208-71e3-41fb-b707-4ffd98caa496");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptas, ab alias, quasi dolor, doloribus sint cum explicabo unde eveniet assumenda iure non porro repellendus ut recusandae voluptatibus ad minus pariatur eos?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, beatae!</p>
            <ul>
                <li><img src={mail_icon} alt="email" />Contact@Edusity.dev</li>
                <li><img src={phone_icon} alt="phone" />+1 123-456-7890</li>
                <li><img src={location_icon} alt="location" />77, Massachusetts Ave, Cambridge <br /> MA 02139, United States Of America</li>
            </ul>
        </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label >Your Name </label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label > Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
            <label >Write your Message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='Submit' className='btn dark-btn'>Submit Now <img src={white_arrow } alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
