import Navbar from "../../components/navbar/Navbar";
import styled from "./articlePage.module.css"
import picture from "../../components/Assets/images/javascript-736400_640.png"
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/spiner/spinner";


function ArticlePage () {


    const [article, setArticle] = useState({})


    const params = useParams()

    const [isLoading, setIsLoading] = useState(false)
    
     //  http://localhost:8500/articles/1

     
    useEffect(() => {
       
        setIsLoading(true)
        axios.get(`http://localhost:8500/articles/${params.id}`).then((result) => {
            
            setArticle(result.data)

            setIsLoading(false)

        })

        .catch((error) => {
            console.log(error);
            setIsLoading(false)
        });

    } , []);


    return(
       <div>
        <Navbar title = "Ali Blog" />
        <div className={styled.articleWrapper}>
            <div className="container">
            <h4>Article Page</h4>

                {
                  isLoading ? <Spinner /> : ( 
                    <>
                    <h3>{article.title}</h3>
                <div className={styled.articleInfo}>
                    <span>Date : {article.date}</span>
                    <span>Autor : {article.author}</span>
                    <span>readingTime : {article.readingTime} min</span>
                </div>

                <img src={article.imageUrl} alt="" />

                <p>
                    {article.content}
                </p>
                    </>
                  ) 


                }

                


            
                
            </div>
        
        </div>


        <Footer />
        
       </div> 
    );
}

export default ArticlePage;