const Modal = ({ show, children, close }) => {
	return (
		<>
			{show && children ? (
				<div
					className='w-full sm:w-[400px]  h-[400px] bg-black/80 backdrop-blur-sm rounded-md text-white p-4 flex flex-col justify-center absolute top-50'
					onClick={() => close()}>
					<div
						className='modal relative w-full h-full'
						onClick={(e) => e.stopPropagation()}>
						<header className='modal_header w-full flex justify-between items-center mb-5  py-1 px-2 rounded-md'>
							<h2 className='modal_header-title animate-pulse'>
								Your answer
							</h2>

							<button
								className='close text-rose-700'
								onClick={() => close()}>
								X
							</button>
						</header>
						<main className='modal_content'>{children.text}</main>
						<footer className='w-full mt-5 absolute bottom-0'>
							<button
								className='bg-rose-600 text-white hover:bg-rose-700 rounded-md w-full py-1 '
								onClick={() => close()}>
								Cancel
							</button>
						</footer>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Modal;
