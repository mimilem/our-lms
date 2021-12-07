/*
    Here we organize and style the elements of the header 
    and Navigation Tab.
*/

import './header.css';


function Header() {
    return (
        <header className='container'>
            <div className='logoContainer'>
                <div className='logo'/>
            </div>

            {/* Staff Login Form */}
            <div className='loginInputContainer'>
                Staff login: 
                <input
                    placeholder="Username"
                />
                <input
                    placeholder="Password"
                />
                <button>Login</button>
            </div>

            {/* Navigation Bar */}
            <div className="navContainer">
                <ul className="tabElementsContainer">
                    <li className="tabElement">Home</li>
                    <li className="tabElement">Courses</li>
                    <li className="tabElement">About Us</li>
                    <li className="tabElement">Contact Us</li>
                    <li className="tabElement">Register</li>
                    <li className="tabElement">Student Portal</li>
                </ul>
            </div>
        </header>
    );
}

export default Header;