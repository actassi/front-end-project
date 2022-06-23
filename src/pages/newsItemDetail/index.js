import { Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import useNews from "../../hooks/useNews"
import { ContainerBanner, TextBanner } from "../../styledComponents/Banner"

export default function NewsItemDetail() {

	const { id } = useParams()
	const { newsItemDetail, loading } = useNews(id)

	return (
		loading ? <>cargando...</> :
			<ContainerBanner>
				<div style={{ overflow: "hidden", height: "750px", width: "100%", marginTop: "-5%" }}>
					<img width="100%" src={"/" + newsItemDetail.imgFull} alt="news" />
					<TextBanner top="15%" sx={{
						"textShadow": "-1px 1px 0 #000, 1px 1px 0 #000,1px -1px 0 #000,-1px -1px 0 #000"
					}}
						variant="h1" fontWeight="bold">{newsItemDetail.title}</TextBanner>
				</div>
			</ContainerBanner>
	)
}
