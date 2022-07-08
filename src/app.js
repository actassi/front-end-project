import { Route, Routes } from "react-router-dom";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { ProtectedRoute } from "./components/protectedRoute";
import { AuthProvider } from "./context/authContext";
import { ColorModeContextProvider } from "./context/colorModeContext";
import Home from "./pages/home";
import { createTheme } from "@mui/material";
import Footer from "./components/footer";
import NewsItemDetail from "./pages/newsItemDetail";
import NavBar from "./components/navBar";


function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#9a0e31',


			},
			secondary: {
				main: '#797979',

			},
		},
	});


	return (
		<ColorModeContextProvider>
			<AuthProvider>
				<NavBar />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route path="/register" element={<Register />} />
					<Route path="/newsItemDetail/:id" element={<NewsItemDetail />} />
				</Routes>

				<Footer />
			</AuthProvider>

		</ColorModeContextProvider>
	);
}

export default App;
