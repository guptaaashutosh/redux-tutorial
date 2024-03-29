import React from "react";
import './Home.css';

const Home=(props)=>{
    console.warn("Home props",props);
    return (
        <> 
          <div className="addToCart">
            <img  src='https://static.vecteezy.com/system/resources/thumbnails/007/227/569/small/add-to-cart-icon-design-illustration-vector.jpg' alt="add to cart image" />
          </div>

            <h1>Home component</h1>
            <div >
                <button>Add to cart</button>
            </div>
            <div className="card-wrapper">
              <div className="image-wrapper item">
                  <img src="https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg"/>
              </div>
              <div className="text-wrapper item">
                  <span>iphone</span>
                  <span>price : rs.120000</span>
              </div>
              <div className="btn-wrapper item">
                  <button
                  onClick={()=>props.addToCartHandler({
                    price:'Rs.12000',
                    name:'i phone 11',
                    })}
                  >Add to cart</button>
              </div>
            </div>
        </>
    )
}

export default Home;