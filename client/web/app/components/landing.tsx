import { Link } from '@remix-run/react';

export const Landing = () => {
	return (
		<div className="bg-primary bg-[url('/assets/KaizenKlassBg.png')] h-screen flex justify-center items-center">
			<div className='hero flex flex-col items-center'>
				<h1 className='font-display text-highlight text-center text-5xl md:text-[140px]'>
					Kaizen Klass
				</h1>
				<p className='text-highlightSecondary font-base text-center text-base md:text-4xl'>
					Learn, Grow and Overcome Assignments
				</p>
				<div className='buttons flex md:space-x-5 space-x-3 md:mt-10 mt-5'>
					<Link
						to={'/contribute'}
						role='button'
						className='cursor-pointer border border-highlight text-highlight md:w-[280px] text-base w-[120px] md:text-3xl h-[40px] md:h-[75px] justify-center items-center flex rounded-full font-base hover:bg-highlight hover:text-primary transition-all duration-300 ease-in-out'
					>
						Contribute
					</Link>
					<Link
						to={'/subjects'}
						role='button'
						className='cursor-pointer border border-highlight bg-highlight text-primary md:w-[280px] text-base w-[120px] md:text-3xl h-[40px] md:h-[75px] justify-center items-center flex rounded-full font-base hover:bg-primary hover:text-highlight transition-all duration-300 ease-in-out'
					>
						Check it out
					</Link>
				</div>
			</div>
		</div>
	);
};
