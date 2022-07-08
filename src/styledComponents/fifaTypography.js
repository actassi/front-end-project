import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

export const Title = styled(Typography)(props => ({
	fontWeight: "bold",
	color: props.theme.palette.text.primary
}));


export const SubTitle = styled(Typography)(props => ({
	variant: "subtitle1",


	color: props.theme.palette.text.primary
}));

export const Body = styled(Typography)(props => ({
	fontSize: "1.2rem",
	variant: "body1",
	color: props.theme.palette.text.primary
}));

