import { useState } from 'react';
import { Box, Button, Snackbar, Stack, TextField, Typography } from "@mui/material";
import MuiAlert from '@mui/material/Alert';

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const [open, setOpen] = useState(false);

    // Validation functions
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6; // Password must be at least 6 characters
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validate form
        let valid = true;
        let emailError = '';
        let passwordError = '';

        if (!validateEmail(formData.email)) {
            emailError = 'Invalid email format';
            valid = false;
        }

        if (!validatePassword(formData.password)) {
            passwordError = 'Password must be at least 6 characters';
            valid = false;
        }

        setErrors({
            email: emailError,
            password: passwordError
        });

        if (!valid) {
            return; // Exit if the form is not valid
        }

        // Mock login success message
        setOpen(true);
        setFormData({ email: '', password: '' }); // Clear form
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
    const isButtonDisabled = !validateEmail(formData.email) || !validatePassword(formData.password);

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
                Login to Your Account
            </Typography>
            <Stack spacing={2} mb={2}>
                <TextField
                    variant="outlined"
                    label="Email"
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
                    label="Password"
                    type="password"
                    fullWidth
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors.password}
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
                Login
            </Button>

            {/* Snackbar for success message */}
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Logged in successfully!
                </MuiAlert>
            </Snackbar>
        </Box>
    );
}
