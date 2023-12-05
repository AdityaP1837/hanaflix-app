import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./card.scss";

const temp = {
	id: 3141,
	name: "Tsuma ni Damatte Sokubaikai ni Ikun ja Nakatta 1",
	slug: "tsuma-ni-damatte-sokubaikai-ni-ikun-ja-nakatta-1",
	created_at: "2023-10-15T12:57:17.270Z",
	released_at: "2023-10-05T15:52:21.000Z",
	views: 4175928,
	interests: 101973,
	poster_url:
		"https://akidoo.top/images/posters/tsuma-ni-damatte-sokubaikai-ni-ikun-ja-nakatta-1-pv1.png",
	cover_url:
		"https://akidoo.top/images/covers/tsuma-ni-damatte-sokubaikai-ni-ikun-ja-nakatta-1-cv1.png",
	is_hard_subtitled: true,
	brand: "Antechinus",
	duration_in_ms: 0,
	is_censored: true,
	rating: 0.0,
	likes: 14444,
	dislikes: 335,
	downloads: 141454,
	monthly_rank: 1,
	brand_id: "141",
	is_banned_in: "JP",
	preview_url: null,
	primary_color: null,
	created_at_unix: 1697374637,
	released_at_unix: 1696521141,
};

const tem2 = {
	id: 3141,
	name: "Tsuma ni Damatte Sokubaikai ni Ikun ja Nakatta 1",
	slug: "tsuma-ni-damatte-sokubaikai-ni-ikun-ja-nakatta-1",
	created_at: "2023-10-15T12:57:17.270Z",
	released_at: "2023-10-05T15:52:21.000Z",
	views: 4175928,
	interests: 101973,
	poster_url:
		"https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg",
	cover_url:
		"https://akidoo.top/images/covers/tsuma-ni-damatte-sokubaikai-ni-ikun-ja-nakatta-1-cv1.png",
	is_hard_subtitled: true,
	brand: "Antechinus",
	duration_in_ms: 0,
	is_censored: true,
	rating: 0.0,
	likes: 14444,
	dislikes: 335,
	downloads: 141454,
	monthly_rank: 1,
	brand_id: "141",
	is_banned_in: "JP",
	preview_url: null,
	primary_color: null,
	created_at_unix: 1697374637,
	released_at_unix: 1696521141,
};

const CardComp = ({ maxWidth, imgHeight }) => {
	return (
		<Card className="trending-card" sx={{borderRadius: 3}}>
			<CardMedia
				className="card-img"
				component={"img"}
				image={tem2.poster_url}
			/>
			<CardContent className="card-info">
				<Typography variant="h5" component={"h4"} gutterBottom>
					One Piece
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardComp;
