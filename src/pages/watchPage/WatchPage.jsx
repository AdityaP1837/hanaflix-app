import { Button, Tooltip, Typography } from "@mui/material";
import { videoData } from "../../../testData";
import {
	PlayCircleOutline,
	PauseCircleFilledOutlined,
} from "@mui/icons-material";
import "./watch_page.scss";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import useFetchData from "../../utils/useFetchData";

const dateConvert = (date) => {
	const newDate = new Date(date);
	const months = [
		"January",
		"Feburary",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	return `${
		months[newDate.getMonth()]
	} ${newDate.getDate()}, ${newDate.getFullYear()}`;
};

const WatchPage = () => {
	const {slug} = useParams()
	const [isVideo, setIsVideo] = useState(false);
	const [copiedText, setCopiedText] = useState("");

	const handleCopyText = (text) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				setCopiedText(text);
				alert("Text copied to clipboard:", text);
			})
			.catch((error) => {
				console.error("Unable to copy:", error);
			});
	};

	
	const { data, loading, error } = useFetchData(
		`/video?id=${slug}`
	);


	return (
		<div className="watch-page">
			{/* <div className="watch-video">
				<div className="overlay allTransitions">
					{isVideo ? (
						<PauseCircleFilledOutlined className="overlay-control allTransitions" />
					) : (
						<PlayCircleOutline className="overlay-control allTransitions" />
					)}
				</div>
				<div className="video">
					<ReactPlayer
						url={"https://m3u8s.highwinds-cdn.com/api/v9/m3u8s/gjtvcvAxd8gkyc5jh9phnq5hf2Zp06c9lAw1vp715k8pbnbAfwltA.m3u8"}
						controls
						// playIcon={<PlayCircleOutline/>}
						playing={true}
					/>
				</div>
				<div className="thumbnail">
					<img
						src="https://s4.anilist.co/file/anilistcdn/media/manga/banner/85486-4mTRih1qOdgk.jpg"
						alt=""
					/>
				</div>
			</div> */}

			<div className="info-tab">
				<div className="left">
					{/* <img src={videoData.hentai_video.cover_url} alt="" /> */}
					<img
						src={data?.hentai_video?.cover_url}
						alt=""
					/>
				</div>
				<div className="right">
					<div className="title">
						<Typography variant="h4" component={"h4"} gutterBottom>
							{data?.hentai_video?.name}
						</Typography>
					</div>
					<div className="brand">
						<Typography variant="h6" component={"h4"}>
							Brand
						</Typography>
						<Typography variant="h6" component={"h5"}>
							{data?.brand?.title}
						</Typography>
					</div>
					<div className="brand-uploads">
						<Typography variant="h6" component={"h4"}>
							Brand Uploads
						</Typography>
						<Typography variant="h5" component={"h5"}>
							{data?.brand?.count}
						</Typography>
					</div>
					<div className="dates">
						<div className="release-date">
							<Typography variant="h6" component={"h4"}>
								Released Date
							</Typography>
							<Typography variant="h6" component={"h5"}>
								{dateConvert(data?.hentai_video?.released_at)}
							</Typography>
						</div>
						<div className="upload-date">
							<Typography variant="h6" component={"h4"}>
								Upload Date
							</Typography>
							<Typography variant="h6" component={"h5"}>
								{dateConvert(data?.hentai_video?.created_at)}
							</Typography>
						</div>
					</div>
					<div className="is-censored">
						<Button variant="outlined" color="error">
							{data?.hentai_video?.is_censored ? "Censored" : "Uncensored"}
						</Button>
					</div>
					<div className="tags">
						{data?.hentai_tags?.map((tag) => {
							return (
								<Tooltip key={tag.id} title={tag.description}>
									<Button variant="outlined" color="warning">
										{tag.text}
									</Button>
								</Tooltip>
							);
						})}
					</div>
				</div>
			</div>
			<hr className="line" />
			<div className="main-tab">
				<div className=""></div>
				<div className="download-tab">
					<Typography variant="h5" component={"h5"} gutterBottom>
						Download Links:
					</Typography>
					<Typography variant="body1" component={"p"}>
						copy and paste the link in ADM, 1DM, or other download manager.
					</Typography>

					<div className="dl-links">
						{data?.videos_manifest?.servers[0]?.streams?.map((stream) => {
							if (stream.height === "1080") {
								return;
							}
							return (
								<div className="dl-links-btn" key={stream.id}>
									<Button
										variant="outlined"
										color="inherit"
										style={{ textTransform: "lowercase" }}
										onClick={() => handleCopyText(stream.url)}
									>
										{stream.height}p
									</Button>
									<Typography variant="caption" component={"span"}>
										{stream.filesize_mbs} mb
									</Typography>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
// https://s4.anilist.co/file/anilistcdn/media/manga/banner/85486-4mTRih1qOdgk.jpg

export default WatchPage;
