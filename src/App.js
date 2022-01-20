import Router from './Router/Router';
import './App.css';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';

const App = () => {
    
    Amplify.configure(awsconfig);
    
    return (
        <Router />
    )
}

export default App;
