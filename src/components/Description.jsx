import clock from '../assets/images/clock.png';
import lamp from '../assets/images/lamp.png';
import rocket from '../assets/images/rocket.png';
import sun from '../assets/images/sun.png';
const Description = () => {
	return (
		<div className='w-full lg:h-screen bg-neutral-900 flex flex-col justify-center pt-12'>
			{/* title */}
			<div className='relative flex flex-col text-white  p-4 md:px-12 uppercase'>
				<div className='flex justify-start text-3xl sm:text-6xl font-extrabold'>
					<div className='z-50'>
						<p className='sm:mb-4'>Innovative Solutions</p>
						<div className='flex'>
							with
							<div className='bg-lime-300 ml-3 mt-2 sm:-mt-3 -rotate-6 text-2xl sm:text-5xl rounded-full text-center w-fit p-2 sm:p-3 text-neutral-900 '>
								<p className='rounded-full p-2 sm:py-2 sm:px-4 border-2 border-dashed border-neutral-900'>
									reena ai
								</p>
							</div>
						</div>
					</div>

					<div className='hidden sm:flex sm:justify-center items-center sm:-ml-8 sm:-mt-20'>
						<img
							src={sun || '/assets/images/sun.png'}
							alt='rocket_with_rotate'
							className='w-32 sm:w-44'
						/>
					</div>
				</div>
			</div>
			<div className='w-full flex justify-end -mt-4 lg:-mt-20 mb-4'>
				<p className='w-full p-4 sm:w-2/4 md:w-96 text-sm text-gray-500'>
					We provide innovative solutions to enhance your product
					descriptions and creation process with Reena AI, leading to
					increased sales and a competitive edge.
				</p>
			</div>
			<div className='w-full text-black font-medium flex justify-center items-center p-4 md:px-12 overflow-x-auto '>
				<div className='bg-cyan-300 rounded-xl flex justify-center items-center  w-[300px] h-[350px]'>
					<div className='w-full flex flex-col justify-center items-center p-5'>
						<div className='flex shrink-0 flex-col justify-center items-center w-2/4 min-[450px]:w-full  sm:w-2/4'>
							<img
								src={clock || '/assets/images/clock.png'}
								alt='3D_clock_png'
								className='object-contain'
							/>
						</div>
						<div className='w-full text-black mt-4'>
							<h1 className='text-2xl font-medium capitalize mb-3'>
								Product Prodigy
							</h1>
							<p className='text-xs justify'>
								Simplify Product Creation with Reena AI. Unique
								and Effortless.
							</p>
						</div>
					</div>
					<div className='flex flex-col items-center justify-around h-full -mr-3'>
						<span className='bg-neutral-900 w-8  rounded-full h-3'></span>
						<span className='bg-neutral-900 w-8 my-3 rounded-full h-3'></span>
						<span className='bg-neutral-900 w-8  rounded-full h-3'></span>
					</div>
				</div>

				<div className='bg-indigo-300 rounded-xl flex justify-center items-center  w-[300px] h-[350px] mx-8'>
					<div className='flex flex-col items-center justify-around h-full -ml-3'>
						<span className='bg-neutral-900 w-8  rounded-full h-3'></span>
						<span className='bg-neutral-900 w-8 my-3 rounded-full h-3'></span>
						<span className='bg-neutral-900 w-8  rounded-full h-3'></span>
					</div>
					<div className='w-full flex flex-col justify-center items-center p-5'>
						<div className='flex shrink-0 flex-col justify-center items-center w-2/4 min-[450px]:w-full  sm:w-2/4'>
							<img
								src={lamp || '/assets/images/lamp.png'}
								alt='3D_lamp_png'
								className='object-contain'
							/>
						</div>
						<div className='w-full text-white mt-4'>
							<h1 className='text-2xl font-medium capitalize mb-3'>
								Product Prodigy
							</h1>
							<p className='text-xs justify'>
								Simplify Product Creation with Reena AI. Unique
								and Effortless.
							</p>
						</div>
					</div>
					<div className='flex flex-col items-center justify-around h-full -mr-3'>
						<span className='bg-neutral-900 w-8  rounded-full h-3'></span>
						<span className='bg-neutral-900 w-8 my-3 rounded-full h-3'></span>
						<span className='bg-neutral-900 w-8  rounded-full h-3'></span>
					</div>
				</div>

				<div className='bg-amber-200 rounded-xl flex justify-center items-center  w-[300px] h-[350px]'>
					<div className='flex flex-col items-center justify-around h-full -ml-3'>
						<span className='bg-neutral-900 w-8  rounded-full h-3'></span>
						<span className='bg-neutral-900 w-8 my-3 rounded-full h-3'></span>
						<span className='bg-neutral-900 w-8  rounded-full h-3'></span>
					</div>
					<div className='w-full flex flex-col justify-center items-center p-5'>
						<div className='flex shrink-0 flex-col justify-center items-center w-2/4 min-[450px]:w-full  sm:w-2/4'>
							<img
								src={rocket || '/assets/images/rocket.png'}
								alt='3D_rocket_png'
								className='object-contain'
							/>
						</div>
						<div className='w-full text-black mt-4'>
							<h1 className='text-2xl font-medium capitalize mb-3'>
								Product Prodigy
							</h1>
							<p className='text-xs justify'>
								Simplify Product Creation with Reena AI. Unique
								and Effortless.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Description;
