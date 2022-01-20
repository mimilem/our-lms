import Router from './Router/Router';
import './App.css';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


const App = () => <Router />

export default App;
