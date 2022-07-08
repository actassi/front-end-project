import { Container } from '@mui/system'
import { SubTitle, Body as P } from '../../../styledComponents/fifaTypography'
import Summary from './summary'

export default function Body({ summary, body }) {
	return (
		<Container maxWidth="md">

			<Summary items={summary} />

			{body.map((p, index) =>

				<P key={index} variant="body1" pt={2}>{p}</P>
			)}
		</Container>
	)
}

