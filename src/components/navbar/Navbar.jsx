
import styled from './navbar.module.css'
import { Link } from 'react-router-dom';

function Navbar(props){


    // let title = "Web Site Brand"



    return(
        
        <div className={styled.headerWrapper}>
            <div className='container'>
            <div className={styled.navbarstyle}>
            
                <h3 className={styled.header}>{props.title}</h3>
            

            
                <ul className={styled.navbar}>

                        
                        <li><Link to="/">List Arcticles</Link></li>

                        <li>
                            <Link>New Article</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>Contact Us</li>
                </ul>
            </div>
            
        </div>
        </div>
        
            
            
        
    )
}

export default Navbar;

