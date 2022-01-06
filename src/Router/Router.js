/*
    Using react-router-dom@v5  
    Declare and set the exact path to every page component.
*/

import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom';

//import the HomeSite pages
import Article from '../SiteFolders/HomeSite/Pages/Media/Article';
import ContactPage from '../SiteFolders/HomeSite/Pages/Contact';
import Home from '../SiteFolders/HomeSite/Pages/Home';
import MediaPage from '../SiteFolders/HomeSite/Pages/Media';

//import the StudentPortal site pages
import Login from '../SiteFolders/StudentPortal/Authentication/Login';

//import the StaffPortal site pages
import CalendarPage from '../SiteFolders/StaffPortal/Pages/CalendarPage';
import ClassesPage from '../SiteFolders/StaffPortal/Pages/Classes';
import DepartmentsPage from '../SiteFolders/StaffPortal/Pages/Departments';
import Events from '../SiteFolders/StaffPortal/Pages/Events';
import ExamsPage from '../SiteFolders/StaffPortal/Pages/Exams';
import ModulePage from '../SiteFolders/StaffPortal/Pages/Module';
import StaffDashboard from '../SiteFolders/StaffPortal/Pages/Dashboard';
import StaffIndexView from '../SiteFolders/StaffPortal/StaffIndexView';
import StudentsPage from '../SiteFolders/StaffPortal/Pages/Students';
import StudentsProfile from '../SiteFolders/StaffPortal/Pages/StudentsProfile';
import SubjectSelection from '../SiteFolders/StaffPortal/Pages/SubjectSelection';
import TimeTablePage from '../SiteFolders/StaffPortal/Pages/TimeTablePage';
import Reports from '../SiteFolders/StaffPortal/Pages/Reports';
import ClassPage from '../SiteFolders/StaffPortal/Pages/Class';
import StudentsDashboard from '../SiteFolders/StudentPortal/Pages/Dashboard';
import StudentsModules from '../SiteFolders/StudentPortal/Pages/Modules';
import StudentsModule from '../SiteFolders/StudentPortal/Pages/Modules/Module';


function Router() {
    
    const studentName = 'Nephthali-Salam'

    return (
        <Routers>
            <Switch>           
                <Route exact path='/' component={Home} />

                {/* Home Site Routes path */}
                <Route exact path='/Contact' component={ContactPage} />
                <Route exact path='/Media' component={MediaPage} />
                <Route exact path='/Media/Article' component={Article}/>
                <Route exact path='/student-login' component={Login} />

                {/* Staff Portail Routes path */}
                <Route exact path='/Staff/Classes' component={ClassesPage}/>
                <Route exact path='/Staff/Class' component={ClassPage}/>
                <Route exact path='/Staff/Dashboard' component={StaffDashboard}/>
                <Route exact path='/Staff/Departments' component={DepartmentsPage}/>
                <Route exact path='/Staff/Events' component={Events}/>
                <Route exact path='/Staff/Exams' component={ExamsPage}/>
                <Route exact path='/Staff/Exams/Calendar' component={CalendarPage}/>
                <Route exact path='/Staff/Exams/Subject' component={SubjectSelection}/>
                <Route exact path='/Staff/Modules-Shelf' component={ModulePage}/>
                <Route exact path='/Staff/Reports' component={Reports}/>
                <Route exact path='/Staff/Students' component={StudentsPage}/>
                <Route exact path={'/Staff/Students/Profile='+ studentName} component={StudentsProfile}/>
                <Route exact path='/Staff/Time-Table' component={TimeTablePage}/>
                
                {/* Students Portail Routes path */}
                <Route exact path='/Students/Dashboard' component={StudentsDashboard}/>
                <Route exact path='/Students/Modules' component={StudentsModules}/>
                <Route exact path='/Students/Modules/Module' component={StudentsModule}/>
                
            </Switch>
        </Routers>
    );
}

export default Router;