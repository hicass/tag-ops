import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import discovery1 from '../../assets/images/flow-carousel/discovery-1.png';
import scope2 from '../../assets/images/flow-carousel/scope-2.png';
import kickoff3 from '../../assets/images/flow-carousel/kickoff-3.png';
import scopeInProgress4 from '../../assets/images/flow-carousel/sip-4.png';
import quarterlyReview5 from '../../assets/images/flow-carousel/quarterly-review-5.png';
import decision6 from '../../assets/images/flow-carousel/decision-6.png';
import ifYes from '../../assets/images/flow-carousel/if-yes.png';
import ifNo from '../../assets/images/flow-carousel/if-no.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './FlowCarousel.css';

export default function FlowCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="flow-swiper"
        effect={'coverflow'}
        spaceBetween={30}
        grabCursor={true}
        style={{
          '--swiper-navigation-color': '#5E17EB',
          '--swiper-pagination-color': '#5E17EB',
        }}
      >
        <SwiperSlide>
          <img className="flow-card" src={discovery1} alt="Discovery 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="flow-card" src={scope2} alt="Scope 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            id="large-flow-card"
            className="flow-card"
            src={kickoff3}
            alt="Kickoff 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="flow-card"
            src={scopeInProgress4}
            alt="Scope In Progress 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            id="large-flow-card"
            className="flow-card"
            src={quarterlyReview5}
            alt="Quarterly Review 5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="flow-card" src={decision6} alt="Decision 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="flow-card" src={ifYes} alt="If Yes" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="flow-card" src={ifNo} alt="If No" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
