import React, { useEffect } from 'react';
import './Donate.css';

const Donate = (props) => {
    const options = {
        key: 'rzp_test_OIORIzOpJeXlPq',
        amount: '100', 
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
            hide_topbar: false
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
        <>
            <button onClick={openWindow}>
                <span>{props.msg}</span>
            </button>
        </>
    );
};

export default Donate;
