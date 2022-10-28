import "./TestimonialCard.css";

export default function TestimonialCard({ testimonial, even }) {
	const testimonialBlurb = (
		<div className="testimonial">
			<h1 className="testimonial-name">{testimonial.name}</h1>
			<div className="testimonial-quote">{`\"${testimonial.quote}\"`}</div>
		</div>
	);

	const testimonialImg = (
		<a href={testimonial.pdf} target="_blank" className="testimonial-link">
			<div className="testimonial-thumbnail-wrapper">
				<img
					className="testimonial-thumbnail"
					src={testimonial.pdfThumbnail}
					alt={testimonial.name}
				/>
			</div>
		</a>
	);

	return (
		<div className={`testimonial-card ${even ? "even" : "odd"}`}>
			{testimonialBlurb}
			{testimonialImg}
		</div>
	);
}
