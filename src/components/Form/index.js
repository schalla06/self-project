import React from 'react';
import white_arrow from '../../assets/images/white_arrow.svg';
import { initialState } from './initialState';
import './index.scss';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: {
                ...this.state[name],
                value: value
            }
        });
    };

    handleBlur = event => {
        const { name, value } = event.target;
        const message = this.state[name].validators;
        this.setState({
            [name]: {
                ...this.state[name],
                value: value,
                error: !!message(value),
                errorMessage: message(value),
                disableButton: !!message(value)
            }
        });
        if(message(value)) {
            event.target.setAttribute('class', 'error');
        } else {
            event.target.removeAttribute('class');
        }
     }

     handleSubmit = event => {
        event.preventDefault();
        const {firstName} = this.state;
        console.log(firstName.value);
     }

    render() {
        const{ firstName, lastName, address1, address2 } = this.state;
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="firstName">
                            <span>FIRST NAME</span>
                        </label>
                        {firstName.error && (<span className="error">{firstName.errorMessage}</span>)}
                        <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={firstName.value}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        ></input>
                    </p>
                    <p>
                        <label htmlFor="lastName">
                            <span>LAST NAME</span>
                        </label>
                        {lastName.error && (<span className="error">{lastName.errorMessage}</span>)}
                        <input 
                        type="text" 
                        name="lastName" 
                        id="lastName"
                        value={lastName.value}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        ></input>
                    </p>
                    <p>
                        <label htmlFor="address1">
                            <span>ADDRESS</span>
                        </label>
                        {address1.error && (<span className="error">{address1.errorMessage}</span>)}
                        <input 
                        type="text" 
                        name="address1" 
                        id="address1"
                        value={address1.value}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        ></input>
                    </p>
                    <p>
                        <label htmlFor="address2">
                            <span>ADDRESS 2(OPTIONAL):</span>
                        </label>
                        <input 
                        type="text" 
                        name="address2" 
                        id="address2"
                        value={address2.value}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        ></input>
                    </p>
                    <p>
                        <button
                        type="submit"
                        disabled={
                            firstName.disableButton ||
                            lastName.disableButton ||
                            address1.disableButton
                        }
                        >Next
                            <img src={white_arrow} alt="right arrow"></img>
                        </button>
                    </p>
                </form>
            </div>
        )
    }
}

export default Form;