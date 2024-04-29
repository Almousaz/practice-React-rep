import { useEffect, useState } from "react";
import styled from "./home.module.css";
import Navbar from "../../components/navbar/Navbar";
import Article from "../../components/Article/Article";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Spinner from "../../components/spiner/spinner";

function Home() {
  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // API call
    setIsLoading(true)


    axios.get("http://localhost:8200/articles").then( result => {

        setArticles(result.data);

        setIsLoading(false)

    //   console.log(result.data.data);
    })

    .catch((error) => {
        console.log(error);
        setIsLoading(true);
    });

  }, []);

  return (
    <div>
      <div className={styled.homeWrapper}>
        <Navbar title="Ali Blog " />

        

        {/* <h1 className={styled.header}>
                Hello world ...
            </h1> */}
        <div className="container">
          <h2>Home page</h2>
          <h4>New Articles</h4>

            {/* condition ? true : false */}

            {
             isLoading ? <Spinner /> : (
                <div className={styled.articleList}>
                {articles.map((article) => (
                  
                    <Link to={`/article/${article.id}`}>
                    <Article key={article.id} article={article} />
                    </Link>
    
                ))}
              </div>

             )

            }
          

         

        </div>

        <Footer />

      </div>
    </div>
  );
}

export default Home;
