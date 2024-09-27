import { useState } from 'react';
import { Box, Button, Snackbar, Stack, TextField, Typography } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import emailjs from 'emailjs-com';  // Import emailjs

export default function MessageForm() {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        contact: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        contact: '',
        message: ''
    });

    // Validation functions
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateContact = (contact) => {
        const contactRegex = /^\d{10}$/;  // Assuming a 10-digit contact number
        return contactRegex.test(contact);
    };

    const validateName = (name) => {
        return name.trim() !== '';  // Name should not be empty
    };

    const validateMessage = (message) => {
        return message.trim() !== '';  // Message should not be empty
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validate form
        let valid = true;
        let emailError = '';
        let contactError = '';
        let nameError = '';
        let messageError = '';

        if (!validateEmail(formData.email)) {
            emailError = 'Invalid email format';
            valid = false;
        }

        if (!validateContact(formData.contact)) {
            contactError = 'Contact number must be 10 digits';
            valid = false;
        }

        if (!validateName(formData.name)) {
            nameError = 'Name is required';
            valid = false;
        }

        if (!validateMessage(formData.message)) {
            messageError = 'Message is required';
            valid = false;
        }

        setErrors({
            email: emailError,
            contact: contactError,
            name: nameError,
            message: messageError
        });

        if (!valid) {
            return; // Exit if the form is not valid
        }

        // Send email using EmailJS
        emailjs.send(
            'service_c9lpljh',        // Replace with your service ID
            'template_1usu63m',       // Replace with your template ID
            {
                to_name: formData.name,
                from_name: formData.email,
                message: formData.message,
                contact_number: formData.contact,  // Sending contact number
                to_email: 'amitanand1212@gmail.com'  // Specify the recipient
            },
            'KxkthPYGB7Ve9kFNx'        // Replace with your public user ID
        ).then(() => {
            setOpen(true);
            setFormData({ name: '', email: '', message: '', contact: '' }); // Clear form
        }).catch((error) => {
            console.error('Failed to send email:', error);
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    // Check if the button should be enabled
    const isButtonDisabled = !validateEmail(formData.email) ||
                             !validateContact(formData.contact) ||
                             !validateName(formData.name) ||
                             !validateMessage(formData.message);

    return (
        <Box 
            border="1px solid rgba(0,0,0,0.1)" 
            borderRadius={2} 
            p={2} 
            width="80%" 
            m="0 auto" 
            component="form"
            onSubmit={handleSubmit}
        >
            <Typography color="#77829D" fontWeight={500} mb={1} fontSize={{ xs: 14, md: 18 }}>
                Send us a message
            </Typography>
            <Stack spacing={2} mb={2}>
                <TextField
                    variant="outlined"
                    label="Your Name"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    InputLabelProps={{ style: { color: '#77829D' } }}
                />
                <TextField
                    variant="outlined"
                    label="Your Email"
                    type="email"
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    InputLabelProps={{ style: { color: '#77829D' } }}
                />
                <TextField
                    variant="outlined"
                    label="Contact Number"
                    fullWidth
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    error={!!errors.contact}
                    helperText={errors.contact}
                    InputLabelProps={{ style: { color: '#77829D' } }}
                />
                <TextField
                    variant="outlined"
                    label="Your Message"
                    multiline
                    rows={4}
                    fullWidth
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    InputLabelProps={{ style: { color: '#77829D' } }}
                />
            </Stack>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ bgcolor: '#1B3C74', color: 'white', '&:hover': { bgcolor: '#0F2557' } }}
                type="submit"
                disabled={isButtonDisabled}  // Disable the button if the form is invalid
            >
                Send Message
            </Button>

            {/* Snackbar for success message */}
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Message sent successfully!
                </MuiAlert>
            </Snackbar>
        </Box>
    );
}
