import { useState, useEffect } from 'react';
import magicHat from '../assets/images/magicHat.png';
import target from '../assets/images/target.png';
import Modal from './Modal';

import { addData } from '../services/addDataService';
const Input = () => {
	const [modal, setModal] = useState(false);
	const [dataForm, setDataForm] = useState({
		productName: '',
		productType: '',
		productdesc: '',
	});

	const [res, setRes] = useState(null);
	const [error, setError] = useState(false);

	const changeHandler = (e) => {
		console.log(e.target.name, e.target.value);
		setDataForm({ ...dataForm, [e.target.name]: e.target.value });
	};

	const Toggle = () => setModal(!modal);
	const postDataHandler = async () => {
		try {
			Toggle();
			await addData({ ...dataForm });
			const { data } = await addData();
			setDataForm(data);
			setRes(data.data);
		} catch (error) {}
	};

	return (
		<div className='bg-neutral-900 rounded-t-2xl w-full mt-12 text-black font-medium flex flex-col justify-center items-center p-4 sm:p-0'>
			<h1 className='text-4xl sm:text-6xl font-bold text-rose-700 text-shadow-5xl mt-12 capitalize sm:-rotate-10 mb-2'>
				Let's magic
			</h1>
			<div className='w-full flex justify-center items-center'>
				<div className='flex justify-center items-center'>
					<img
						src={magicHat || '/assets/images/magicHat.png'}
						alt='rocket_with_rotate'
						className='hidden sm:block w-32 sm:w-44'
					/>
				</div>
				<div className='flex flex-col justify-center items-center w-full sm:w-4/5 md:w-3/5 lg:w-2/5 p-8 m-4 bg-yellow-300 rounded-xl shadow-md shadow-yellow-500/50'>
					<div className='flex flex-col mb-3 w-full sm:w-3/4'>
						<label htmlFor='productName'>Product Name</label>
						<input
							type='text'
							name='productName'
							onChange={changeHandler}
							className='rounded-lg py-1 outline-none border-black border-2 px-2 placeholder:text-sm placeholder:font-light'
							placeholder='PC'
						/>
					</div>

					<div className='flex flex-col mb-3 w-full sm:w-3/4'>
						<label htmlFor='productType'>Product Category</label>
						<input
							type='text'
							name='productType'
							onChange={changeHandler}
							className='rounded-lg py-1 outline-none border-black border-2 px-2 placeholder:text-sm placeholder:font-light'
							placeholder='MacBook'
						/>
					</div>

					<div className='flex flex-col mb-3 w-full sm:w-3/4'>
						<label htmlFor='productdesc'>Product Description</label>
						<textarea
							cols='5'
							rows='5'
							name='productdesc'
							onChange={changeHandler}
							className='rounded-lg py-1 outline-none border-black border-2 px-2 placeholder:text-sm placeholder:font-light'
							placeholder='The MacBook is a premium laptop computer produced by Apple Inc'
						/>
					</div>

					<div className='flex flex-col justify-center items-center w-full'>
						<button
							type='submit'
							className='p-2 w-2/4 bg-violet-400 rounded-lg text-white  transition-all ease-linear shadow shadow-violet-500/50 mt-3 hover:-translate-y-1 hover:scale-110 hover:bg-violet-500 duration-300'
							onClick={postDataHandler}>
							Search
						</button>
					</div>
				</div>
				<div className='flex justify-center items-center'>
					<img
						src={target || '/assets/images/target.png'}
						alt='rocket_with_rotate'
						className='hidden sm:block -ml-10 -mt-28 w-32 sm:w-44'
					/>
				</div>
			</div>

			<Modal show={modal} children={res} close={Toggle} />
		</div>
	);
};

export default Input;
