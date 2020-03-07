import React from 'react'

const Home = (props) => (
   <div className="main_content">
       <div className="container">
           <h2> {props.title} </h2>
           <div className="home_image"></div>
           <div className="thumbnail_container">
               <div className="home_thumbnail_1"></div>
               <div className="home_thumbnail_2"></div>
               <div className="home_thumbnail_3"></div>
           </div>
       </div>
   </div>


);

export default Home
