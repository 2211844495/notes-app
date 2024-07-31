import { HiArrowLeft } from "react-icons/hi";
import { Link } from "wouter";

function DefaultLayout(props) {
	const { canGoBack } = props;
	return (
		<div className="container">
			{canGoBack ? (
				<Link className="backHome" href="/">
					<HiArrowLeft />
				</Link>
			) : null}
			<h1 className="header">MY📝NOTES</h1>
			{props.children}
		</div>
	);
}

export default DefaultLayout;
