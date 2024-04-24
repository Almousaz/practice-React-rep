
import styled from './navbar.module.css'

function Navbar(props){


    // let title = "Web Site Brand"



    return(
        
        <div className={styled.headerWrapper}>
            <div className='container'>
            <div className={styled.navbarstyle}>
            {/* <h1>Header</h1> */}
            <h3 className={styled.header}>{props.title}</h3>
            {/* <h3>{title}</h3> */}

            <div className={styled.navbar}>
                <ul>
                <li>List Arcticles</li>
                <li>New Article</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            </div>
            
        </div>
        </div>
        </div>
            
            
        
    )
}

export default Navbar;

