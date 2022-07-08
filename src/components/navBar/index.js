import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from '../logo';
import { Stack } from '@mui/material';
import { ColorModeContext } from '../../context/colorModeContext';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const { mode, toggleColorMode } = React.useContext(ColorModeContext);
	const [isLoged, setLoged] = React.useState(true);
	const { logout, user } = useAuth();
	const navigate = useNavigate()

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleDarkMode = () => {
		toggleColorMode();
	};

	const handleLoged = () => {
		logout();
	};

	const handleHome = () => {
		navigate('/')
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
						<Button color="primary">Fixture</Button>
					</Box>
					<Stack direction={"row"} alignItems="center">
						<Button color="primary">Perfil</Button>
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
