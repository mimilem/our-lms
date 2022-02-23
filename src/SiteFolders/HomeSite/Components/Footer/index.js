import React from 'react';
import './footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-logoContainer'>
                <div className='footer-logo'/>
            </div>

            <div className='address'>
                Address:
                <br/>
                Meadowbrook Ln, Bryanston,<br/> 
                Sandton,<br/> 
                2191
                <br/>
                <p>Email:
                    <a 
                        style={{color:'#fff', textDecoration:'none'}} 
                        href="mailto:snephthali@gmail.com"
                    > snephthali@gmail.com
                    </a>
                </p>
                <p>
                    <a 
                        style={{color:'#fff'}} 
                        href="tel:+270662400460"
                    >Tel: +27 (0)66 240 0460
                    </a>
                </p>
            </div>

            <div className='original-text'>
            © 2022 Ngoma Digitech. All rights reserved.
            </div>
        </div>
    );
}

export default Footer;