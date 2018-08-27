import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProviderList.css';

class ProviderList extends Component {
    removeProvider() {
        const listDiv = document.querySelector('.ProviderList');
        const checkboxes = listDiv.querySelectorAll('input[type=checkbox]');
        // If we had unique IDs for providers, we would return those instead of indexes
        let selectedCheckboxes = [];
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                selectedCheckboxes.push(checkbox.dataset.idx);
                checkbox.checked = false;
                // if we add other functions on selected providers, we'll need to revisit this
            }
        });
        this.props.removeProvider(selectedCheckboxes);
    }

    render() {
        return (
            <div className="ProviderList">
                <div className="flex-row">
                    <div>Provider List</div>
                    <div className="text-align-right">
                        <label htmlFor="sort-select">Sort by &nbsp;</label>
                        <select id="sort-select"
                                onChange={evt => this.props.changeSort(evt.target.value)}
                                defaultValue="lastNameAsc">
                            <option value="lastNameAsc">Last Name - ascending</option>
                            <option value="lastNameDec">Last Name - descending</option>
                            <option value="firstNameAsc">First Name - ascending</option>
                            <option value="firstNameDec">First Name - descending</option>
                            <option value="emailAsc">Email Address - ascending</option>
                            <option value="emailDec">Email Address - descending</option>
                            <option value="specialtyAsc">Specialty - ascending</option>
                            <option value="specialtyDec">Specialty - descending</option>
                            <option value="practiceNameAsc">Practice Name - ascending</option>
                            <option value="practiceNameDec">Practice Name - descending</option>
                        </select>
                    </div>
                </div>
                <div>
                    {this.props.providers.map((provider, i) => {
                        return (
                            <div className="provider" key={i}>
                                <div className="flex-row">
                                    <div className="delete-box">
                                        <input type="checkbox" data-idx={i} />
                                    </div>
                                    <div>
                                        <div className="flex-row">
                                            <div className="provider-name">{provider.last_name}, {provider.first_name}</div>
                                            <div className="text-align-right">{provider.specialty}</div>
                                        </div>
                                        <div className="flex-row secondary-info">
                                            <div>{provider.email_address}</div>
                                            <div className="text-align-right">{provider.practice_name}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <button name="Remove" onClick={(evt) => this.removeProvider(evt)}>Remove Selected</button>
                </div>
            </div>
        )
    }
}

ProviderList.propTypes = {
    providers: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeSort: PropTypes.func.isRequired,
    removeProvider: PropTypes.func.isRequired,
};

export default ProviderList;
