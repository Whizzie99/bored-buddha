import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { nftImages } from "../../data/nfts";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { StyledWrapper, StyledCarousel, StyledContentBox } from "./styles";

const About = () => {
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
    <StyledWrapper id="about">
      <h2 className="section-title" data-aos="fade-up" data-aos-duration="1100">
        about bored buddha
      </h2>
      <StyledCarousel>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {nftImages.map((nft, index) => (
            <SwiperSlide key={index}>
              <div className="img-card">
                <img src={nft} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledCarousel>
      <StyledContentBox>
        <p data-aos="fade-up" data-aos-duration="1200">
          Bored Buddha Club is collection of 8888 lucky PFP Buddhas’ spreading
          peace &amp; prosperity across the stars. All members will have
          exclusive access to the Golden Temple, which provides holders with
          community, fine art, wellness, high quality streetwear, and exclusive
          benefits in real life as well as within the Metaverse to come.
        </p>
        <div className="mint-now" data-aos="fade-up" data-aos-duration="1200">
          <Link to="#">mint now</Link>
        </div>
      </StyledContentBox>
    </StyledWrapper>
  );
};

export default About;
