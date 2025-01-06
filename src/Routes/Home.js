import React from 'react';
import './Home.css';
import capsule from '../images/capsule.png';
import gsap from "gsap";
import { useState, useEffect } from "react";
import { useGSAP } from '@gsap/react';
import bottle from '../images/file.png';
import cap from '../images/steel1.png';
import cap1 from '../images/cap.png';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import star from '../images/star.png'
import square from '../images/square.png'
import triangle from '../images/triangle.png'
gsap.registerPlugin(ScrollTrigger);


const Home = () => {

  const getCurrentTime = () =>
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  const [time, setTime] = useState(getCurrentTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  const [mainTime, period] = time.split(" "); // Split time and AM/PM
  useGSAP(() => {
    gsap.to(".img", {
      x: 400,
      y: 500,
      duration: 5,
      scale:1.5,
      rotate: 180,

      scrollTrigger: {
        markers: true,
        trigger: ".img",
        start: "top 10%",
        end: "top -51%",
        pin: true,
        scrub: true,
        onEnter: () => {
          document.querySelector(".img").style.visibility = "visible";
        },
        onLeaveBack: () => {
          document.querySelector(".img").style.visibility = "hidden";
        }

      },




    });

    gsap.to(".bottle", {
      duration: 8,
      scale: 1,
      rotate: 360,
      scrollTrigger: {
        markers: true,
        trigger: ".bottle",
        start: "top 0%",
        end: "top -122%",
        pin: true,
        scrub: true,
        onEnter: () => {
          // Ensure the bottle is visible when scrolling down
          document.querySelector(".bottle").style.visibility = "visible";
        },
        onLeave: () => {
          // Hide the bottle when animation completes scrolling down
          document.querySelector(".bottle").style.visibility = "hidden";
        },
        onEnterBack: () => {
          // Show the bottle when scrolling back up
          document.querySelector(".bottle").style.visibility = "visible";
        },
        onLeaveBack: () => {
          // Ensure the bottle stays hidden when scrolling up past the trigger
          document.querySelector(".bottle").style.visibility = "hidden";
        }



      }






    })

    gsap.to(".cap", {
      duration: 5,
      scale: 1.5, // Add slight scaling for distinction
      // steel cap
      x: -2000,
      y: 800,
      rotate: 360,
      scrollTrigger: {
        markers: true,

        trigger: ".page1",
        start: "top 0%",
        end: "top -400%",
        scrub: true,
        onEnter: () => {
          document.querySelector(".cap").style.visibility = "visible";
        },
        onLeaveBack: () => {
          // Ensure the bottle stays hidden when scrolling up past the trigger
          document.querySelector(".cap").style.visibility = "hidden";
        }


      },
    });
    gsap.to(".bottlecap", {
      duration: 5,
      delay: 5,
      x: 600,
      y: 900,

      scale: 1.5, // Add slight scaling for distinction
      rotate: 360,

      // Double the rotation for visual interest
      scrollTrigger: {
        markers: true,
        //cap1 gor cap  cap.png
        trigger: ".page1", // Ensure ".page1" is distinct and not overlapping with ".bottle"
        start: "top 0%",
        end: "top -400%",
        scrub: true,
        onEnter: () => {
          document.querySelector(".bottlecap").style.visibility = "visible";
        },
        onEnterBack: () => {
          // Show the bottle when scrolling back up
          document.querySelector(".bottlecap").style.visibility = "hidden";
        },
        onLeaveBack: () => {
          // Ensure the bottle stays hidden when scrolling up past the trigger
          document.querySelector(".bottlecap").style.visibility = "hidden";
        }
      },
    });
    gsap.to(".triangle", {
      duration: 5,
  
      x: 300,
   scale: 1.5, // Add slight scaling for distinction
   

      // Double the rotation for visual interest
      scrollTrigger: {
        markers: true,
      
        trigger: ".page3", // Ensure ".page1" is distinct and not overlapping with ".bottle"
        start: "top 30% ",
        end: "top -400%",
        scrub: true,
       
      },
    });
    gsap.to(".square", {
      duration: 5,
  
      x: -600,
   scale: 1.5, // Add slight scaling for distinction
   
      // Double the rotation for visual interest
      scrollTrigger: {
        markers: true,
      
        trigger: ".page3", // Ensure ".page1" is distinct and not overlapping with ".bottle"
        start: "top ",
        end: "top -400%",
        scrub: true,
       
      },
    });
    gsap.to(".star", {
      duration: 5,
  
    y:-300,
   scale: 1.5, 
      scrollTrigger: {
        markers: true,
      
        trigger: ".page4", // Ensure ".page1" is distinct and not overlapping with ".bottle"
        start: "top 0% ",
        end: "top -400%",
        scrub: true,
       
      },
    });





gsap.from(".line", {
  y: '100%',
  opacity: 0,
  duration: 2.5,
  ease: 'power1.out',
  stagger: 0.1,
  scrub:true,

  
  scrollTrigger: {
    trigger: '.line',
    trigger: ".page4", // Ensure ".page1" is distinct and not overlapping with ".bottle"
    start: "top 0% ",
    end: "top -400%",
    markers:true,
    
  }
})





  })

  return (

    <>
      <div className='main'>

      </div>
      <div className='top'>
        <h1 className='heading'>KONK</h1>
        <p className='paragraph'>A demo storefront to showcase<br /> the powerful features of Shopify <br />Plus. A collaboration with Sunny<br /> Side Up
          <img src={bottle} className='bottle'></img>
          <br />

          <br />
          Featuring:
          <br />
          Bundles
          <br />
          3D viewer
          <br />
          cross-vorder detection
          <br />
          subscription
        </p>

      </div>
      <div className='bottom'>
        <h1 className='out'>OUT</h1>

      </div>
      <div className='btn'>
        <button className='button'>Shop now</button>
        <button className='button'>Book Call</button>
      </div>
      <div className='page1'>
        <img src={cap} className='bottlecap'>
        </img>
        <img src={cap1} className='cap'></img>
        <p> Shopify PLUS X SUNNY SIDE UP</p>

        <img src={capsule} className='img'></img>
      </div>
      <div className='page2'>
      </div>
      <div className='page3'>
        <div className='left'>
          <h1> One Capsule</h1>
        </div>
        <div className='right'>
          <h1>Five Components</h1>
          <span className='span'> CONVIENCE</span>
          <span className='span'> Natural Ingredients</span>
          <br />
          <br />
          <span>Magnesium</span>
          <span>Triple-action formula</span>
          <p>Designed with your well-being in mind, these <br />
            delicious, natural gummies are the ideal addition<br /> to your nightly routine.</p>
        </div>
      </div>
      <div className='page4'>
        <h1 className='line'>Your brand deserves <br />
          the integrated global<br />
          platform out there</h1>
        <img src={square} className='triangle'></img>
        <img src={triangle} className='square'></img>
        <img src={star} className='star'></img>
      </div>
      <div className='page5'>
        <p> Consume in 8 hours </p>
        <h1>
          <span style={{ fontSize: "" }}>{mainTime}</span>{" "}
          <span style={{ fontSize: "40px", verticalAlign: "bottom", marginTop: "8%" }}>{period}</span>
        </h1>
      </div>
      <div className='page6'>
        <div className='leftsection'>
          <img src={bottle} className='bottle1'></img>
        </div>
        <div className='rightsection'>
          <div className='box'>
            <h1>JINTO KONK</h1>
            <p>Designed with your well-being in mind, these delicious, natural<br/> gummies are the ideal addition to your nightly routine. Say goodbye <br/>to restless nights and hello to rejuvenating sleep with Jinto Konk <br/>sleep gummies – because you deserve to wake up refreshed and <br/>ready to conquer the day.


              2 Bottles

              4 Bottles</p>
          <div className='box1'>
            <div className='box2'>
              <p>2 Bottles</p>

            </div>
            <div className='box3'>
              <p>4 Bottles</p>
           
            </div>
            <div className='box4'>
              <p>6 Bottles</p>
             
            </div>
            <div className='box5'>
              <p> 8 Bottles</p>
              
            </div>
          </div>
          <br/>
          <div className='buy'>
            <button className='btn1'>Add to Cart</button>
            <p>Enjoy 15% off orders $60+ with code KONKED15<br/>


</p>
<p className='on'>Free shipping on orders $60+</p>
          </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home
