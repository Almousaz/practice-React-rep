
import styled from "./home.module.css"
import Navbar from "../../components/navbar/Navbar"

function Articles(){
    return(
        <div>
            <Navbar title = "Ali Blog "/>
            <h1 className={styled.header}>
                Hello world ...
            </h1>
            <h2>Home page</h2>
        </div>
    )
}

export default Articles