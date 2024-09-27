import { useState } from 'react';
import { Box, Button, Snackbar, Stack, TextField, Typography } from "@mui/material";
import MuiAlert from '@mui/material/Alert';

export default function SignupForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
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

    const validateName = (name) => {
        return name.trim() !== '';  // Name should not be empty
    };

    const validateConfirmPassword = (password, confirmPassword) => {
        return password === confirmPassword; // Check if passwords match
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validate form
        let valid = true;
        let emailError = '';
        let passwordError = '';
        let confirmPasswordError = '';
        let nameError = '';

        if (!validateEmail(formData.email)) {
            emailError = 'Invalid email format';
            valid = false;
        }

        if (!validatePassword(formData.password)) {
            passwordError = 'Password must be at least 6 characters';
            valid = false;
        }

        if (!validateConfirmPassword(formData.password, formData.confirmPassword)) {
            confirmPasswordError = 'Passwords do not match';
            valid = false;
        }

        if (!validateName(formData.name)) {
            nameError = 'Name is required';
            valid = false;
        }

        setErrors({
            email: emailError,
            password: passwordError,
            confirmPassword: confirmPasswordError,
            name: nameError
        });

        if (!valid) {
            return; // Exit if the form is not valid
        }

        // Simulate successful signup
        setOpen(true);
        setFormData({ name: '', email: '', password: '', confirmPassword: '' }); // Clear form
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
                             !validatePassword(formData.password) ||
                             !validateConfirmPassword(formData.password, formData.confirmPassword) ||
                             !validateName(formData.name);

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
                Create an Account
            </Typography>
            <Stack spacing={2} mb={2}>
                <TextField
                    variant="outlined"
                    label="Name"
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
                <TextField
                    variant="outlined"
                    label="Confirm Password"
                    type="password"
                    fullWidth
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
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
                Sign Up
            </Button>

            {/* Snackbar for success message */}
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Signup successful!
                </MuiAlert>
            </Snackbar>
        </Box>
    );
}
