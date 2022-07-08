import { Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import { Title } from "../../../../styledComponents/fifaTypography";
import FormatDate from "../../../../utils/formatDate";

export default function CardArticle({ item, size }) {

	const defaultSrcImg = ""
	let srcImg = "";

	if (size === "small") {
		srcImg = item.imgSmall ? item.imgSmall : defaultSrcImg
	}
	if (size === "medium") {
		srcImg = item.imgMedium ? item.imgMedium : defaultSrcImg
	}

	if (size === "large") {
		srcImg = item.imgLarge ? item.imgLarge : defaultSrcImg
	}

	return (
		<Link style={{ color: "inherit", textDecoration: "none" }} to={"/newsItemDetail/" + item.id}>
			<Stack direction={size === "small" ? "row" : "column"}
				spacing={2}
				height="100%"
				justifyContent="flex-start"
				alignContent="center"
			>
				<div>
					<img style={{ borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }} src={srcImg} alt={item.title} />
				</div>
				<Stack spacing={2} pr={4} height="100%" direction="column" justifyContent="space-between">
					<Box>
						<Typography variant="subtitle2" color="GrayText">Copa Mundial de la FIFA Catar 2022™</Typography>
						<Title variant={size === "small" ? "subtitle1" : "h6"}
							sx={{
								display: "-webkit-box",
								WebkitLineClamp: 3,
								WebkitBoxOrient: "vertical",
								overflow: 'hidden'
							}}>{item.title}
						</Title>
					</Box>
					<Typography color="text.primary" variant="subtitle2">
						{size === "small" ? "" :
							<FormatDate date={item.date.toDate()} />
						}
					</Typography>
				</Stack>

			</Stack >
		</Link>
	)
}