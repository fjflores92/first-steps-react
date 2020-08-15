import React from 'react';
import { render } from 'react-dom';

class Button extends React.Component {
    
    state = {
        count: 0,
    }

    clickHandler = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        const { count } = this.state;
        return(
            <div>
                <h1>Cervezas: {count}</h1>
                <button type="button" onClick={this.clickHandler}>
                    Más Cerveza
                </button>
            </div>
        )
    };
};

export default Button;