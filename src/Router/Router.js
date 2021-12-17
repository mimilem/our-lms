/*
    Using react-router-dom@v5  
    Declare and set the exact path to every page component.
*/

import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom';

//import the HomeSite pages
import Home from '../SiteFolders/HomeSite/Pages/Home';
import ContactPage from '../SiteFolders/HomeSite/Pages/Contact';
import MediaPage from '../SiteFolders/HomeSite/Pages/Media';
import Article from '../SiteFolders/HomeSite/Pages/Media/Article';

//import the StudentPortal site pages
import Login from '../SiteFolders/StudentPortal/Authentication/Login';


function Router() {
    return (
        <Routers>
            <Switch>           
                <Route exact path='/' component={Home} />
                <Route exact path='/Contact' component={ContactPage} />
                <Route exact path='/student-login' component={Login} />
                <Route exact path='/Media' component={MediaPage} />
                <Route exact path='/Media/Article' component={Article}/>
            </Switch>
        </Routers>
    );
}

export default Router;