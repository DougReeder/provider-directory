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
                    <ProviderCreate />
                    <ProviderList/>
                </main>
            </div>
        );
    }
}

export default App;
