import GeographyChart from '../../components/GeographyChart';
import Header from '../../components/Header';
import { Box } from '@mui/material';

const Geography = () => {
	return (
		<Box m='20px'>
			<Header
				title='Geography Chart'
				subtitle='Simple Geography Chart'
			/>

			<Box height='75vh'>
				<GeographyChart />
			</Box>
		</Box>
	);
};

export default Geography;
