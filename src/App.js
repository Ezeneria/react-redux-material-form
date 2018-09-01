import React, {Component} from 'react';
import './App.css';
import { Values } from 'redux-form-website-template';
import showresults from './showresults';
import MaterialUiForm from './component/Form/Form'
class App extends Component {
    render() {
        return (
            <div className="App">
                <MaterialUiForm onSubmit={showresults} />
                <Values form="MaterialUiForm" />
            </div>
        );
    }
}

export default App;
