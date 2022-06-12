import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
    return (
        <div className='text-center' style={{marginTop:'60px', height:'50px'}}>
              <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;