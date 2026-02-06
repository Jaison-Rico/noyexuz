import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

function Register() {
    return(
        <Stack 
            direction="column" 
            justifyContent="space-between"
            sx={{
                height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
                minHeight: '100%',
                padding: { xs: 2, sm: 4 }
            }}
        >
            <Card 
                variant="outlined"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'center',
                    width: '100%',
                    padding: 4,
                    gap: 2,
                    margin: 'auto',
                    maxWidth: { sm: '450px' },
                    boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px'
                }}
            >
                <Typography 
                    component="h1" 
                    variant="h4" 
                    sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                >
                    Sign Up
                </Typography>

                <Box 
                    component="form" 
                    noValidate 
                    sx={{display: 'flex', flexDirection: 'column', width: '100%', gap: 2}}
                >

                    <TextField
                        fullWidth
                        label="Username"
                        name="username"
                        placeholder="johndoe"
                        autoComplete="username"
                        required
                    />

                    <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        placeholder="John Doe"
                        autoComplete="name"
                        required
                    />
                    
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        placeholder="you@email.com"
                        autoComplete="email"
                        required
                        type="email"
                    />
                    
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        placeholder="••••••"
                        type="password"
                        autoComplete="new-password"
                        required
                    />
                    
                    <TextField
                        fullWidth
                        label="Confirm Password"
                        name="confirmPassword"
                        placeholder="••••••"
                        type="password"
                        autoComplete="new-password"
                        required
                    />

                    <Button type="submit" fullWidth variant="contained"> Sign Up </Button>
                </Box>

                <Divider>or</Divider>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography sx={{ textAlign: 'center' }}> Already have an account?{' '}
                        <Link href="/login" variant="body2"> Log In</Link>
                    </Typography>
                </Box>
            </Card>
        </Stack>
    )
}

export default Register