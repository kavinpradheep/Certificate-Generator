import React from 'react';
import axios from 'axios';
import InputCss from '../styles/Input.module.css';
import { useNavigate } from 'react-router-dom';

const Input = () => {
    const navigate = useNavigate();

    const storeData = async (e) => {
        e.preventDefault();
        
        const data = {
            name: document.getElementById('name').value,
            dept: document.getElementById('dept').value,
            college: document.getElementById('college').value,
            event: document.getElementById('event').value,
            organizer: document.getElementById('organizer').value
        };

        try {
            await axios.post('http://localhost:5000/api/certificates', data);
            console.log('Certificate data saved:', data);
            navigate('/download', { state: data });
        } catch (error) {
            console.error('Error saving certificate data:', error);
        }
    };

    return (
        <section>
            <form className={InputCss.formDiv} onSubmit={storeData}>
                <h2 className={InputCss.heading}>Enter your details</h2>
                <div className={InputCss.inputDiv}>
                    <div className={InputCss.contentDiv}>
                        <h3 className={InputCss.tag}>Name</h3>
                        <input className={InputCss.tagInput} id='name' placeholder="Enter your name" />
                    </div>
                    <div className={InputCss.contentDiv}>
                        <h3 className={InputCss.tag}>Event</h3>
                        <input className={InputCss.tagInput} id='event' placeholder="Enter the event name" />
                    </div>
                    <div className={InputCss.contentDiv}>
                        <h3 className={InputCss.tag}>Branch</h3>
                        <input className={InputCss.tagInput} id='dept' placeholder="Enter your branch" />
                    </div>
                    <div className={InputCss.contentDiv}>
                        <h3 className={InputCss.tag}>College</h3>
                        <input className={InputCss.tagInput} id='college' placeholder="Enter your college" />
                    </div>
                    <div className={InputCss.contentDiv}>
                        <h3 className={InputCss.tag}>Organizer</h3>
                        <input className={InputCss.tagInput} id='organizer' placeholder="Enter Organizer name" />
                    </div>
                </div>
                <button className={InputCss.butn} type='submit' id='generate-btn'>Generate</button>
                <h4 className={InputCss.subtitle}>Click here to generate your certificate</h4>
            </form>
        </section>
    );
};

export default Input;
