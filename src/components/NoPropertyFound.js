import {FaExclamation} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../assets/css/NoPropertyFound.css';

const NoPropertyFound = (props) => {
	return (
		<div className="prop-not-found-wrap">
			<div className='text-center '>
				<div className="icon-text-wrap divider">
					<FaExclamation className='fa' />
					{props.message}
				</div>
				{(props.displayAllProps === true) ?
					<p className='divider'><Link to="/properties">Click here</Link> to view all the properties!</p>
					: ''
				}
			</div>

		</div>
	)
}

export default NoPropertyFound