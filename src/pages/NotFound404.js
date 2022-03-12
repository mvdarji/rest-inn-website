import Header from '../components/Header';
import Footer from '../components/Footer';
import img404 from '../assets/images/404.gif';

const NotFound404 = () => {
	return (
		<>
		<Header/>
		<div id="main">
			<div className="container">
				<div className="wrap-404">
					<div className="content-404">
						<h1>Oops!</h1>
						<p>We can't seem to find the page you're looking for.</p>
					</div>
					<div className="img">
						<img src={img404} alt="404, No Path found for this page" />
					</div>
				</div>
			</div>
		</div>
        <Footer/>
		</>
	)
}

export default NotFound404;