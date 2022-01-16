import React from 'react'
import { Alert } from 'react-bootstrap';

const Message = ({ variant = 'warning', children }) => {
    return (
        <Alert vairant={variant} children={children}>
        </Alert>
    );
};

export default Message;
