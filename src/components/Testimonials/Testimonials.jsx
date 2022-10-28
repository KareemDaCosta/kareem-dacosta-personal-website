import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

import conradRec from "../../documents/testimonials/Dr. Conrad Recommendation.pdf";
import huangRec from "../../documents/testimonials/John Huang Recommendation.pdf";
import conradThumb from "../../images/testimonials/Dr. Conrad Recommendation.png";

export default function Testimonials() {
	const testimonials = [
		{
			name: "John Huang",
			quote: "Kareem could easily outperform many of the full time software engineers on my team.",
			pdf: huangRec,
			pdfThumbnail: conradThumb,
		},
		{
			name: "Dr. Eric Conrad",
			quote: "Simply put: Kareem will make a difference wherever he goes.",
			pdf: conradRec,
			pdfThumbnail: conradThumb,
		},
	];
	return (
		<div className="testimonials">
			{testimonials.map((item, i) => {
				return (
					<div className={"testimonial-card-wrapper"} key={i}>
						<TestimonialCard
							testimonial={item}
							even={i % 2 === 0}
						/>
						{i < testimonials.length - 1 ? (
							<div className="hr" />
						) : (
							""
						)}
					</div>
				);
			})}
		</div>
	);
}
