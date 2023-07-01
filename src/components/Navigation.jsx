import { NavLink } from 'react-router-dom';

// const items = [
//     {name:"reena", to:"/"},
// ]

const Navigation = () => {
	return (
		<nav className='flex justify-center items-center'>
			<ul className='flex justify-center items-center'>
				{/* {items.map((item)=>{
                       return (
                        <li key={item.to}>
                            <NavLink to={item.to}>
                                {item.name}
                            </NavLink>
                        </li>
                        )
                    })} */}

				<li>
					<NavLink to='/' className='font-bold text-xl text-white'>
						R<span className='text-amber-400'>EE</span>NA
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
