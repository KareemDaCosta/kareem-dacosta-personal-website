import "./Home.css";
import profilePic from "../../images/profilePic.jpg";
import HighlightGallery from "../HighlightGallery/HighlightGallery";

export default function Home() {
	return (
		<div className="home">
			<div className="profile-card">
				<div className="profile-card-wrapper">
					<div className="profile-pic-container">
						<img
							className="profile-pic"
							src={profilePic}
							alt="profile-pic"
						/>
					</div>
					<div className="profile-card-text">
						<div className="my-name-wrapper">
							<div className="hello">Hey, I'm</div>
							<div className="name-wrapper">
								<h1 className="my-name">
									Kareem
									<br />
									DaCosta<span>.</span>
								</h1>
								<h1 className="my-name-background">
									Software
									<br />
									Engineer
								</h1>
							</div>
						</div>
						<div className="profile-card-text-blurb">
							A third-year student at Columbia University's School
							of Engineering and Applied Sciences majoring in
							computer science.
						</div>
					</div>
				</div>
			</div>
			<HighlightGallery />
			{/*<TypingEffect />
			<ImageGallery />*/}
		</div>
	);
}
