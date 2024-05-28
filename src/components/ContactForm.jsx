import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send the data to a server
    console.log(formData);
    // You can also reset the form after submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  };

  return (
    <div className='form-container'>

      <h2 className='form-title'>Quick Contact</h2>

      <form className='form' onSubmit={handleSubmit}>

        <div className='form-input'>
          <label htmlFor="name">Name<span style={{color: 'red', marginLeft: '0.2rem'}}>*</span></label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className='double-input-container'>
            <div className='form-input' id='email-input'>
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
            />
            </div>

            <div className='form-input' id="mobile-input">
                <label htmlFor="phoneNumber">Mobile</label>
                <input 
                    type="tel" 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    value={formData.phoneNumber} 
                    onChange={handleChange} 
                />
            </div>            
        </div>


        <div className='form-input' style={{height: '14rem'}}>
            <label htmlFor="message" style={{height: '3rem', overflow: 'hidden'}}>Message</label>
            <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
            />
        </div>            



        <button className="form-button" type="submit">Submit</button>

      </form>
    </div>
  );
};

export default ContactForm;