import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dictionary from './Dictionary';
import './ProviderCreate.css';

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
        if (formErrors[name]) {
            formErrors[name] = evt.target.checkValidity() ? "" : evt.target.validationMessage;
        }
        this.setState({[name]: value, formErrors: formErrors});
    }

    updateFormErrors(evt) {
        // console.log("ProviderCreate updateFormErrors state:", this.state);
        const name = evt.target.name;
        let formErrors = this.state.formErrors;
        formErrors[name] = evt.target.checkValidity() ? "" : evt.target.validationMessage;
        this.setState({formErrors: formErrors});
     }

    render() {
        return (
            <div className="ProviderCreate">
                <div>Create Provider</div>

                <Dictionary dictionary={this.state.formErrors} />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" maxLength="35" required
                       value={this.state.lastName}
                       onChange={(evt) => this.saveBackToState(evt)}
                       onBlur={(evt) => this.updateFormErrors(evt)}
                    ></input>

                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" maxLength="35" required
                       value={this.state.firstName}
                       onChange={(evt) => this.saveBackToState(evt)}
                       onBlur={(evt) => this.updateFormErrors(evt)}
                ></input>

                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" maxLength="254" required
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
                    <option value="Abdominal Radiology" />
                    <option value="Addiction Psychiatry" />
                    <option value="Biochemical Genetics" />
                    <option value="Blood Banking - Transfusion Medicine" />
                    <option value="Cardiothoracic Radiology" />
                    <option value="Cardiovascular Disease" />
                </datalist>

                <label htmlFor="practiceName">Practice Name</label>
                <input type="text" id="practiceName" name="practiceName" maxLength="50"
                       value={this.state.practiceName}
                       onChange={(evt) => this.saveBackToState(evt)}
                       onBlur={(evt) => this.updateFormErrors(evt)}
                ></input>

                <button name="addProvider" type="submit">Submit</button>

            </div>
        )
    }
}

export default ProviderCreate;
