import React from 'react';
import {  useParams } from 'react-router-dom';

const ServiceDetails = () => {
    let { bookId } = useParams();
    console.log(bookId);
    return (
        <div>
            <h2>Service Details </h2>
        </div>
    );
};

export default ServiceDetails;