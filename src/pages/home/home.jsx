import React from "react";
import "./home.scss";
import Icon1 from "../../assets/icons/sofa-icon.png";
import Icon2 from "../../assets/icons/hammer-icon.png";
import Icon3 from "../../assets/icons/repair-icon.png";
import Slider from "react-slick";
import Sec3Img1 from "../../assets/products/sofa1.png";
import Sec3Img2 from "../../assets/products/sofa2.png";
import Sec3Img3 from "../../assets/products/table1.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card1 from "../../assets/products/card1.png";
import Card2 from "../../assets/products/card2.png";
import Card3 from "../../assets/products/card3.png";
import Card4 from "../../assets/products/card4.png";
import Card5 from "../../assets/products/card5.png";
import Card6 from "../../assets/products/card6.png";
import Card7 from "../../assets/products/card7.png";
import Shop1 from "../../assets/products/shop1.png";
import Shop2 from "../../assets/products/shop2.png";
import Shop3 from "../../assets/products/shop3.png";
import ReviewImg1 from "../../assets/products/sec81.png";
import ReviewImg2 from "../../assets/products/sec82.png";
import ReviewImg3 from "../../assets/products/sec83.png";
import ReviewImg4 from "../../assets/products/sec84.png";
import Media1 from "../../assets/products/media1.png";
import Media2 from "../../assets/products/media2.png";
import Media3 from "../../assets/products/media3.png";

import { AiFillStar } from "react-icons/ai";

const mediaProducts = [
  {
    name: "Product 1",
    image: Media1,
  },
  {
    name: "Product 2",
    image: Media2,
  },
  {
    name: "Product 3",
    image: Media3,
  },
  {
    name: "Product 3",
    image: Media1,
  },
  {
    name: "Product 3",
    image: Media2,
  },
  // Add more products as needed
];

const shopProducts = [
  {
    name: "Sven Charme Tan Sofa",
    image: Shop1,
    price: "₹20,500",
  },
  {
    name: "Elegant Dining Table",
    image: Shop2,
    price: "₹12,999",
  },
  {
    name: "Modern Lounge Chair",
    image: Shop3,
    price: "₹8,750",
  },
  {
    name: "Vintage Bookshelf",
    image: Shop1,
    price: "₹15,500",
  },
  {
    name: "Retro Desk Lamp",
    image: Shop2,
    price: "₹2,999",
  },
  {
    name: "Cozy Throw Blanket",
    image: Shop3,
    price: "₹1,999",
  },
];

const similarProducts = [
  {
    image: Sec3Img1,
    name: "Sven Charme Tan Sofa",
    price: "₹20,500",
  },
  {
    image: Sec3Img2,
    name: "Elegant Dining Table",
    price: "₹12,999",
  },
  {
    image: Sec3Img3,
    name: "Modern Lounge Chair",
    price: "₹8,750",
  },
  {
    image: Sec3Img1,
    name: "Vintage Bookshelf",
    price: "₹15,500",
  },
  {
    image: Sec3Img2,
    name: "Retro Desk Lamp",
    price: "₹2,999",
  },
  {
    image: Sec3Img3,
    name: "Cozy Throw Blanket",
    price: "₹1,999",
  },
];

const cardProducts = [
  {
    name: "4 Seater Sofa",
    image: Card1,
  },
  {
    name: "Modern Coffee Table",
    image: Card2,
  },
  {
    name: "Lounge Chair",
    image: Card3,
  },
  {
    name: "Dining Set",
    image: Card4,
  },
  {
    name: "Bookshelf",
    image: Card5,
  },
  {
    name: "Desk Lamp",
    image: Card6,
  },
  {
    name: "Throw Pillow",
    image: Card7,
  },
];

function HomePage() {

  const settings = {
    arrows: true,
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <FiChevronLeft className="slick-prev" />,
    nextArrow: <FiChevronRight className="slick-next" />,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <FiChevronLeft className="slick-prev" />,
    nextArrow: <FiChevronRight className="slick-next" />,
    responsive: [
     
      {
        breakpoint: 1141,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 934,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      
    ],
  };

  return (
    <>
      <section className="section-1">
        <div className="container-1">
          <div className="background">
            <div className="gradient"></div>
            <div className="text">
              <h2 className="text-1">
                Low Cost <br /> High Quality
              </h2>

              <p className="text-2">Explore beautiful modern furniture.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-2">
        <div className="row1">
          <div className="col1 col12">
            <img src={Icon1} alt="" />
            <p className="fs-p fc-light">Modern Furniture</p>
          </div>
          <div className="col1 col12">
            <img src={Icon2} alt="" />
            <p className="fs-p fc-light">Specially crated for you.</p>
          </div>
          <div className="col1">
            <img src={Icon3} alt="" />
            <p className="fs-p fc-light">Designed to last.</p>
          </div>
        </div>
      </section>

      <section className="section-3">
        <h3 className="txt-h3">Crafted for you</h3>
        <div className="container-3">
          <div className="whole">
            <Slider {...settings}>
              {similarProducts.map((product, index) => (
                <div className="each-card" key={index}>
                  <img src={product.image} alt={product.name} />
                  <p className="text-center item-name">{product.name}</p>
                  <p className="text-center item-price">{product.price}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <hr />
      <section className="section-4">
        <h3 className="txt-h3">Shop our categories</h3>
        <div className="whole">
          <Slider {...settings}>
            {cardProducts.map((product, index) => (
              <div className="each-card" key={index}>
                <img src={product.image} alt={product.name} />
                <p className="text-center item-name">{product.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <hr />

      <section className="section-5">
        <h3 className="txt-h3">Shop All</h3>
        <div className="whole">
          <Slider {...settings}>
            {shopProducts.map((product, index) => (
              <div className="each-card" key={index}>
                <img src={product.image} alt={product.name} />
                <p className="text-center item-name">{product.name}</p>
                <p className="item-price">{product.price}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="section-6">
        <div className="row1">
          <div className="col1">
            <p className="big-txt">12000+</p>
            <p className="fs-p fc-light">
              Happy
              <br />
              Customers
            </p>
          </div>
          <div className="col1">
            <p className="big-txt">800+</p>
            <p className="fs-p fc-light">Products</p>
          </div>
          <div className="col1">
            <p className="big-txt">10+</p>
            <p className="fs-p fc-light">Cities</p>
          </div>
        </div>
      </section>

      <section className="section-7">
        <h3 className="txt-h3-sec-7">What people are saying</h3>
        <div class="row">
          <div class="col">
            <img src={ReviewImg1} alt="Review" />
            <p className="star">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </p>
            <p>
              Ilena V. from Detroit, MI bought a Abisko Quartz White Lounge
              Chair
            </p>
            <p>
              “Article has been fantastic to deal with, descriptions, delivery,
              customer service, just really easy all the way around. As a
              designer/decorator, I will continue to work with them over and
              over again!
            </p>
          </div>
          <div class="col">
            <img src={ReviewImg2} alt="Review" />
            <p className="star">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </p>
            <p>
              Ilena V. from Detroit, MI bought a Abisko Quartz White Lounge
              Chair
            </p>
            <p>
              “Article has been fantastic to deal with, descriptions, delivery,
              customer service, just really easy all the way around. As a
              designer/decorator, I will continue to work with them over and
              over again!” 
            </p>
          </div>
          <div class="col">
            <img src={ReviewImg3} alt="Review" />
            <p className="star">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </p>
            <p>
              Ilena V. from Detroit, MI bought a Abisko Quartz White Lounge
              Chair
            </p>
            <p>
              “Article has been fantastic to deal with, descriptions, delivery,
              customer service, just really easy all the way around. As a
              designer/decorator, I will continue to work with them over and
              over again!” 
            </p>
          </div>
          <div class="col">
            <img src={ReviewImg4} alt="Review" />
            <p className="star">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </p>
            <p>
              Ilena V. from Detroit, MI bought a Abisko Quartz White Lounge
              Chair
            </p>
            <p>
              “Article has been fantastic to deal with, descriptions, delivery,
              customer service, just really easy all the way around. As a
              designer/decorator, I will continue to work with them over and
              over again!” 
            </p>
          </div>
        </div>
        <br />
        <p className="rmr">Read More Reviews</p>
      </section>

      <section className="section-8">
        <div className="row">
          <div className="col1">
            <h3 className="sec8-big-txt">Love modern furniture? Us too.</h3>
          </div>
          <div className="col">
            <p className="sec8-txt">
              At Lazyabout, were all about great style. Think sleek modular
              sofas, anything-but-basic beds, smart sideboards, and more — all
              designed with premium quality and comfort in mind. Its
              contemporary furniture meets unparalleled value. Nice, right?
            </p>
            <p className="sec8-txt">
              Whether youre into the crisp, cool lines of mid-century modern
              furniture, like those laid-back boho vibes, or prefer the Scandi
              look, weve got designs to complement any spaceand look really good
              doing it
            </p>
          </div>
        </div>
      </section>

      <section className="section-9">
        <h3 className="txt-h3">Lazy About, In social media</h3>
        <div className="whole-sec-9">
          <Slider {...settings2}>
            {mediaProducts.map((product, index) => (
              <div className="each-card" key={index}>
                <img src={product.image} alt={product.name} />
              </div>
            ))}
          </Slider>
        </div>
        <p className="vtg">View the gallery</p>
      </section>
    </>
  );
}

export default HomePage;
