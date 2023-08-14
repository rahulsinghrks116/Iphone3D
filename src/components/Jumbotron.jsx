import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg';
import HoldingIphone from '../assets/images/iphone-hand.png';
const Jumbotron = () => {

  const handleLearnMore=()=>{
    const element = document.querySelector(".sound-section");
    window.scrollTo({
      top:element?.getBoundingClientReact().top,
      left:0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='jumbotron-section wrapper'>
        <h2 className='title'>New</h2>
        <img className='logo' src={Iphone} alt="iphone 14 pro" />
        <p className='text'>Big and bigger.</p>
        <span>
            From ₹5417/mo. for 24 mo. or ₹129999
        </span>
         
         <ul className='links'>
            <li>
                <button className='button'><a href="https://www.flipkart.com/apple-iphone-14-pro-space-black-256-gb/p/itmbf9b9d0d108a7?pid=MOBGHWFHMSKYWVTR&lid=LSTMOBGHWFHMSKYWVTRKZV7U3&marketplace=FLIPKART&q=iphone+14+pro&store=tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=organic&iid=c3d24309-dea9-4389-a803-bc736ba3f2ff.MOBGHWFHMSKYWVTR.SEARCH&ppt=pp&ppn=pp&ssid=851xwg558g0000001691908354101&qH=73a41d19c3188cc2">Buy</a></button>
            </li>
            <li>
                <a onClick={handleLearnMore} className='link'>Lead more</a>
            </li>
         </ul>

        <img className='iphone-img' src={HoldingIphone} alt="iPhone" />

    </div>
  )
}

export default Jumbotron