import { styled } from '@mui/material/styles';
import { ContainerBanner, TextBanner } from '../../../styledComponents/banner';

export default function Banner() {
	return (
		<ContainerBanner>
			<img src="imgs/Banner.avif" width="100%" alt="banner" />
			<Gradient />
			<TextBanner top="320px" variant="h5" fontWeight="bold">21 de noviembre - 17 de diciembre</TextBanner>
			<TextBanner top="350px" variant="h1" fontWeight="bold">Copa Mundial de la FIFA Catar 2022™</TextBanner>
		</ContainerBanner >
	)
}


const Gradient = styled('div')({
	background: "linear-gradient(180deg, #000f2c 0%, rgba(0, 0, 0, 0) 100%)",
	position: "absolute",
	left: 0,
	bottom: "-1px",
	width: "100%",
	height: "50%",
	transform: "rotate(-180deg)",
});

