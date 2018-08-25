import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProviderList.css';

class ProviderList extends Component {
    render() {
        return (
            <div className="ProviderList">
                <div>Provider List</div>
                <div>
                    {this.props.providers.map((provider, i) => {
                        return (
                            <div className="provider" key={i}>
                                <div className="flex-row">
                                    <div className="provider-name">{provider.last_name}, {provider.first_name}</div>
                                    <div>{provider.specialty}</div>
                                </div>
                                <div className="flex-row secondary-info">
                                    <div>{provider.email_address}</div>
                                    <div>{provider.practice_name}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

ProviderList.propTypes = {
    providers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProviderList;
