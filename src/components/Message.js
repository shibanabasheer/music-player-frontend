import React from 'react';
import './Message.css'

const Message = ({ variant, children }) => {
  return (
    <div className={`alert alert-${variant}`}>
      {children}
    </div>
  );
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;

