import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from '../../../assets/faqs-banner.jpg';
import CustomizedAccordions from "../../Accordion/Accordion";
import WhatsAppContact from "../../whatsapp/whatsapp";

export default function FAQs() {
    const faqs = [
        {
            question: 'Why choose our medical for your family?',
            answer: 'We provide expert care, 24/7 access, and personalized treatment for every member of your family.'
        },
        {
            question: 'Why we are different from others?',
            answer: 'Our focus is on compassionate, patient-centered care with a commitment to cutting-edge technology and convenience.'
        },
        {
            question: 'Trusted & experience senior care & love',
            answer: 'With years of experience, we provide trusted, compassionate care for seniors, ensuring their well-being and dignity.'
        },
        {
            question: 'How to get appointment for emergency cases?',
            answer: 'For emergency cases, simply call our hotline or book online for immediate assistance and priority care.'
        }
    ];

    return (
        <Box py={4}>
            <Container maxWidth='xl'>
                {/* FAQ Box Design */}
                <Box 
                    mb={4} 
                    p={3} 
                    textAlign='center' 
                    sx={{
                        backgroundColor: '#e0f7fa',
                        borderRadius: 2,
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <Typography color='primary.main' fontWeight={600} mb={1}>
                        Need Help?
                    </Typography>
                    <Typography variant="h5" fontWeight={500}>
                        Find Your Answers Below!
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        If you don't find what you're looking for, feel free to contact us.
                    </Typography>
                    <WhatsAppContact></WhatsAppContact>
                </Box>

                <Typography color='primary.main' fontWeight={600} textAlign='center'>
                    Get Your Answer
                </Typography>
                <Typography textAlign='center' variant='h2' mb={2}>
                    Frequently Asked Questions
                </Typography>

                <Grid container alignItems='center' spacing={5}>
                    <Grid item xs={12} md={6}>
                        <Box
                            src={faqBanner}
                            component='img'
                            width={1}
                            height='auto'
                            sx={{ borderRadius: 2, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }} // Added styling to the image
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box maxWidth={450}>
                            <CustomizedAccordions data={faqs} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
