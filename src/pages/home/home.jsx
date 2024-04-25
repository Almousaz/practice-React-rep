
import styled from "./home.module.css"
import Navbar from "../../components/navbar/Navbar"
import Article from "../../components/Article/Article"

function Home(){
    return(
        
         <div>
            <div className={styled.homeWrapper}>

            <Navbar title = "Ali Blog "/>
            {/* <h1 className={styled.header}>
                Hello world ...
            </h1> */}
            <div className="container">
            <h2>Home page</h2>
            <h4>New Articles</h4>

            <div className={styled.articleList}>
            <Article />
            <Article />
            <Article />
            <Article />
            
            <Article />
            <Article />
            <Article />
            <Article />
            </div>
            
            
            </div>
            </div>
            
        </div>
       
       
    )
}

export default Home