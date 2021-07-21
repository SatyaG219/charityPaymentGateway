import React, { useEffect, useState } from 'react';
import './Donate.css';



const Donate = (props) => {

    const [category, setCategory] = useState('');

    const [am, setAm] = useState(1000);

     const handleCategoryChange = (category) => {
     setCategory(category);
     console.log(category);
         if(category === 'Rs.100') {
             setAm(10000);
         }
         if(category === 'Rs.250') {
            setAm(25000);
        }
        if(category === 'Rs.500') {
            setAm(50000);
        }

     }

    const options = {
        key: 'rzp_test_OIORIzOpJeXlPq',
        amount: am, 
        name: 'Donation Drive',
        description: 'Please help others cherish life',
        image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
        handler: function(response) {
            alert(response.razorpay_payment_id);
        },
        prefill: {
            name: 'Satya',
            contact: '9999999999',
            email: 'demo@demo.com'
        },
        notes: {
            address: 'some address'
        },
        theme: {
            color: 'purple',
            hide_topbar: true
        }
    };

    const openWindow = () => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className='donateC'>
            <div className='d1'>
                    <h2>Choose Amount:</h2> 
                <select name="category" id="menu" value={category} onChange={event => handleCategoryChange(event.target.value)}>
                     <option id="0" >Rs.100</option>
                     <option id="1" >Rs.250</option>
                     <option id="2" >Rs.500</option>
                 </select>
            </div>
            
            <div className='d2'>
                <button onClick={openWindow}>
                <span>{props.msg}</span>
                </button>
            </div>
            
        </div>
    );
};

export default Donate;
