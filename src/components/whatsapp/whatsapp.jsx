import { Box, IconButton, Tooltip } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppContact() {
    const phoneNumber = '911234567890'; // Replace with your actual phone number

    // Function to handle WhatsApp click
    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${7070304970}`;
        window.open(url, '_blank'); // Open the WhatsApp chat in a new tab
    };

    return (
        <Box textAlign="center" mt={2}>
            <Tooltip title="Contact us on WhatsApp">
                <IconButton 
                    onClick={handleWhatsAppClick} 
                    color="success" 
                    sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#1ebe5d' } }}
                >
                    <WhatsAppIcon sx={{ fontSize: 30, color: 'white' }} />
                </IconButton>
            </Tooltip>
        </Box>
    );
}
