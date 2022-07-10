import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Logo from '../logo';
import { Stack } from '@mui/material';
import { ColorModeContext } from '../../context/colorModeContext';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
	const { mode, toggleColorMode } = React.useContext(ColorModeContext);
	const [isLoged] = React.useState(true);
	const { logout, user } = useAuth();
	const navigate = useNavigate()

	const handleDarkMode = () => {
		toggleColorMode();
	};

	const handleLoged = () => {
		logout();
	};

	const handleHome = () => {
		navigate('/')
	}
	const handleFixture = () => {
		navigate('/fixture')
	}
	return (
		(user) && <AppBar position="absolute" sx={{ bgcolor: "background.default" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>

					<Box noWrap
						component="a"
						sx={{

							display: { xs: 'none', md: 'flex' }
						}}
					>
						<Logo />
					</Box>

					<Box mr={2} sx={{
						display: { xs: 'flex', md: 'none' },
					}}
					>
						<Logo />
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Button onClick={handleHome} color="primary">Home</Button>
						<Button onClick={handleFixture} color="primary">Fixture</Button>
					</Box>
					<Stack direction={"row"} alignItems="center">

						<Button onClick={handleLoged} color="primary">{(isLoged) ? "Cerrar sesión" : "Iniciar sesión"}</Button>
						<Button onClick={handleDarkMode} color="primary">
							{(mode === 'light') ? "Dark Mode" : "Light Mode"}
						</Button>

						<Avatar sx={{ ml: 5 }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
					</Stack>

				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
