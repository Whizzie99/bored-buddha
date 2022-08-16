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
          slidesPerView={2.5}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              // spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
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
          Bored Buddha Club is a collection of 8888 lucky PFP Buddhas&apos;
          spreading peace &amp; prosperity. Living on the Ethereum blockchain,
          all Bored Buddha members will have exclusive access to the Golden
          Temple, which provides members with benefits both IRL &amp; WEB3. Step
          foot inside the the Golden Temple at BoredBuddhaClub.com. Join the
          movement, and let&apos;s change some lives forever.
        </p>
        <div className="mint-now" data-aos="fade-up" data-aos-duration="1200">
          <Link to="#">mint now</Link>
        </div>
      </StyledContentBox>
    </StyledWrapper>
  );
};

export default About;
