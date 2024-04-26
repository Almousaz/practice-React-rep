
import styled from "./Article.module.css"
import article from "./../Assets/images/javascript-736400_640.png"



function Article (){



    return (

        <div className={styled.articleWrapper}>
            <img src={article} />

            <h3>Variable in Java Script</h3>
            <p>Reading Time 5min</p>
        </div>



    )
}


export default Article