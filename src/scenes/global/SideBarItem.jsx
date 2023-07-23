import { Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';

const SideBarItem = ({ title, to, icon, selected, setSelected }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<MenuItem
			active={selected === title}
			style={{ color: colors.grey[100] }}
			icon={icon}
			onClick={() => setSelected(title)}
		>
			<Typography>{title}</Typography>
			<Link to={to} />
		</MenuItem>
	);
};

SideBarItem.propTypes = {
	title: PropTypes.string,
	to: PropTypes.string,
	icon: PropTypes.any,
	selected: PropTypes.string,
	setSelected: PropTypes.func,
};

export default SideBarItem;
