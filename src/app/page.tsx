/* eslint-disable @next/next/no-img-element */
'use client';	

import { Avatar, ProgressRing, Slider, Switch, Segment } from '@skeletonlabs/skeleton-react';
import { useState } from 'react';

// Common Class Lists
const headerClasses = 'space-y-2 pb-2 border-b-2 border-surface-800-200';
const previewCardClasses = 'card bg-noise bg-surface-50-950 border-[1px] border-surface-200-800 flex justify-center items-center p-8';
export default function Home() {
	const [color, setColor] = useState('#bada55');
	const [size, setSize] = useState('xs');
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setColor(event.target.value);
	};
	return (
		<div>
			<header className="sticky top-0 z-50 bg-surface-50-950 shadow-xl">
				<div className="container mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-10 p-4">
					<h1 className="h3">Skeleton</h1>
					<p className="text-xs opacity-60 collapse md:visible">Test various feature provided by Skeleton.</p>
					<a href="https://skeleton.dev" target="_blank" className="btn preset-filled">
						Documentation
					</a>
				</div>
			</header>

			<main className="container mx-auto space-y-20 px-4 py-20">
				{/* -------------------------------------------------------- */}
				<header className={headerClasses}>
					<h2 className="h2">Tailwind Components</h2>
				</header>
				{/* -------------------------------------------------------- */}

				{/* Badges */}
				{/* https://skeleton.dev/docs/tailwind/badges */}
				<section className="space-y-4">
					<h3 className="h3">Badges</h3>
					<div className={previewCardClasses}>
						<div className="grid grid-cols-3 gap-4">
							<span className="badge preset-filled-primary-500">Badge</span>
							<span className="badge preset-tonal-primary">Badge</span>
							<span className="badge preset-outlined-primary-500">Badge</span>
							{/* --- */}
							<span className="badge preset-filled-secondary-500">Badge</span>
							<span className="badge preset-tonal-secondary">Badge</span>
							<span className="badge preset-outlined-secondary-500">Badge</span>
							{/* --- */}
							<span className="badge preset-tonal-tertiary">Badge</span>
							<span className="badge preset-outlined-tertiary-500">Badge</span>
							{/* --- */}
							<span className="badge preset-filled-success-500">Badge</span>
							<span className="badge preset-tonal-success">Badge</span>
							<span className="badge preset-outlined-success-500">Badge</span>
							{/* --- */}
							<span className="badge preset-filled-warning-500">Badge</span>
							<span className="badge preset-tonal-warning">Badge</span>
							<span className="badge preset-outlined-warning-500">Badge</span>
							{/* --- */}
							<span className="badge preset-filled-error-500">Badge</span>
							<span className="badge preset-tonal-error">Badge</span>
							<span className="badge preset-outlined-error-500">Badge</span>
							{/* --- */}
							<span className="badge preset-filled-surface-500">Badge</span>
							<span className="badge preset-tonal-surface">Badge</span>
							<span className="badge preset-outlined-surface-500">Badge</span>
						</div>
					</div>
				</section>

				{/* Buttons */}
				{/* https://skeleton.dev/docs/tailwind/buttons */}
				<section className="space-y-4">
					<h3 className="h3">Buttons</h3>
					<div className={previewCardClasses}>
						<div className="grid grid-cols-3 gap-4">
							<button type="button" className="btn preset-filled-primary-500">
								Button
							</button>
							<button type="button" className="btn preset-tonal-primary">
								Button
							</button>
							<button type="button" className="btn preset-outlined-primary-500">
								Button
							</button>
							{/* --- */}
							<button type="button" className="btn preset-filled-secondary-500">
								Button
							</button>
							<button type="button" className="btn preset-tonal-secondary">
								Button
							</button>
							<button type="button" className="btn preset-outlined-secondary-500">
								Button
							</button>
							{/* --- */}
							<button type="button" className="btn preset-filled-tertiary-500">
								Button
							</button>
							<button type="button" className="btn preset-tonal-tertiary">
								Button
							</button>
							<button type="button" className="btn preset-outlined-tertiary-500">
								Button
							</button>
							{/* --- */}
							<button type="button" className="btn preset-filled-success-500">
								Button
							</button>
							<button type="button" className="btn preset-tonal-success">
								Button
							</button>
							<button type="button" className="btn preset-outlined-success-500">
								Button
							</button>
							{/* --- */}
							<button type="button" className="btn preset-filled-warning-500">
								Button
							</button>
							<button type="button" className="btn preset-tonal-warning">
								Button
							</button>
							<button type="button" className="btn preset-outlined-warning-500">
								Button
							</button>
							{/* --- */}
							<button type="button" className="btn preset-filled-error-500">
								Button
							</button>
							<button type="button" className="btn preset-tonal-error">
								Button
							</button>
							<button type="button" className="btn preset-outlined-error-500">
								Button
							</button>
							{/* --- */}
							<button type="button" className="btn preset-filled-surface-500">
								Button
							</button>
							<button type="button" className="btn preset-tonal-surface">
								Button
							</button>
							<button type="button" className="btn preset-outlined-surface-500">
								Button
							</button>
						</div>
					</div>
				</section>

				{/* Card */}
				{/* https://skeleton.dev/docs/tailwind/cards */}
				<section className="space-y-4">
					<h3 className="h3">Card</h3>
					<div className={previewCardClasses}>
						<a
							href="#card"
							className="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden"
						>
							<header>
								<img
									src="https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									className="aspect-[21/9] w-full grayscale hue-rotate-90"
									alt="banner"
								/>
							</header>
							<article className="space-y-4 p-4">
								<div>
									<h2 className="h6">Announcements</h2>
									<h3 className="h3">Skeleton is Awesome</h3>
								</div>
								<p className="opacity-60">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur
									tempore sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.
								</p>
							</article>
							<footer className="flex items-center justify-between gap-4 p-4">
								<small className="opacity-60">By Alex</small>
								<small className="opacity-60">On {new Date().toISOString().split('T')[0]}</small>
							</footer>
						</a>
					</div>
				</section>

				{/* Forms */}
				{/* https://skeleton.dev/docs/tailwind/forms */}
				<section className="space-y-4">
					<h3 className="h3">Forms</h3>
					<div className={previewCardClasses}>
						<form className="w-full max-w-xl mx-auto space-y-4">
							<fieldset className="space-y-4">
								{/* Input */}
								<label className="label">
									<span className="label-text">Input</span>
									<input className="input" type="text" placeholder="Input" />
								</label>
								{/* Select */}
								<label className="label">
									<span className="label-text">Select</span>
									<select className="select">
										<option value="1">Option 1</option>
										<option value="2">Option 2</option>
										<option value="3">Option 3</option>
										<option value="4">Option 4</option>
										<option value="5">Option 5</option>
									</select>
								</label>
								{/* Textarea */}
								<label className="label">
									<span className="label-text">Textarea</span>
									<textarea
										className="textarea rounded-container"
										rows={4}
										placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
									></textarea>
								</label>
								{/* Search */}
								<label className="label">
									<span className="label-text">Search</span>
									<input className="input" type="search" placeholder="Search..." />
								</label>
								{/* Date Picker */}
								<label className="label">
									<span className="label-text">Date</span>
									<input className="input" type="date" />
								</label>
								{/* File Input */}
								<label className="label">
									<span className="label-text">File Input</span>
									<input className="input" type="file" />
								</label>
								{/* Range */}
								<label className="label">
									<span className="label-text">Range</span>
									<input className="input" type="range" value="75" max="100" readOnly />
								</label>
								{/* Progress */}
								<label className="label">
									<span className="label-text">Progress</span>
									<progress className="progress" value="50" max="100"></progress>
								</label>
								{/* Color */}
								<div className="grid grid-cols-[auto_1fr] gap-2">
									<input className="input" type="color" value={color} onChange={handleChange} />
									<input className="input" type="text" value={color} readOnly tabIndex={-1} />
								</div>
							</fieldset>
						</form>
					</div>
				</section>

				{/* -------------------------------------------------------- */}
				<header className={headerClasses}>
					<h2 className="h2">Functional Components</h2>
				</header>
				{/* -------------------------------------------------------- */}

				{/* Avatars */}
				{/* https://skeleton.dev/docs/components/avatar/react */}
				<section className="space-y-4">
					<h3 className="h3">Avatars</h3>
					<div className={previewCardClasses}>
						<div className="grid grid-cols-4 gap-5">
							<Avatar src="https://i.pravatar.cc/150?img=10" name="example" imageClasses="grayscale" />
							<Avatar name="Victoria"></Avatar>
							<Avatar name="Jane Doe"></Avatar>
							<Avatar name="Icon1">
								<span>&rarr;</span>
							</Avatar>
							{/* --- */}
							<Avatar src="https://i.pravatar.cc/150?img=11" name="example" imageClasses="grayscale" />
							<Avatar name="Victoria" background="preset-tonal"></Avatar>
							<Avatar name="Jane Doe" background="preset-tonal"></Avatar>
							<Avatar name="Icon1" background="preset-tonal">
								<span>&rarr;</span>
							</Avatar>
							{/* --- */}
							<Avatar src="https://i.pravatar.cc/150?img=12" name="example" imageClasses="grayscale" />
							<Avatar name="Victoria" background="preset-filled-primary-500"></Avatar>
							<Avatar name="Jane Doe" background="preset-filled-primary-500"></Avatar>
							<Avatar name="Icon1" background="preset-filled-primary-500">
								<span>&rarr;</span>
							</Avatar>
							{/* --- */}
							<Avatar src="https://i.pravatar.cc/150?img=13" name="example" imageClasses="grayscale" />
							<Avatar name="Victoria" background="preset-tonal-primary"></Avatar>
							<Avatar name="Jane Doe" background="preset-tonal-primary"></Avatar>
							<Avatar name="Icon1" background="preset-tonal-primary">
								<span>&rarr;</span>
							</Avatar>
						</div>
					</div>
				</section>

				{/* ProgressRing */}
				{/* https://skeleton.dev/docs/components/progress-ring/react */}
				<section className="space-y-4">
					<h3 className="h3">Progress Rings</h3>
					<div className={previewCardClasses}>
						<div className="flex items-center md:space-x-16">
							<ProgressRing classes="hidden md:block" value={25} max={100} />
							<ProgressRing value={25} max={100} showLabel meterStroke="stroke-success-500" />
							<ProgressRing classes="hidden md:block" value={null} meterStroke="stroke-error-500" />
						</div>
					</div>
				</section>

				{/* <Segment */}
				{/* https://skeleton.dev/docs/components/segment/react */}
				<section className="space-y-4">
					<h3 className="h3">Segment Controls</h3>
					<div className={previewCardClasses}>
						<div className="flex items-center md:space-x-16">
							<Segment name="size" value={size} onValueChange={setSize}>
								<Segment.Item value="xs">xs</Segment.Item>
								<Segment.Item value="sm">sm</Segment.Item>
								<Segment.Item value="md">md</Segment.Item>
								<Segment.Item value="lg">lg</Segment.Item>
								<Segment.Item value="xl">xl</Segment.Item>
							</Segment>
						</div>
					</div>
				</section>

				{/* Slider */}
				{/* https://skeleton.dev/docs/components/slider/react */}
				<section className="space-y-4">
					<h3 className="h3">Sliders</h3>
					<div className={previewCardClasses}>
						<div className="space-y-8 w-full max-w-4xl">
							<Slider value={[50]} meterBg="bg-primary-500" thumbRingColor="ring-primary-500" />
							<Slider value={[25, 50]} meterBg="bg-secondary-500" thumbRingColor="ring-secondary-500" />
							<Slider value={[50]} markers={[25, 50, 75]} meterBg="bg-tertiary-500" thumbRingColor="ring-tertiary-500" />
						</div>
					</div>
				</section>

				{/* Switch */}
				{/* https://skeleton.dev/docs/components/switch/react */}
				<section className="space-y-4">
					<h3 className="h3">Switch</h3>
					<div className={previewCardClasses}>
						<div className="flex space-x-8">
							<Switch name="example" />
						</div>
					</div>
				</section>

				{/* -------------------------------------------------------- */}
				<header className={headerClasses}>
					<h2 className="h2">Typography</h2>
				</header>
				{/* -------------------------------------------------------- */}

				{/* Headings */}
				{/* https://skeleton.dev/docs/design/typography#headings */}
				<section className="space-y-4">
					<h3 className="h3">Headings</h3>
					<div className={previewCardClasses}>
						<div className="space-y-4">
							<h1 className="h1">Heading 1</h1>
							<h2 className="h2">Heading 2</h2>
							<h3 className="h3">Heading 3</h3>
							<h4 className="h4">Heading 4</h4>
							<h5 className="h5">Heading 5</h5>
							<h6 className="h6">Heading 6</h6>
						</div>
					</div>
				</section>

				{/* Blockquote */}
				{/* https://skeleton.dev/docs/design/typography#blockquotes */}
				<section className="space-y-4">
					<h3 className="h3">Blockquote</h3>
					<div className={previewCardClasses}>
						<div className="max-w-xl mx-auto">
							<blockquote className="blockquote">
								&quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, aliquid. Molestias, odio illum voluptatibus natus
								dignissimos, quidem est unde aspernatur veniam pariatur fuga distinctio esse in quas, repellendus neque reiciendis!&quot;
							</blockquote>
						</div>
					</div>
				</section>

				{/* Code */}
				{/* https://skeleton.dev/docs/design/typography#code */}
				<section className="space-y-4">
					<h3 className="h3">Code</h3>
					<div className={previewCardClasses}>
						<code className="code">console.log()</code>
					</div>
				</section>

				{/* Keyboard */}
				{/* https://skeleton.dev/docs/design/typography#keyboard */}
				<section className="space-y-4">
					<h3 className="h3">Keyboard</h3>
					<div className={previewCardClasses}>
						<div>
							Press <kbd className="kbd">⌘</kbd> + <kbd className="kbd">C</kbd> to copy.
						</div>
					</div>
				</section>

				{/* Pre-Formatted */}
				{/* https://skeleton.dev/docs/design/typography#pre-formatted */}
				<section className="space-y-4">
					<h3 className="h3">Pre-Formatted</h3>
					<div className={previewCardClasses}>
						<pre className="pre">The quick brown fox jumps over the lazy dog.</pre>
					</div>
				</section>

				{/* -------------------------------------------------------- */}
				<header className={headerClasses}>
					<h2 className="h2">Extras</h2>
				</header>
				{/* -------------------------------------------------------- */}

				{/* Alerts */}
				{/* https://skeleton.dev/docs/guides/cookbook/alerts/ */}
				<section className="space-y-4">
					<h3 className="h3">Alerts</h3>
					<div className={previewCardClasses}>
						<div className="w-full max-w-xl grid grid-cols-1 gap-4">
							<div className="card preset-outlined-success-500 grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-[1fr_auto]">
								<div>
									<p className="font-bold">Success</p>
									<p className="type-scale-1 opacity-60">The task has been completed successfully.</p>
								</div>
							</div>
							<div className="card preset-outlined-warning-500 grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-[auto_1fr_auto]">
								<div>
									<p className="font-bold">Warning</p>
									<p className="type-scale-1 opacity-60">Beware of this important notice.</p>
								</div>
							</div>
							<div className="card preset-outlined-error-500 grid grid-cols-1 items-center gap-4 p-4 lg:grid-cols-[auto_1fr_auto]">
								<div>
									<p className="font-bold">Error</p>
									<p className="type-scale-1 opacity-60">Something has gone wrong.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Breadcrumbs */}
				{/* https://skeleton.dev/docs/guides/cookbook/breadcrumbs/ */}
				<section className="space-y-4">
					<h3 className="h3">Breadcrumbs</h3>
					<div className={previewCardClasses}>
						<ol className="flex items-center gap-4">
							<li>
								<a className="opacity-60 hover:underline" href="#breadcrumbs">
									Blog
								</a>
							</li>
							<li className="opacity-50" aria-hidden="true">
								&rsaquo;
							</li>
							<li>
								<a className="opacity-60 hover:underline" href="#breadcrumbs">
									Category
								</a>
							</li>
							<li className="opacity-50" aria-hidden="true">
								&rsaquo;
							</li>
							<li>Article</li>
						</ol>
					</div>
				</section>

				{/* Image Layouts */}
				{/* https://skeleton.dev/docs/guides/cookbook/image-layouts/ */}
				<section className="space-y-4">
					<h3 className="h3">Image Layouts</h3>
					<div className={previewCardClasses}>
						<section className="grid grid-cols-2 gap-4 md:grid-cols-4">
							{/* Column */}
							<div className="grid gap-4">
								<img className="bg-surface-500 rounded-container" src="https://picsum.photos/220/320?random=1" alt="Random" />
								<img className="bg-surface-500 rounded-container" src="https://picsum.photos/220/120?random=2" alt="Random" />
								<img className="bg-surface-500 rounded-container" src="https://picsum.photos/220/280?random=3" alt="Random" />
							</div>
							{/* Column */}
							<div className="grid gap-4">
								<img className="bg-surface-500 rounded-container" src="https://picsum.photos/220/300?random=4" alt="Random" />
								<img className="bg-surface-500 rounded-container" src="https://picsum.photos/220/280?random=5" alt="Random" />
								<img className="bg-surface-500 rounded-container" src="https://picsum.photos/220/140?random=6" alt="Random" />
							</div>
							{/* Column */}
							<div className="grid gap-4">
								<img className="bg-surface-500 rounded-container" src="https://picsum.photos/220/280?random=7" alt="Random" />
								<img className="bg-surface-500 rounded-container" src="https://picsum.photos/220/320?random=8" alt="Random" />
								<img className="bg-surface-500 rounded-container" src="https://picsum.photos/220/140?random=9" alt="Random" />
							</div>
							{/* Column */}
							<div className="grid gap-4">
								<img className="bg-surface-500 rounded-container" src="https://picsum.photos/220/320?random=10" alt="Random" />
								<img className="bg-surface-500 rounded-container" src="https://picsum.photos/220/140?random=11" alt="Random" />
								<img className="bg-surface-500 rounded-container" src="https://picsum.photos/220/280?random=12" alt="Random" />
							</div>
						</section>
					</div>
				</section>
			</main>
		</div>
	);
}
