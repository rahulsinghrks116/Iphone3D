import React from "react";

const SoundSection = () => {
    

  const handleLearnMore=()=>{
    const element = document.querySelector(".display-section");
    window.scrollTo({
      top:element?.getBoundingClientReact().buttom,
      left:0,
      behavior:"smooth"
    })
  }


  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound Sysytem</h2>
          <p className="text">Feel the base</p>
          <span className="description">
            {" "}
            From ₹5417/mo. for 24 mo. or ₹129999
          </span>
          <ul className="links">
            <li>
              <button className="button">
                <a className="link" href="https://www.flipkart.com/apple-iphone-14-pro-space-black-256-gb/p/itmbf9b9d0d108a7?pid=MOBGHWFHMSKYWVTR&lid=LSTMOBGHWFHMSKYWVTRKZV7U3&marketplace=FLIPKART&q=iphone+14+pro&store=tyy%2F4io&srno=s_1_2&otracker=search&otracker1=search&fm=organic&iid=c3d24309-dea9-4389-a803-bc736ba3f2ff.MOBGHWFHMSKYWVTR.SEARCH&ppt=pp&ppn=pp&ssid=851xwg558g0000001691908354101&qH=73a41d19c3188cc2">
                  Buy
                </a>
              </button>
            </li>
            <li>
              <a
                className="link"
                onClick={handleLearnMore}
              >
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoundSection;
