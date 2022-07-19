import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Container from "../shared/Container/Container";
import UtilityCard from "../UtilityCard/UtilityCard";
import { utlities } from "../../data/data";
import { StyledWrapper, StyledUtilites, StyledUtlityCarousel } from "./styles";

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
              modules={[Pagination]}
              pagination={{
                clickable: true,
              }}
              slidesPerView={3}
              spaceBetween={20}
              loop={true}
            >
              {utlities.map((utility, index) => (
                <SwiperSlide key={index}>
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
    </StyledWrapper>
  );
};

export default MindMap;
