import { Container, Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { SubTitle, Title } from "../styledComponents/fifaTypography";
import Logo from "./logo";

export default function Footer() {
	const itemsExplorar = [
		"Competiciones",
		"Sobre Nosotros",
		"Fútbol Femenino",
		"Impacto Social",
		"Desarrollo del fútbol",
		"Capacitación Técnica",
		"Legal",
		"Clasificación mundial FIFA/COCA-COLA"
	]

	const itemsVisiteTambien = [
		"Todos los temas y las noticias relacionadas con FIFA",
		"Documentos Oficiales",
		"Trabaja con nosotros",
		"Contacta con la FIFA"
	]
	return (
		<Box pt={5} bgcolor="background.default">
			<Divider color="palette.divider" />
			<Container sx={{ py: 3 }}>
				<Logo />
				<Stack direction="row" spacing={10}>
					<div>

						<Title mb={2} variant="h4">EXPLORAR</Title>
						{itemsExplorar.map(item =>
							<SubTitle mb={1} key={item}>{item}</SubTitle>
						)}
					</div>
					<div>
						<Title mb={2} variant="h4">VISITE TAMBIÉN</Title>
						{itemsVisiteTambien.map(item =>
							<Title mb={1} key={item}>{item}</Title>
						)}
					</div>
				</Stack>
			</Container>
			<Divider />
			<Container sx={{ py: 3 }}>
				<Stack direction="row" spacing={5}>
					<SubTitle >Términos de servicio</SubTitle>
					<SubTitle >Portal de Protección de Datos de la FIFA</SubTitle>
					<SubTitle >Descárgalo</SubTitle>
				</Stack>
				<Title my={1} display="block" variant="caption">Copyright © 1994 - 2022 FIFA. Reservados todos los derechos.</Title>
				<Title display="block" variant="caption">Configuración de cookies</Title>
			</Container>
		</Box>
	)
}
