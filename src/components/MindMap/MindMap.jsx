import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Container from "../shared/Container/Container";
import UtilityCard from "../UtilityCard/UtilityCard";
import { utlities } from "../../data/utilities";
import { StyledWrapper, StyledUtilites, StyledUtlityCarousel } from "./styles";

import "swiper/css";
import "swiper/css/pagination";

import ellipseBlur from "../../assets/images/ellipse-blur.png";
import ellipseBlur2 from "../../assets/images/ellipse-blur-2.png";
import star from "../../assets/images/star-2.png";

const MindMap = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <StyledWrapper id="utilities">
      <Container>
        <div className="section-header">
          <h3 data-aos="fade-up" data-aos-duration="1100">
            bored buddha club
          </h3>
          <h2 data-aos="fade-up" data-aos-duration="1200">
            mindmap &amp; utility
          </h2>
        </div>
        <p
          className="section-description"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Building a lasting social brand that leaves a positive impact on
          peoples lives&apos; is our goal. Your Bored Buddha will be exclusive
          symbols of prosperity, zen, and unity.
        </p>
        <StyledUtilites>
          <p data-aos="fade-up" data-aos-duration="1200">
            On top of our central zen movement, we have plans in line for
            utilities that will benefit all Bored Buddha members. Holding a
            Bored Buddha gives you exclusive access into the Golden Temple.
            These utilities are just the beginning:
          </p>
          <StyledUtlityCarousel data-aos="fade-up" data-aos-duration="1200">
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              breakpoints={{
                600: {
                  slidesPerView: 1,
                },
                768: { slidesPerView: 2 },
                1024: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              {utlities.map((utility) => (
                <SwiperSlide key={utility.title}>
                  <UtilityCard
                    icon={utility.icon}
                    title={utility.title}
                    description={utility.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </StyledUtlityCarousel>
          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            className="description-2"
          >
            All utilities aside, the goal for this club is to lead by example,
            to help pave the way so that every single good act inspires others
            around us to do the same. This is BIGGER than just an NFT/brand
            collection. Bored Buddha Club is FOR the people. This is a long term
            movement, and we hope to build it world wide with you.
          </p>
        </StyledUtilites>
      </Container>
      <div className="ellipse-blur blur-1">
        <img src={ellipseBlur} alt="" />
      </div>
      <div className="ellipse-blur blur-2">
        <img src={ellipseBlur2} alt="" />
      </div>
      <div className="blur-box"></div>
      <img src={star} alt="" className="star" />
      <img src={star} alt="" className="star-2" />
      <img src={star} alt="" className="star-3" />
    </StyledWrapper>
  );
};

export default MindMap;
