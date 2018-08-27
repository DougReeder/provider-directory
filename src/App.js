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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            providers: [...defaultProviders]
        };
    }

    addProvider(provider) {
        // console.log("app addProvider:", provider);
        let providers = [provider, ...this.state.providers];
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
                        removeProvider: this.removeProvider.bind(this)
                    }}/>
                </main>
            </div>
        );
    }
}

export default App;
