import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';

// Example free images/videos from Pexels/Unsplash
const galleryItems = [
	{
		type: 'image',
		src: './gallery-img-1.jpeg',
		alt: 'Student using computer',
	},
	{
		type: 'video',
		src: './gallery-vd-1.mp4',
		alt: 'ICT class in action',
	},
	{
		type: 'image',
		src: './gallery-img-2.jpeg',
		alt: 'Online learning',
	},
	{
		type: 'video',
		src: './gallery-vd-2.mp4',
		alt: 'Short ICT lesson',
	},
	{
		type: 'image',
		src: './gallery-img-3.jpeg',
		alt: 'Classroom teamwork',
	},
	{
		type: 'image',
		src: './gallery-img-4.jpeg',
		alt: 'ICT teacher explaining',
	},
	{
		type: 'video',
		src: './gallery-vd-3.mp4',
		alt: 'Students collaborating',
	},
	{
		type: 'image',
		src: './gallery-img-5.jpeg',
		alt: 'Group study',
	},
	{
		type: 'video',
		src: './gallery-vd-4.mp4',
		alt: 'ICT project presentation',
	},
	{
		type: 'image',
		src: './gallery-img-6.jpeg',
		alt: 'Exam preparation',
	},
	{
		type: 'image',
		src: './gallery-img-7.jpeg',
		alt: 'Online quiz',
	},
	{
		type: 'video',
		src: './gallery-vd-5.mp4',
		alt: 'Classroom Q&A',
	},
];

export default function Gallery() {
	const [showAll, setShowAll] = useState(false);
	const items = showAll ? galleryItems : galleryItems.slice(0, 4);

	return (
		<section
			id="gallery"
			className="py-20 bg-background relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/80 to-accent/10 pointer-events-none"></div>
			<div className="absolute top-16 left-1/4 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
			<div
				className="absolute bottom-10 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"
				style={{ animationDelay: '1s' }}
			></div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
						Gallery
					</h2>
					<p className="text-lg text-muted-foreground">
						Explore real moments from our A/L ICT classes and online sessions.
					</p>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					{items.map((item, idx) => (
						<div
							key={idx}
							className={`rounded-2xl overflow-hidden shadow-lg backdrop-blur-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group`}
							style={{ position: 'relative' }}
						>
							{item.type === 'image' ? (
								<img
									src={item.src}
									alt={item.alt}
									className="w-full h-full object-cover"
								/>
							) : (
								<>
									<span
										style={{
											position: 'absolute',
											top: 10,
											right: 10,
											zIndex: 2,
										}}
									>
										<Video
											className="text-white/80 bg-black/40 rounded-full p-1"
											size={24}
										/>
									</span>
									<video
										src={item.src}
										className="w-full h-full object-cover"
										muted
										loop
										playsInline
										preload="metadata"
										onMouseEnter={(e) => e.currentTarget.play()}
										onMouseLeave={(e) => {
											e.currentTarget.pause();
											e.currentTarget.currentTime = 0;
										}}
									/>
								</>
							)}
						</div>
					))}
				</div>
				<div className="flex justify-center mt-8">
					<Button
						size="lg"
						variant="outline"
						onClick={() => setShowAll(!showAll)}
					>
						{showAll ? 'Show Less' : 'Show More'}
					</Button>
				</div>
			</div>
		</section>
	);
}
