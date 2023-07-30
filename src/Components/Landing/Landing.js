import React from 'react'
import banner from '../../Img/banner.jpeg'
import './Landing.css'
import int1 from '../../Img/int1.jpeg'
import int2 from '../../Img/int2.jpg'
import int3 from '../../Img/int3.jpg'
import int4 from '../../Img/int4.jpg'
import int5 from '../../Img/int5.jpg'
import go from '../../Img/go.png'


const Landing = () => {
  return (
    <div className='landing'>
        <div className="banner">
            <img src={banner} id='banner' alt="banner" />
            <div className="text">
                <span>Help You Find </span>
                <span>Suitable Home</span>
                <span>is Our Priority</span>
            </div>
            <div className="filter">
                <select className='drop-down'>
                    <option value="">Location</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Patna">Patna</option>
                </select>
                <select className='drop-down'>
                    <option value="">Category</option>
                    <option value="Delhi">Rental</option>
                    <option value="Mumbai">Residential</option>
                    <option value="Patna">Comercial</option>
                </select>
                <select className='drop-down'>
                    <option value="">Property Type</option>
                    <option value="Delhi">House</option>
                    <option value="Mumbai">Shop</option>
                    <option value="Patna">Rental</option>
                </select>
                <button id='search'>Search</button>
            </div>
        </div>
        <div className="featured">
            <div className="featured-title">
                <h2>Featured Properties</h2>
            </div>
            <div className="featured-info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,</p>
            </div>
            <div className="featured-img">
            <div class="grid-container">
                <div class="item1">
                <img src={int1} alt="int1" />
                </div>
                <div class="item2">
                    <img src={int4} alt="int1" />
                    <div className="fade">
                        <h3>New Property</h3>
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                        <div className="go-btn">
                        <div className="go">
                            <img src={go} alt="" id='go' />
                        </div>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <img src={int3} alt="int1" />
                </div>  
                <div class="grid-item">
                    <img src={int2} alt="int1" />
                </div>
                <div class="grid-item">
                    <img src={int5} alt="int1" />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Landing