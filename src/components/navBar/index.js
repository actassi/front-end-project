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


const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const { mode, toggleColorMode } = React.useContext(ColorModeContext);
	const [isLoged, setLoged] = React.useState(true);
	const { logout, user } = useAuth();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleDarkMode = () => {
		toggleColorMode();
	};

	const handleLoged = () => {
		logout();
	};
	return (
		<AppBar position="absolute" sx={{ bgcolor: "background.default" }}>
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

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							<MenuItem>
								<Typography textAlign="center">Home</Typography>
							</MenuItem>
							<MenuItem>
								<Typography textAlign="center">Fixture</Typography>
							</MenuItem>

						</Menu>
					</Box>

					<Box mr={2} sx={{
						display: { xs: 'flex', md: 'none' },
					}}
					>
						<Logo />
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Button
							onClick={handleCloseNavMenu}
							color="primary"
						>
							Home
						</Button>
						<Button
							onClick={handleCloseNavMenu}
							color="primary"
						>
							Fixture
						</Button>
					</Box>
					<Stack direction={"row"} alignItems="center">
						<Button color="primary">Perfil</Button>
						<Button color="primary">{(isLoged) ? "Cerrar sesión" : "Iniciar sesión"}</Button>
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
