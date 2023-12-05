import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Grid,
	Typography,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import useFetchData from "../../utils/useFetchData";
import "./browse.scss";
import { Link } from "react-router-dom";

const Browse = () => {
	const { data, loading, error } = useFetchData("browse");
	return (
		<div className="browse">
			<div className="title">
				<h2>Browse Hentai:</h2>
			</div>
			<Box className="browse-tags">
				<Typography variant="h5" component={"h4"} className="tags-title">
					• Categories Tags
				</Typography>
				<div className="tag-content">
					<Grid container spacing={2} className="tag-content-grid">
						{data?.hentai_tags?.map((tag) => (
							<Grid item key={tag.id} xs={12} sm={6} md={4} lg={3}>
								<Card className="browse-card">
									<CardMedia
										className="card-img"
										component={"img"}
										image={tag.wide_image_url}
									/>
									<Link to={'/'}>
										<CardContent className="card-info">
											<Typography variant="h5" component={"h4"} gutterBottom>
												{tag.text}
											</Typography>
											<Typography variant="body2" component={"p"} gutterBottom>
												{tag.description}
											</Typography>
										</CardContent>
										<CardActions className="total-count">
											<MovieIcon />
											<span>{tag.count}</span>
										</CardActions>
									</Link>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			</Box>
			<br />
			<br />
			<Box className="browse-brands">
				<Typography variant="h5" component={"h4"} className="brands-title">
					• Animation Studios Brands
				</Typography>
				<Box component={"div"} className="brands-div">
					{/* {data?.brands?.map((brand) => (
						<Chip
							key={brand.id}
							label={brand.title}
							component="a"
							href="#basic-chip"
							variant="outlined"
							clickable
							className="brands-link"
						/>
					))} */}
				</Box>
			</Box>
		</div>
	);
};

export default Browse;
