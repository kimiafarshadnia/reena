import rocketRotate from '../assets/images/rocket-rotate.png';
import pencil from '../assets/images/pencil.png';

const LasrSection = () => {
	return (
		<div className='bg-neutral-900 w-full flex justify-center items-center lg:h-screen'>
			<div className='w-full sm:h-full bg-white rounded-t-2xl mt-12  flex justify-center items-center p-8 md:p-12'>
				<div className='w-full h-full flex justify-center items-center'>
					<div className='hidden lg:inline-block w-72 -mb-52  -mr-24'>
						<img
							src={
								rocketRotate ||
								'/assets/images/rocket-rotate.png'
							}
							alt='3D_pensil-png'
						/>
					</div>
					<div className='min-[410px]:text-5xl w-2/5 sm:w-2/4 flex flex-col justify-center items-center text-center text-3xl lg:text-7xl font-extrabold uppercase tracking-wide '>
						<span className='text-pink-500 text-shadow-3xl '>
							Enhance
						</span>
						<span className='text-indigo-400 text-shadow-3xl'>
							Your Products with
						</span>
						<span className='text-amber-300 text-shadow-4xl'>
							Reena's Unique Touch
						</span>
					</div>

					<div className='hidden lg:block w-60 -mt-28 -ml-28'>
						<img
							src={pencil || '/assets/images/pencil.png'}
							alt='3D_pensil-png'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LasrSection;
