import { Box, Container } from "@mui/material";
import { Autoplay, Pagination } from 'swiper/modules'; // Import Autoplay
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import offer1 from '../../../assets/offer1.png';
import offer2 from '../../../assets/offer2.png';

export default function Offers() {
    return (
        <Box py={6}>
            <Container maxWidth='xl'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    modules={[Autoplay, Pagination]} // Add Autoplay module
                    autoplay={{
                        delay: 3000, // 3-second delay between slides
                        disableOnInteraction: false // Keep autoplay active even after user interaction
                    }}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        767: {
                            slidesPerView: 3
                        }
                    }}
                >
                    <SwiperSlide>
                        <Box component={'img'} src={offer1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer2} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer2} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <Box component={'img'} src={offer2} />
                    </SwiperSlide>

                </Swiper>
            </Container>
        </Box>
    )
}
