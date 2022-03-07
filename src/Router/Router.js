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
import RegistrationIndexPage from '../SiteFolders/HomeSite/Pages/Register';

//import the StaffPortal site pages
import AcademicCalendar from '../SiteFolders/StaffPortal/Pages/Institution/Pages/AcademicCalendar';
import AdminProfile from '../SiteFolders/StaffPortal/Pages/Institution/Pages/AdminProfile';
import CalendarPage from '../SiteFolders/StaffPortal/Pages/CalendarPage';
import CampusPage from '../SiteFolders/StaffPortal/Pages/Campus';
import ClassDiscussion from '../SiteFolders/StaffPortal/Pages/Class/Components/ClassDiscussion'
import ClassStudents from '../SiteFolders/StaffPortal/Pages/Class/Components/ClassStudents';
import ClassTimeTable from '../SiteFolders/StaffPortal/Pages/Class/Components/ClassTimeTable';
import Courses from '../SiteFolders/StaffPortal/Pages/Class/Components/Courses';
import Events from '../SiteFolders/StaffPortal/Pages/Events';
import ExamsPage from '../SiteFolders/StaffPortal/Pages/Exams';
import FacultiesPage from '../SiteFolders/StaffPortal/Pages/Faculties';
import GeneralDetails from '../SiteFolders/StaffPortal/Pages/Institution/Pages/GeneralDetails';
import GeneralEvents from '../SiteFolders/StaffPortal/Pages/Institution/Pages/GeneralEvent';
import GeneralFees from '../SiteFolders/StaffPortal/Pages/Institution/Pages/GeneralFees';
import GeneralNotifications from '../SiteFolders/StaffPortal/Pages/Institution/Pages/GeneralNotifications';
import GeneralStaff from '../SiteFolders/StaffPortal/Pages/Institution/Pages/GeneralStaff';
import Lessons from '../SiteFolders/StaffPortal/Pages/Class/Components/Lessons';
import Library from '../SiteFolders/StaffPortal/Pages/Institution/Pages/Library';
import ManageUsersPage from '../SiteFolders/StaffPortal/Pages/ManageUsers';
import ModulePage from '../SiteFolders/StaffPortal/Pages/Module';
import Reports from '../SiteFolders/StaffPortal/Pages/Reports';
import StaffDashboard from '../SiteFolders/StaffPortal/Pages/Dashboard';
import StaffLogin from '../SiteFolders/StaffPortal/Authentication/Login';
import StudentsPage from '../SiteFolders/StaffPortal/Pages/Students';
import StudentsProfile from '../SiteFolders/StaffPortal/Pages/StudentsProfile';
import SubjectSelection from '../SiteFolders/StaffPortal/Pages/SubjectSelection';
import TimeTablePage from '../SiteFolders/StaffPortal/Pages/TimeTablePage';

//import the StudentPortal site pages
import Login from '../SiteFolders/StudentPortal/Authentication/Login';
import MyResults from '../SiteFolders/StudentPortal/Pages/MyResults';
import StudentsDashboard from '../SiteFolders/StudentPortal/Pages/Dashboard';
import StudentMedia from '../SiteFolders/StudentPortal/Pages/Media';
import StudentsModule from '../SiteFolders/StudentPortal/Pages/MyCourses/Module';
import StudentMyCourses from '../SiteFolders/StudentPortal/Pages/MyCourses';
import StudentPortailExamsPage from '../SiteFolders/StudentPortal/Pages/Exams';
import StudentReports from '../SiteFolders/StudentPortal/Pages/Reports';
import StudentTimeTable from '../SiteFolders/StudentPortal/Pages/TimeTable';


function Router() {

    return (
        <Routers>
            <Switch>           
                <Route exact path='/' component={Home} />

                {/* Home Site Routes path */}
                <Route exact path='/Contact' component={ContactPage} />
                <Route exact path='/Media' component={MediaPage} />
                <Route exact path='/Media/Article' component={Article} />
                <Route exact path='/Register' component={RegistrationIndexPage} />
                <Route exact path='/student-login' component={Login} />

                {/* Staff Portail Routes path */}
                <Route exact path='/Staff/SelectCampus' component={CampusPage}/>
                <Route exact path='/Staff/AdminProfile' component={AdminProfile}/>
                <Route exact path='/Staff/AcademicCalendar' component={AcademicCalendar}/>
                <Route exact path='/Staff/GeneralEvent' component={GeneralEvents}/>
                <Route exact path='/Staff/GeneralNotifications' component={GeneralNotifications}/>
                <Route exact path='/Staff/GeneralFees' component={GeneralFees}/>
                <Route exact path='/Staff/GeneralDetails' component={GeneralDetails}/>
                <Route exact path='/Staff/GeneralStaff' component={GeneralStaff}/>
                <Route exact path='/Staff/Library' component={Library}/>
                <Route exact path='/Staff/Dashboard' component={StaffDashboard}/>
                <Route exact path='/Staff/Faculties' component={FacultiesPage}/>
                <Route exact path='/Staff/Departments/Courses' component={Courses}/>
                <Route exact path='/Staff/Departments/Lessons' component={Lessons}/>
                <Route exact path='/Staff/Departments/Students' component={ClassStudents}/>
                <Route exact path='/Staff/Departments/TimeTable' component={ClassTimeTable}/>
                <Route exact path='/Staff/Departments/Discussion' component={ClassDiscussion}/>
                <Route exact path='/Staff/Events' component={Events}/>
                <Route exact path='/Staff/Exams' component={ExamsPage}/>
                <Route exact path='/Staff/Exams/Calendar' component={CalendarPage}/>
                <Route exact path='/Staff/Exams/Subject' component={SubjectSelection}/>
                <Route exact path='/Staff-login' component={StaffLogin}/>
                <Route exact path='/Staff/ManageUsers' component={ManageUsersPage}/>
                <Route exact path='/Staff/Modules-Shelf' component={ModulePage}/>
                <Route exact path='/Staff/Reports' component={Reports}/>
                <Route exact path='/Staff/Students' component={StudentsPage}/>
                <Route exact path='/Staff/Students/Profile=' component={StudentsProfile}/>
                <Route exact path='/Staff/Time-Table' component={TimeTablePage}/>
                
                {/* Students Portail Routes path */}
                <Route exact path='/Students/Dashboard' component={StudentsDashboard}/>
                <Route exact path='/Students/Exams' component={StudentPortailExamsPage}/>
                <Route exact path='/Students/Media' component={StudentMedia}/>
                <Route exact path='/Students/MyCourses' component={StudentMyCourses}/>
                <Route exact path='/Students/MyCourses/CourseName' component={StudentsModule}/>
                <Route exact path='/Students/Reports' component={StudentReports}/>
                <Route exact path='/Students/Time-Table' component={StudentTimeTable}/>
                <Route exact path='/Students/MyResult' component={MyResults}/>
                
            </Switch>
        </Routers>
    );
}

export default Router;