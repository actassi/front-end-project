import { Button, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import useNews from "../../../../hooks/useNews";
import { SubTitle, Title } from "../../../../styledComponents/fifaTypography";

import CardArticle from "./cardArticle";
import More from "./more";

export default function News() {

	const { news, loading } = useNews()

	return (
		loading ? <></>
			:
			<Container>
				<Grid direction="row" container alignItems="flex-start" spacing={5}>
					<Grid item md={3}>
						<Stack direction="column"
							justifyContent="space-between"
							spacing={3}
							flexWrap="wrap"
						>
							<Title variant="h4">
								NOTICIAS
							</Title>
							<SubTitle>
								Entrevistas, noticias y reportajes de la Copa Mundial de la FIFA Catar 2022™.
							</SubTitle>
							<Button color="primary">Lee todas las noticias de Catar 2022</Button>
						</Stack>
					</Grid>
					<Grid item md={9}>
						<Grid container
							direction="row"
							rowGap={4}
						>
							<Grid item md={6}>
								<CardArticle item={news[0]} size="large" />
							</Grid>
							<Grid item md={6}>
								<CardArticle item={news[1]} size="large" />
							</Grid>
							<Grid item md={4}>
								<CardArticle item={news[2]} size="medium" />
							</Grid>
							<Grid item md={4}>
								<CardArticle item={news[3]} size="medium" />
							</Grid>
							<Grid item md={4}>
								<CardArticle item={news[4]} size="medium" />
							</Grid>
						</Grid>
						<More moreNews={news.slice(5)} />
					</Grid>
				</Grid>
			</Container>

	)
}
