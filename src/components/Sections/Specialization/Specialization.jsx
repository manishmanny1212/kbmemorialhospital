import { useState } from 'react';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import IconCard from '../../IconCard/IconCard';
import icon1 from '../../../assets/Drugstore.png';
import icon2 from '../../../assets/primary-care.png';
import icon3 from '../../../assets/cardiology.png';
import icon4 from '../../../assets/mri.png';
import icon5 from '../../../assets/blood-test.png';
import icon6 from '../../../assets/piscologist.png';
import icon7 from '../../../assets/X-Ray.png';
import icon8 from '../../../assets/surgery.png'; 
import icon9 from '../../../assets/icu.png';
// Add additional icons

export default function Specialization() {
    // Initial cards data
    const initialData = [
        { icon: icon1, title: 'Dentistry' },
        { icon: icon2, title: 'Primary Care' },
        { icon: icon3, title: 'Cardiology' },
        { icon: icon4, title: 'MRI Resonance' },
        { icon: icon5, title: 'Blood Test' },
        { icon: icon6, title: 'Piscologist' },
        { icon: icon1, title: 'Laboratory' },
        { icon: icon7, title: 'X-Ray' }
    ];

    // Full cards data including the additional cards
    const fullData = [
        ...initialData,
        { icon: icon9, title: 'ICU' }, // New card
        { icon: icon8, title: 'Surgery' }, // Another new card
    ];

    // State to manage which set of cards to show
    const [data, setData] = useState(initialData);
    const [showAll, setShowAll] = useState(false);

    // Toggle between showing initial and full set of cards
    const handleViewAll = () => {
        if (showAll) {
            setData(initialData);
        } else {
            setData(fullData);
        }
        setShowAll(!showAll);
    };

    return (
        <Box py={6} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container sx={{ textAlign: 'center' }}>
                <Typography variant="h2" mb={4}>
                    Find by specialization
                </Typography>

                <Grid 
                    container 
                    spacing={{ xs: 1, md: 3 }} 
                    rowSpacing={{ xs: 2 }} 
                    mb={5} 
                    justifyContent={'center'}
                >
                    {data.map(item => (
                        <Grid item xs={12} md={3} key={item.title}>
                            <IconCard img={item.icon} title={item.title} bgColor={'#FFFFFF'} shadow={true} />
                        </Grid>
                    ))}
                </Grid>

                <Button
                    variant="contained"
                    size="large"
                    disableElevation
                    onClick={handleViewAll}
                >
                    {showAll ? 'Show Less' : 'View All'}
                </Button>
            </Container>
        </Box>
    );
}
