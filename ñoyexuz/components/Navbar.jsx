import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* logo y titulo aqui */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> ñoyexuz </Typography>

        {/* botones extra de pestañas, el component={Link} hace que la pagina no se recargue */}
        <Box>
          <Button color="inherit" component={Link} to="/"> Home </Button>

          <Button color="inherit" component={Link} to="/about"> About </Button>

          <Button color="inherit"  sx={{ mr: 0.8 }} component={Link} to="/support"> Support </Button>
          

          <Button color="inherit" sx={{ mr: 1.5 }} variant="outlined" component={Link} to="/login"> Login </Button>
          

          <Button color="inherit" variant="outlined" component={Link} to="/register"> Register </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
