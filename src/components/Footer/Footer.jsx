import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MapIcon from "@mui/icons-material/Map";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import pinterest from "../../assets/pinterest.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <Box bgcolor="primary.secondary" pb={3} pt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Logo and Social Media Icons */}
          <Grid item xs={12} md={4.5}>
            <Box mb={2} bgcolor="white" borderRadius={2} padding={1} width={135}>
              <Box component="img" src={logo} alt="Hospital Logo" height={50} />
            </Box>
            <Stack direction="row" spacing={1.5}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Box component="img" src={fb} height={36} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <Box component="img" src={twitter} height={36} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <Box component="img" src={yt} height={36} />
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                <Box component="img" src={pinterest} height={36} />
              </a>
            </Stack>
          </Grid>

          {/* Footer Links - About Us, Gallery, etc. */}
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>

          {/* Footer Links - Medical Specialties */}
          <Grid item xs={12} md={2.5}>
            <Stack spacing={2}>
              <FooterLink>Orthology</FooterLink>
              <FooterLink>Neurology</FooterLink>
              <FooterLink>Opthalmology</FooterLink>
              <FooterLink>Cardiology</FooterLink>
            </Stack>
          </Grid>

          {/* Hospital Name, Address, Contact, and Google Maps Link */}
          <Grid item xs={12} md={3.5}>
            <Stack spacing={2}>
              <Typography color="white" fontWeight={500} fontSize={16}>
                Contact Information
              </Typography>

              <Stack direction="row" alignItems="center" spacing={1}>
                <LocalHospitalIcon fontSize="small" style={{ color: 'white' }} />
                <Typography color="white" fontSize={14}>
                  K B Memorial Hospital
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <LocationOnIcon fontSize="small" style={{ color: 'white' }} />
                <Typography color="white" fontSize={14}>
                  Baheri, Darbhanga, near SBI bank
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
  <PhoneIcon fontSize="small" style={{ color: 'white' }} />
  <Typography color="white" fontSize={14}>
    <a 
      href="tel:+916272319103" // Use tel: scheme for click-to-call
      style={{ color: 'white', textDecoration: 'none' }} // Style the phone number link
    >
      Phone: 06272319103
    </a>
  </Typography>
</Stack>


              <Stack direction="row" alignItems="center" spacing={1}>
                <EmailIcon fontSize="small" style={{ color: 'white' }} />
                <Typography color="white" fontSize={14}>
                  Email: info@kbmemorialhospital.com
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <MapIcon fontSize="small" style={{ color: 'white' }} />
                <Typography color="white" fontSize={14}>
                  <a 
                    href="https://www.google.com/maps/place/KB+MEMORIAL+HOSPITAL/@25.9440369,86.0404781,17z/data=!3m1!4b1!4m6!3m5!1s0x39ede900399bef93:0x7bc07d634d931463!8m2!3d25.9440369!4d86.043053!16s%2Fg%2F11lnmx7w07?entry=ttu&g_ep=EgoyMDI0MDkyMy4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'underline' }} // Style the link
                  >
                    View on Google Maps
                  </a>
                </Typography>
              </Stack>

            </Stack>
          </Grid>
        </Grid>

        <Typography
          fontWeight={300}
          color="#fff"
          fontSize={14}
          pt={3}
          mt={5}
          borderTop="1px solid rgba(255,255,255,0.1)"
          textAlign="center"
        >
          Copyright ©2024 K B Memorial Hospital. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
