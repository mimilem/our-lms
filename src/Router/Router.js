import React from 'react';

import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom';

//import the MainSite pages
import Home from '../SiteFolders/MainSite/Pages/Home';


function Router() {
    return (
        <Routers>
            <Switch>           
                <Route exact path='/' component={Home} />
            </Switch>
        </Routers>
    );
}

export default Router;