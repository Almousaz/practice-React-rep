
import styled from "./home.module.css"
import Navbar from "../../components/navbar/Navbar"
import Article from "../../components/Article/Article"

function Home(){



    let articles = [
        {
            id: 1,
            imageUrl:"",
            title:"first adticle",
            readingTime: 5
        },
        {
            id: 2,
            imageUrl:"",
            title:"second article",
            readingTime: 3   
        },
        {
            id: 3,
            imageUrl:"",
            title:"third article",
            readingTime: 8   
        }
    ]









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
                {
                    articles.map(article => (
                        <Article />
                    ))
                }
            
            
            </div>
            
            
            </div>
            </div>
            
        </div>
       
       
    )
}

export default Home