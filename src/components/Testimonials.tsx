import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
	{
		quote: 'Sir Bhanuka made ICT so easy to understand. I scored an A in my A/Ls thanks to his teaching! The way he explains complex concepts is simply amazing.',
		author: 'Nipun Perera',
		location: 'Matara',
		grade: 'A Grade',
		avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
		rating: 5
	},
	{
		quote: 'The online classes were interactive and fun. I learned a lot and improved my exam results. Best investment I made for my A/L studies.',
		author: 'Dilini Fernando',
		location: 'Colombo',
		grade: 'A Grade',
		avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
		rating: 5
	},
	{
		quote: 'Best ICT teacher! The support and resources helped me pass with flying colors. Sir always made time for our doubts and questions.',
		author: 'Kasun Silva',
		location: 'Galle',
		grade: 'B Grade',
		avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
		rating: 5
	},
	{
		quote: 'I joined from Kandy and never felt left out. The lessons and notes were top-notch. Online learning has never been this effective.',
		author: 'Tharushi Jayasinghe',
		location: 'Kandy',
		grade: 'A Grade',
		avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
		rating: 5
	},
	{
		quote: 'Sir explained every concept clearly. Highly recommend for any A/L ICT student. The practical sessions were incredibly helpful.',
		author: 'Ravindu Amarasinghe',
		location: 'Kurunegala',
		grade: 'A Grade',
		avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
		rating: 5
	},
	{
		quote: 'From struggling with programming to acing my practicals - Sir Bhanuka transformed my understanding completely. Forever grateful!',
		author: 'Sachini Wickramasinghe',
		location: 'Negombo',
		grade: 'A Grade',
		avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
		rating: 5
	},
	{
		quote: 'The structured approach and comprehensive notes made all the difference. I went from C grade to A grade in just 6 months!',
		author: 'Dhanuka Rathnayake',
		location: 'Anuradhapura',
		grade: 'A Grade',
		avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
		rating: 5
	},
	{
		quote: 'Even during lockdown, the quality of education never dropped. Interactive sessions and quick doubt clearing made learning seamless.',
		author: 'Kavindi Dissanayake',
		location: 'Ratnapura',
		grade: 'B Grade',
		avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
		rating: 5
	}
];

export default function Testimonials() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const [direction, setDirection] = useState(1);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const SLIDE_DURATION = 4000; // 4 seconds per slide
	const CARDS_TO_SHOW = 3;

	// Auto-play functionality
	useEffect(() => {
		if (!isPlaying) return;

		intervalRef.current = setInterval(() => {
			setCurrentIndex(prev => {
				const next = prev + direction;
				if (next >= testimonials.length - CARDS_TO_SHOW + 1) {
					setDirection(-1);
					return prev - 1;
				}
				if (next < 0) {
					setDirection(1);
					return prev + 1;
				}
				return next;
			});
		}, SLIDE_DURATION);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, [isPlaying, direction]);

	const handlePause = () => {
		setIsPlaying(false);
	};

	const handlePlay = () => {
		setIsPlaying(true);
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
		setIsPlaying(false);
		setTimeout(() => setIsPlaying(true), 3000); // Resume after 3 seconds
	};

	const nextSlide = () => {
		if (currentIndex < testimonials.length - CARDS_TO_SHOW) {
			setCurrentIndex(prev => prev + 1);
		}
	};

	const prevSlide = () => {
		if (currentIndex > 0) {
			setCurrentIndex(prev => prev - 1);
		}
	};

	return (
		<section id="testimonials" className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-16">
					<p className="text-sm uppercase tracking-wider text-blue-400 font-semibold mb-2 opacity-80">
						Student Testimonials
					</p>
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Students</span> Say
					</h2>
					<p className="text-slate-400 text-lg max-w-2xl mx-auto">
						Real experiences from students who achieved excellence in A/L ICT
					</p>
				</div>

				{/* Main Slideshow Container */}
				<div 
					className="relative max-w-7xl mx-auto"
					onMouseEnter={handlePause}
					onMouseLeave={handlePlay}
				>
					{/* Navigation Arrows */}
					<button
						onClick={prevSlide}
						disabled={currentIndex === 0}
						className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-300 hover:scale-110"
					>
						<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>

					<button
						onClick={nextSlide}
						disabled={currentIndex >= testimonials.length - CARDS_TO_SHOW}
						className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-300 hover:scale-110"
					>
						<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>

					{/* Testimonials Container */}
					<div className="overflow-hidden px-12">
						<div 
							className="flex transition-transform duration-700 ease-out"
							style={{
								transform: `translateX(-${currentIndex * (100 / CARDS_TO_SHOW)}%)`,
							}}
						>
							{testimonials.map((testimonial, index) => (
								<div
									key={index}
									className="flex-shrink-0 px-4"
									style={{ width: `${100 / CARDS_TO_SHOW}%` }}
								>
									<Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group h-full">
										<CardContent className="p-8">
											{/* Quote Icon */}
											<div className="mb-6">
												<svg 
													width="48" 
													height="38" 
													viewBox="0 0 40 32" 
													fill="none" 
													className="text-blue-400/40 group-hover:text-blue-400/60 transition-colors duration-300"
												>
													<path d="M12.76 31.92C8.84 31.92 5.96 30.6 4.12 27.96C2.32 25.32 1.42 21.96 1.42 17.88C1.42 13 2.6 8.96 4.96 5.76C7.36 2.56 10.96 0.559999 15.76 -0.240001L17.72 3.96C14.52 4.68 12.12 6 10.52 7.92C8.92 9.84 8.12 12.16 8.12 14.88C8.12 15.76 8.16 16.4 8.24 16.8C8.64 16.48 9.44 16.32 10.64 16.32C12.96 16.32 14.88 17.12 16.4 18.72C17.92 20.28 18.68 22.36 18.68 24.96C18.68 27.4 17.92 29.36 16.4 30.84C14.88 31.56 13 31.92 10.76 31.92H12.76ZM31.16 31.92C27.24 31.92 24.36 30.6 22.52 27.96C20.72 25.32 19.82 21.96 19.82 17.88C19.82 13 21 8.96 23.36 5.76C25.76 2.56 29.36 0.559999 34.16 -0.240001L36.12 3.96C32.92 4.68 30.52 6 28.92 7.92C27.32 9.84 26.52 12.16 26.52 14.88C26.52 15.76 26.56 16.4 26.64 16.8C27.04 16.48 27.84 16.32 29.04 16.32C31.36 16.32 33.28 17.12 34.8 18.72C36.32 20.28 37.08 22.36 37.08 24.96C37.08 27.4 36.32 29.36 34.8 30.84C33.28 31.56 31.4 31.92 29.16 31.92H31.16Z" fill="currentColor"/>
												</svg>
											</div>

											{/* Quote */}
											<p className="text-slate-200 text-lg leading-relaxed mb-8 group-hover:text-white transition-colors duration-300">
												"{testimonial.quote}"
											</p>

											{/* Author Info */}
											<div className="flex items-center gap-4 mb-2">
												<img
													src={testimonial.avatar}
													alt={testimonial.author}
													className="h-12 w-12 rounded-full object-cover border border-white/10"
												/>
												<div className="flex-1 min-w-0">
													<div className="font-semibold text-lg truncate">{testimonial.author}</div>
													<div className="flex items-center gap-2 mt-1">
														<div className="text-gray-400 text-sm">{testimonial.location}</div>
														<span className="px-3 py-1 text-xs font-bold text-primary border border-primary/30 rounded-full bg-transparent backdrop-blur-sm">
															{testimonial.grade}
														</span>
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							))}
						</div>
					</div>

					{/* Dots Navigation */}
					<div className="flex justify-center space-x-3 mt-12">
						{Array.from({ length: testimonials.length - CARDS_TO_SHOW + 1 }, (_, i) => (
							<button
								key={i}
								onClick={() => goToSlide(i)}
								className={`w-3 h-3 rounded-full transition-all duration-300 ${
									i === currentIndex 
										? 'bg-blue-400 scale-125' 
										: 'bg-white/30 hover:bg-white/50'
								}`}
							/>
						))}
					</div>

					{/* Play/Pause Control */}
					<div className="flex justify-center mt-6">
						<button
							onClick={isPlaying ? handlePause : handlePlay}
							className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full p-2 transition-all duration-300"
						>
							{isPlaying ? (
								<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
								</svg>
							) : (
								<svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}