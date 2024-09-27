import { Box, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactCard() {
    return (
        <Box border="1px solid rgba(0,0,0,0.1)" borderRadius={2} p={2} maxWidth={400} m="auto">
            <Typography color="#77829D" fontWeight={500} mb={1} fontSize={{ xs: 14, md: 18 }}>
                Contact Information
            </Typography>
            <Stack spacing={2} mb={2}>
                {/* Address */}
                <Stack direction="row" spacing={1} alignItems="center">
                    <LocationOnIcon sx={{ color: '#1B3C74' }} />
                    <Typography color="#1B3C74" fontSize={{ xs: 12, md: 16 }}>
                        Baheri, Darbhanga, near SBI Bank
                    </Typography>
                </Stack>

                {/* Phone */}
                <Stack direction="row" spacing={1} alignItems="center">
                    <PhoneIcon sx={{ color: '#1B3C74' }} />
                    <Typography color="#1B3C74" fontSize={{ xs: 12, md: 16 }}>
                        Phone: 06272319103
                    </Typography>
                </Stack>

                {/* Email */}
                <Stack direction="row" spacing={1} alignItems="center">
                    <EmailIcon sx={{ color: '#1B3C74' }} />
                    <Typography color="#1B3C74" fontSize={{ xs: 12, md: 16 }}>
                        Email: info@kbmemorialhospital.com
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    );
}
