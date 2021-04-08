import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';


const stripePromise = loadStripe('pk_test_51Ie0h9H9F3Wyban6UH47nDSGb5KdCyDLyAgn9wyqF4cKGlGvK63ZjJ8XFg20aidO5xaTektcofhtZy87oPdXBSCM00FJ71LWRo');

const ProcessPayment = ({handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment 