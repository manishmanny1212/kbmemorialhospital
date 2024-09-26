import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import img1 from '../../../assets/lesley.png';
import img2 from '../../../assets/ahmad.png';
import img3 from '../../../assets/heena.png';
import img4 from '../../../assets/ankur.png';
import img5 from '../../../assets/ahmad-stevens.png';
import SpecialistCard from './SpecialistCard';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Specialists() {
    const specialist_data = [
        {
            img: img4,
            title: 'Dr. Prabhat Gupta',
            designation: 'M.B.B.S (F.Ship), Cardiology, General Physician, Reg. Number - 56063'
        },
        {
            img: img3,
            title: 'Dr. Akanksha Priya',
            designation: 'Specialist in Bone and Nerve Disorders'
        },
        {
            img: img4,
            title: 'Dr. Ikramul Huk',
            designation: 'M.B.B.S, MD, Medicine, Reg. Number - 33772'
        },
        {
            img: img4,
            title: 'Dr. Ravindra Kr. Gupta',
            designation: 'M.B.B.S, MD, Medicine, Reg. Number - 33772'
        },
        {
            img: img4,
            title: 'Dr. Sonu Kumari',
            designation: 'Specialist in Women and Obstetric Disorders'
        },
        {
            img: img4,
            title: 'Dr. Jiyaul Hoda Saan',
            designation: 'Specialist in Bone and Nerve Disorders'
        },
        {
            img: img4,
            title: 'Dr. Gunjan Beloriya',
            designation: ' Specialist in Genital, Leprosy, and Skin Disease'
        }
    ];
    

    return (
        <Box py={4} id="find-doctors">
            <Typography variant="h2" textAlign="center" mb={3} px={2}>
                Our Medical Specialists
            </Typography>
            <Swiper
                slidesPerView={2} // Mobile view as default
                spaceBetween={20} // Adjust space between slides
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    // Desktop view with 3.5 slides visible
                    767: {
                        slidesPerView: 2.5, // Display 3 full slides and a partial 4th slide
                        spaceBetween: 20, // Adjust space as per your design
                    },
                }}
            >
                {specialist_data.map((doc, index) => (
                    <SwiperSlide key={index}>
                        <SpecialistCard
                            img={doc.img}
                            title={doc.title}
                            designation={doc.designation}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
