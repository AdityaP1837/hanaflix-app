import { Box, Button, Typography } from "@mui/material";
import useFetchData from "../../utils/useFetchData";
import './home.scss'
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate()
	return (
		<div className="homepage">
			<Box className="homepage-container">
				<Typography variant="h6" component={'p'} gutterBottom>
					Redirect to Trending Page nothing to see here
				</Typography>
				<Button variant="contained" onClick={() => navigate('/trending/daily/0')} className="homepage-option">Trending Page</Button>
			</Box>
		</div>
	);
};

export default Home;
