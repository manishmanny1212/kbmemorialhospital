import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';

// Import your images here
import img1 from '../../../assets/photo1.jpeg';
import img2 from '../../../assets/photo2.jpeg';
import img3 from '../../../assets/photo3.jpeg';
import img4 from '../../../assets/photo4.jpeg';

export default function PhotoGallery() {
    const gallery_images = [
        { img: img1, alt: 'Gallery Image 1' },
        { img: img2, alt: 'Gallery Image 2' },
        { img: img3, alt: 'Gallery Image 3' },
        { img: img4, alt: 'Gallery Image 4' },
        { img: img1, alt: 'Gallery Image 1' },
        { img: img2, alt: 'Gallery Image 2' },
        { img: img3, alt: 'Gallery Image 3' },
        { img: img4, alt: 'Gallery Image 4' }
    ];

    return (
        <div style={{ margin: "auto", maxWidth: "1200px" }}>
            <Box py={4} id="photo-gallery">
                <Typography variant="h2" textAlign='center' mb={3} px={2}>
                    Our Photo Gallery
                </Typography>
                <Swiper
                    slidesPerView={4.5}  // Set to 4.5 to show 4 full images and 1 half image
                    spaceBetween={20}
                    loop={true}
                    centeredSlides={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        767: {
                            slidesPerView: 4.5 // Maintain the same on larger screens
                        }
                    }}
                >
                    {gallery_images.map((image, index) => (
                        <SwiperSlide
                            key={index}
                        >
                            <Box 
                                component="img" 
                                src={image.img} 
                                alt={image.alt} 
                                width="100%" 
                                height="auto" // Maintain aspect ratio
                                style={{ 
                                    objectFit: 'cover', 
                                    borderRadius: '8px' 
                                }} // Ensures full visibility
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </div>
    );
}
