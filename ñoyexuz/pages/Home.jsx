import { Container, Typography, Button } from '@mui/material'

function Home() {
  return (
    <div>
        <Container sx={{textAlign: 'center', marginTop: 4}}>
        <Typography variant="h4" gutterBottom>Bienvenidos</Typography>

        <Button variant="contained">Botón</Button>
        </Container>
    </div>
  )
}

export default Home
