"use client"
// import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import './styles/slider.module.css'

const Slider = ()=>{
    return (
      <section>
        <div id="containerSlider">
          <Carousel showArrows={true} showThumbs={false} autoPlay={true} interval={1000} infiniteLoop={true}>
            <picture>
              
              <img src="/assets/img1.png" alt="image1" width={300} height={300}/>
            </picture>
            <picture >
              
              <img src="/assets/img2.png" alt="image2" width={300} height={300}/>
            </picture>
            <picture >
              
              <img src="/assets/img3.png" alt="image3" width={300} height={300}/>
            </picture>
            <picture >
              
              <img src="/assets/img4.png" alt="image4" width={300} height={300}/>
            </picture>
          </Carousel>
        </div>
      </section>
    );
}
export default Slider;