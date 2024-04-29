import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import styled from "./about.module.css"
import imageJs from "./../../components/Assets/images/javascript-736400_640.png"



function Aboutus () {

    return (


        <div className={styled.aboutPage}>

             <Navbar title = "Ali Blog" />

             <div className="container">
             <h2 className={styled.title}>About Us</h2>

<p className={styled.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident cum repellat aliquid qui, praesentium blanditiis aperiam quam. Voluptate adipisci sequi cupiditate esse voluptatibus nobis aliquid nostrum. Tempora alias nisi unde.</p>
<img className={styled.imageJs} src={imageJs} alt="" />

<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident cum repellat aliquid qui, praesentium blanditiis aperiam quam. Voluptate adipisci sequi cupiditate esse voluptatibus nobis aliquid nostrum. Tempora alias nisi unde.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ab necessitatibus, optio asperiores officiis sequi ducimus, praesentium aliquam debitis dolorum, earum error sunt voluptatem. Perferendis ratione accusamus repudiandae quod amet?
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident cum repellat aliquid qui, praesentium blanditiis aperiam quam. Voluptate adipisci sequi cupiditate esse voluptatibus nobis aliquid nostrum. Tempora alias nisi unde.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ab necessitatibus, optio asperiores officiis sequi ducimus, praesentium aliquam debitis dolorum, earum error sunt voluptatem. Perferendis ratione accusamus repudiandae quod amet?
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident cum repellat aliquid qui, praesentium blanditiis aperiam quam. Voluptate adipisci sequi cupiditate esse voluptatibus nobis aliquid nostrum. Tempora alias nisi unde.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi ab necessitatibus, optio asperiores officiis sequi ducimus, praesentium aliquam debitis dolorum, earum error sunt voluptatem. Perferendis ratione accusamus repudiandae quod amet?

</p>

<img src="https://www.pcworld.com/wp-content/uploads/2023/04/livelywallpaperhero.jpg?resize=2048%2C1294&quality=50&strip=all" alt="" />

<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident cum repellat aliquid qui, praesentium blanditiis aperiam quam. Voluptate adipisci sequi cupiditate esse voluptatibus nobis aliquid nostrum. Tempora alias nisi unde.</p>
             </div>
             

           








             <Footer />



             


        </div>

       



    )
}


export default Aboutus