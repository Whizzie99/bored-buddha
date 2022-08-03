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

const MindMap = () => {
  return (
    <StyledWrapper>
      <Container>
        <div className="section-header">
          <h3>bored buddha club</h3>
          <h2>mindmap &amp; utility</h2>
        </div>
        <p className="section-description">
          Not just another “Bored” NFT community. Bored Buddha Club is a
          collection of 8888 lucky PFP Buddhas with the main purpose of
          spreading zen, wellness, peace &amp; prosperity. Holders will be
          blessed with exclusive access into the Golden Temple, which will
          provide IRL wellness benefits, exclusive high quality streetwear,
          exclusive members only events, and all the WEB3 utilities that you see
          in day to day Metaverse/NFT space.
        </p>
        <StyledUtilites>
          <h3>here are some utilities</h3>
          <StyledUtlityCarousel>
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
        </StyledUtilites>
      </Container>
      <div className="ellipse-blur blur-1">
        <img src={ellipseBlur} alt="" />
      </div>
      <div className="ellipse-blur blur-2">
        <img src={ellipseBlur2} alt="" />
      </div>
      <div className="blur-box"></div>
    </StyledWrapper>
  );
};

export default MindMap;
