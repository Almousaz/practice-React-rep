
import styled from './navbar.module.css'

function Navbar(props){


    // let title = "Web Site Brand"



    return(
        
        <div className={styled.headerWrapper}>
            <div className='container'>
            <div className={styled.navbarstyle}>
            
                <h3 className={styled.header}>{props.title}</h3>
            

            
                <ul className={styled.navbar}>
                        <li>List Arcticles</li>
                        <li>New Article</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                </ul>
            </div>
            
        </div>
        </div>
        
            
            
        
    )
}

export default Navbar;

