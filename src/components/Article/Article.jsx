
import styled from "./Article.module.css"
import article from "./../Assets/images/javascript-736400_640.png"




function Article (props){

    return (

        <div className={styled.articleWrapper}>
            <img src={props.article.imageUrl} />

            <h3>{props.article.title}</h3>
            <p>Reading Time {props.article.readingTime} min</p>
        </div>



    )
}


export default Article
