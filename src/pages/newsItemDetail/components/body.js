import Typography from '@mui/material/Typography'
import { Container } from '@mui/system'

export default function Body({ summary, body }) {
	return (
		<Container maxWidth="md">

			{summary?.map((s, index) =>
				<Typography key={index} variant="subtitle1">* {s}</Typography>
			)}

			{body.map((p, index) =>

				<Typography key={index} variant="body1" pt={2}>{p}</Typography>
			)}
		</Container>
	)
}

