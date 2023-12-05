import { Card, CardContent, CardMedia, Chip, Container, Grid, Typography } from "@mui/material";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/base/MenuItem";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import CardComp from "../../components/card/CardComp";
import "./trending.scss";
import useFetchData from "../../utils/useFetchData";
// import PaginationComp from "../../components/pagination/PaginationComp";
import { trendingData } from "../../../testData";

const trendingTime = ["daily", "weekly", "monthly", "yearly"];
const aloo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Listbox = styled("ul")(
	({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 150px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: #99b8ff;
    border: 1px solid #000;
    color: #00081a;
    z-index: 1;
    `
);

const Trending = () => {
	const { time, page } = useParams();
	const [activeTime, setActiveTime] = useState(time);
	const [activePage, setActivePage] = useState(page);
	const navigate = useNavigate();

	const { data, loading, error } = useFetchData(
		`browse-trending?time=${time}&page=${page}&order_by=views&ordering=desc`
	);

	const handlePageChange = () => {
		setActivePage(page + 1);
		// navigate(`/trending/${time}/${page}`)
	};

	return (
		<div className="trending">
			<div className="t-options">
				<Dropdown>
					<Typography variant="h7" className="t-options-title">
						Trending{" "}
						<MenuButton className="dropdown-btn">{activeTime}</MenuButton>
					</Typography>
					<Menu className="dropdown-list" slots={{ listbox: Listbox }}>
						{trendingTime.map((time) => (
							<MenuItem
								className="dropdown-item"
								key={time}
								onClick={() => setActiveTime(time)}
							>
								{time}
							</MenuItem>
						))}
					</Menu>
				</Dropdown>
			</div>
			<div className="t-content">
				<Container className="t-content-container" maxWidth={"xl"}>
					<Grid
						container
						spacing={{ xs: 2, sm: 4, md: 8, lg: 5 }}
						justifyContent={"center"}
					>
						{data?.hentai_videos?.map((video) => (
							<Grid
								item
								key={video.id}
								xs={6}
								sm={4}
								md={3}
								lg={2}
								className="t-content-items"
							>
								<Card className="trending-card">
									<CardMedia
										className="t-card-img"
										component={"img"}
										image={video.cover_url}
									/>
									<Link to={`/watch/${video.slug}`}>
										<div className="t-card-info">
											<h4>
												{video.name}
											</h4>
										</div>
									</Link>
								</Card>
							</Grid>
						))}
					</Grid>

					{/* <PaginationComp totalPage={10} page={Number(page)} handlePageChange={handlePageChange}/> */}
				</Container>
			</div>
		</div>
	);
};

export default Trending;
