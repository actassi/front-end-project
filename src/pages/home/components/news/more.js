import { Divider, Grid, Box } from '@mui/material'
import { Title } from '../../../../styledComponents/fifaTypography'
import CardArticle from './cardArticle'

export default function More({ moreNews }) {

	return (
		<Box my={4}>
			<Title variant="h6">MÁS</Title>
			<Divider />
			<Grid mt={2} container spacing={3}>
				{moreNews.map((item, i) =>
					<Grid key={i} item md={6} >

						<CardArticle item={item} size="small" />

					</Grid>)
				}

			</Grid>
		</Box >
	)
}