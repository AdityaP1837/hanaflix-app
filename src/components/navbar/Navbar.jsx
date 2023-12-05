import { SearchRounded } from "@mui/icons-material";
import { Drawer, Paper, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
	{
		name: "Home",
		url: "/",
	},
	{
		name: "Trending",
		url: "/trending/daily/0",
	},
	{
		name: "Browse",
		url: "/browse",
	},
];

const DrawerBox = ({ drawerOpened, setDrawerOpened }) => {
	return (
		<Drawer
			anchor="top"
			open={drawerOpened}
			onClose={() => setDrawerOpened(!drawerOpened)}
			className="nav-drawer"
		>
			<div className="nav-drawer-container">
				<div className="nav-drawer-links">
					{navLinks.map((link) => (
						<Link to={link.url} key={link.name}>
							<Typography variant="h7" className="nav-options allTransitions">
								{link.name}
							</Typography>
						</Link>
					))}
					<div className="searchbar">
						<input type="text" className="search-box" placeholder="search..." />
						<div>
							<SearchRounded className="search-icon" />
						</div>
					</div>
				</div>
			</div>
		</Drawer>
	);
};

const Navbar = () => {
	const [drawerOpened, setDrawerOpened] = useState(false);

	return (
		<header>
			<Paper elevation={1} className="navbar" square>
				<Link to={'/'}>
				<Typography variant="h5" className="title">
					HanaFlix
				</Typography>
				</Link>
				<div className="nav-links">
					{navLinks.map((link) => (
						<Link to={link.url} key={link.name}>
							<Typography variant="h7" className="nav-options allTransitions">
								{link.name}
							</Typography>
						</Link>
					))}
					<div className="searchbar">
						<input type="text" className="search-box" placeholder="search..." />
						<div>
							<SearchRounded className="search-icon" />
						</div>
					</div>
				</div>
				<div className="nav-toggle" onClick={() => setDrawerOpened(true)}>
					<MenuRoundedIcon className="nav-toggle-icon" />
				</div>
				<DrawerBox
					drawerOpened={drawerOpened}
					setDrawerOpened={setDrawerOpened}
				/>
			</Paper>
		</header>
	);
};

export default Navbar;
