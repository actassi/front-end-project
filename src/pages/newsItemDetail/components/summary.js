
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CircleIcon from '@mui/icons-material/Circle';

export default function Summary({ items }) {
	return (
		<List sx={{ width: '100%' }}>
			{items?.map((text, index) =>
				<ListItem key={index} >
					<ListItemIcon>
						<CircleIcon color='primary' fontSize='small' />
					</ListItemIcon>
					<ListItemText
						primaryTypographyProps={{
							fontSize: "1.2rem",
							fontWeight: "bold",
							color: "text.primary"
						}}
						primary={text} />
					{/* <SubTitle key={index}><CircleIcon color='primary' fontSize='small' /> {text}</SubTitle> */}
				</ListItem>
			)}
		</List>
	);
}
