import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dictionary from './Dictionary';
import './ProviderCreate.css';


const displayName = {
    lastName: "Last Name",
    firstName: "First Name",
    email: "Email Address",
    specialty: "Specialty",
    practiceName: "Practice Name"
};

class ProviderCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            firstName: '',
            email: '',
            specialty: '',
            practiceName: '',

            formErrors: {}
        }
    }

    saveBackToState(evt) {
        // console.log("ProviderCreate saveBackToState state:", this.state);
        const name = evt.target.name;
        const value = evt.target.value;
        let formErrors = this.state.formErrors;
        if (formErrors[displayName[name]]) {
            this.validateField(evt.target);
        }
        this.setState({[name]: value, formErrors: formErrors});
    }

    updateFormErrors(evt) {
        // console.log("ProviderCreate updateFormErrors state:", this.state);
        this.validateField(evt.target);
        let formErrors = this.state.formErrors;
        this.setState({formErrors: formErrors});
     }

    addProvider(evt) {
        const form = evt.target.form;
        if (form.checkValidity()) {
            evt.preventDefault();
            this.props.addProvider({
                last_name: this.state.lastName.trim(),
                first_name: this.state.firstName.trim(),
                email_address: this.state.email.trim(),
                specialty: this.state.specialty.trim(),
                practice_name: this.state.practiceName.trim()
            });   // Doesn't clone state, because we don't want to pass formErrors
        } else {
            let inputs = form.querySelectorAll('input');
            inputs.forEach((input) => {
                this.validateField(input);
            });
            let formErrors = this.state.formErrors;
            this.setState({formErrors: formErrors});
            console.warn("form not valid", formErrors);
        }
    }

    validateField(input) {
        let formErrors = this.state.formErrors;
        formErrors[displayName[input.name]] = input.checkValidity() ? "" : input.validationMessage;
    }

    render() {
        return (
            <div className="ProviderCreate">
                <div>Create Provider</div>

                <Dictionary dictionary={this.state.formErrors} />

                <form>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" maxLength="35" required pattern=".*\S.*"
                       value={this.state.lastName}
                       onChange={(evt) => this.saveBackToState(evt)}
                       onBlur={(evt) => this.updateFormErrors(evt)}
                    ></input>

                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" maxLength="35" required pattern=".*\S.*"
                       value={this.state.firstName}
                       onChange={(evt) => this.saveBackToState(evt)}
                       onBlur={(evt) => this.updateFormErrors(evt)}
                ></input>

                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" maxLength="254"  required pattern=".*\S.*"
                       value={this.state.email}
                       onChange={(evt) => this.saveBackToState(evt)}
                       onBlur={(evt) => this.updateFormErrors(evt)}
                ></input>

                <label htmlFor="specialty">Specialty</label>
                <input type="text" id="specialty" name="specialty" maxLength="50" list="specialtyList"
                       value={this.state.specialty}
                       onChange={(evt) => this.saveBackToState(evt)}
                       onBlur={(evt) => this.updateFormErrors(evt)}
                ></input>
                <datalist id="specialtyList">
                    {this.props.specialtyOptions.map(function(specialty, i){
                        return <option value={specialty} key={i} />;
                    })}
                </datalist>

                <label htmlFor="practiceName">Practice Name</label>
                <input type="text" id="practiceName" name="practiceName" maxLength="50"
                       value={this.state.practiceName}
                       onChange={(evt) => this.saveBackToState(evt)}
                       onBlur={(evt) => this.updateFormErrors(evt)}
                ></input>

                <button name="addProvider" type="submit" onClick={(evt) => this.addProvider(evt)}>Submit</button>
                </form>
            </div>
        )
    }
}

ProviderCreate.propTypes = {
    specialtyOptions: PropTypes.arrayOf(String).isRequired,
    addProvider: PropTypes.func
};


export default ProviderCreate;
