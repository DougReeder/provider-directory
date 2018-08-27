import React, {Component} from 'react';
import ProviderCreate from './ProviderCreate';
import ProviderList from "./ProviderList";
import './App.css';

const defaultProviders = [
    {
        "last_name": "Harris",
        "first_name": "Mike",
        "email_address": "mharris@updox.com",
        "specialty": "Pediatrics",
        "practice_name": "Harris Pediatrics"
    },
    {
        "last_name": "Wijoyo",
        "first_name": "Bimo",
        "email_address": "bwijoyo@updox.com",
        "specialty": "Podiatry",
        "practice_name": "Wijoyo Podiatry"
    },
    {
        "last_name": "Rose",
        "first_name": "Nate",
        "email_address": "nrose@updox.com",
        "specialty": "Surgery",
        "practice_name": "Rose Cutters"
    },
    {
        "last_name": "Carlson",
        "first_name": "Mike",
        "email_address": "mcarlson@updox.com",
        "specialty": "Orthopedics",
        "practice_name": "Carlson Orthopedics"
    },
    {
        "last_name": "Witting",
        "first_name": "Mike",
        "email_address": "mwitting@updox.com",
        "specialty": "Pediatrics",
        "practice_name": "Witting’s Well Kids Pediatrics"
    },
    {
        "last_name": "Juday",
        "first_name": "Tobin",
        "email_address": "tjuday@updox.com",
        "specialty": "General Medicine",
        "practice_name": "Juday Family Practice"
    }
];


const compare = {
    lastNameAsc: (a, b) => {
        const aValue = a.last_name.toUpperCase();
        const bValue = b.last_name.toUpperCase();
        return aValue.localeCompare(bValue)
    },
    lastNameDec: (a, b) => {
        const aValue = a.last_name.toUpperCase();
        const bValue = b.last_name.toUpperCase();
        return bValue.localeCompare(aValue)
    },
    firstNameAsc: (a, b) => {
        const aValue = a.first_name.toUpperCase();
        const bValue = b.first_name.toUpperCase();
        return aValue.localeCompare(bValue)
    },
    firstNameDec: (a, b) => {
        const aValue = a.first_name.toUpperCase();
        const bValue = b.first_name.toUpperCase();
        return bValue.localeCompare(aValue)
    },
    emailAsc: (a, b) => {
        const aValue = a.email_address.toUpperCase();
        const bValue = b.email_address.toUpperCase();
        return aValue.localeCompare(bValue)
    },
    emailDec: (a, b) => {
        const aValue = a.email_address.toUpperCase();
        const bValue = b.email_address.toUpperCase();
        return bValue.localeCompare(aValue)
    },
    specialtyAsc: (a, b) => {
        const aValue = a.specialty.toUpperCase();
        const bValue = b.specialty.toUpperCase();
        return aValue.localeCompare(bValue)
    },
    specialtyDec: (a, b) => {
        const aValue = a.specialty.toUpperCase();
        const bValue = b.specialty.toUpperCase();
        return bValue.localeCompare(aValue)
    },
    practiceNameAsc: (a, b) => {
        const aValue = a.practice_name.toUpperCase();
        const bValue = b.practice_name.toUpperCase();
        return aValue.localeCompare(bValue)
    },
    practiceNameDec: (a, b) => {
        const aValue = a.practice_name.toUpperCase();
        const bValue = b.practice_name.toUpperCase();
        return bValue.localeCompare(aValue)
    },
};


class App extends Component {
    constructor(props) {
        super(props);
        // fragile dependence between this and the default sort option in ProviderList
        defaultProviders.sort(compare['lastNameAsc']);
        this.state = {
            providers: [...defaultProviders]
        };
    }

    addProvider(provider) {
        // console.log("app addProvider:", provider);
        let providers = [provider, ...this.state.providers];
        this.setState({providers: providers});
    }

    changeSort(sortType) {
        let providers = this.state.providers;
        providers.sort(compare[sortType]);
        this.setState({providers: providers});
    }

    /** selectedProviders: array of indexes, in order from low to high */
    removeProvider(selectedProviders) {
        // console.log("app removeProvider", selectedProviders);
        const providers = this.state.providers;
        for (let i=selectedProviders.length-1; i>=0; --i) {
            providers.splice(selectedProviders[i], 1);
        }
        this.setState({providers: providers});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Provider Directory</h1>
                    <div className="App-version">v2.0</div>
                </header>
                <main className="wrapper">
                    <ProviderCreate {...{
                        specialtyOptions: [
                            "Abdominal Radiology",
                            "Addiction Psychiatry",
                            "Biochemical Genetics",
                            "Blood Banking - Transfusion Medicine",
                            "Cardiothoracic Radiology",
                            "Cardiovascular Disease",
                            "Dermatology"
                        ],
                        addProvider: this.addProvider.bind(this)
                    }}/>
                    <ProviderList {... {
                        providers: this.state.providers,
                        changeSort: this.changeSort.bind(this),
                        removeProvider: this.removeProvider.bind(this)
                    }}/>
                </main>
            </div>
        );
    }
}

export default App;
