import React from 'react';

const Button = props => {
    const { text } = props;
    return(
        <div>
            <button type="button">{props.text}</button>
            <p>{text}</p>
        </div>
    );
};

export default Button;