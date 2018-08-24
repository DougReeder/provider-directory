import React, {Component} from 'react';
import ProviderCreate from './ProviderCreate';
import ProviderList from "./ProviderList";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Provider Directory</h1>
                    <div className="App-version">v2.0</div>
                </header>
                <main className="wrapper">
                    <ProviderCreate {...{ specialtyOptions: [
                        "Abdominal Radiology",
                        "Addiction Psychiatry",
                        "Biochemical Genetics",
                        "Blood Banking - Transfusion Medicine",
                        "Cardiothoracic Radiology",
                        "Cardiovascular Disease",
                        "Dermatology"
                    ] }}/>
                    <ProviderList/>
                </main>
            </div>
        );
    }
}

export default App;
