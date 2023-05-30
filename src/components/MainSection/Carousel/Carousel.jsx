import { faTurnUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import card1 from '../../../assets/card-1.jpg'
import card2 from '../../../assets/card-2.jpg'
import card3 from '../../../assets/card-3.jpg'

import './Carousel.css'
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1000, // Screen width at which the settings will change
        settings: {
          slidesToShow: 1, // Number of slides to show at this breakpoint
        },
      },
    ],
  }
  return (
    <div className="carousel-container">
      <Slider {...settings} className="slider">
        <a
          className="card-tips"
          href="https://yujdesigns.medium.com/ux-writing-a-new-face-of-content-writing-3751b49e7927"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="carousel-card-box">
            <div className="carousel-card card-1">
              <div className="card-image-box">
                <img src={card1} alt="image-1" className="card-image image-1" />
              </div>
              <div className="card-text card-1">
                <div className="card-text-content">
                  <h4>How to write content about your UX design</h4>

                  <p>
                    Crafting seamless UX: Unleash the potential of user-centric
                    design.
                  </p>
                </div>
                <p>tips</p>
                <p>7 Min Read</p>
                <p>
                  <FontAwesomeIcon icon={faTurnUp} className="fa-icon" />
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          className="card-tips"
          href="https://bootcamp.uxdesign.cc/designing-an-interior-design-advice-app-for-made-com-d84544e809fd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="carousel-card-box">
            <div className={`carousel-card card-2 `}>
              <div className="card-image-box">
                <img src={card2} alt="image-2" className="card-image image-2" />
              </div>
              <div className="card-text card-2">
                <div className="card-text-content">
                  <h4>Experiment: Building an interior design app.</h4>

                  <p>
                    Innovative interiors: Explore our experiment in building a
                    captivating design app.
                  </p>
                </div>

                <p>tutorial</p>
                <p>4 Min Read</p>
                <p>
                  <FontAwesomeIcon icon={faTurnUp} className="fa-icon" />
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          className="card-tips"
          href="https://medium.com/prodwave/11-tips-to-improve-your-workflow-while-mixing-your-track-e0e63f7d5d8b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="carousel-card-box">
            <div className="carousel-card card-3">
              <div className="card-image-box">
                <img src={card3} alt="image-3" className="card-image image-3" />
              </div>
              <div className="card-text card-3">
                <div className="card-text-content">
                  <h4>11 tips to improve your worklow</h4>
                  <p>Boost your mixing workflow with these 11 valuable tips.</p>
                </div>

                <p>growth</p>
                <p>7 Min Read</p>
                <p>
                  <FontAwesomeIcon icon={faTurnUp} className="fa-icon" />
                </p>
              </div>
            </div>
          </div>
        </a>
      </Slider>
    </div>
  )
}
export default Carousel
