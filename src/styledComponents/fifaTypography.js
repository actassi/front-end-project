import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

export const Title = styled(Typography)(props => ({
	fontWeight: "bold",
	color: props.theme.palette.text.primary
}));


export const SubTitle = styled(Typography)(props => ({
	variant: "subtitle1",
	fontWeight: "bold",
	color: props.theme.palette.text.primary
}));

