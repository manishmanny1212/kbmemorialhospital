import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from '../../../assets/faqs-banner.jpg'
import CustomizedAccordions from "../../Accordion/Accordion";

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
    )
}