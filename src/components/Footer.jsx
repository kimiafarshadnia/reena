import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
	return (
		<div className='flex justify-between items-center py-4 px-1 sm:px-12 bg-white'>
			<div className='text-black font-bold text-xl'>
				R<span className='text-blue-500'>EE</span>NA
			</div>
			<div className='text-center text-gray-600 font-medium capitalize text-xs'>
				copyright @reena {new Date().getFullYear()} all right reserved
			</div>
		</div>
	);
};

export default Footer;
