import React from 'react'

export default function HeroSection() {
  return (
	<section className="h-screen w-screen relative flex overflow-hidden bg-black text-gray-400 text-3xl ">
		{/* title */}
		<h1 className="absolute top-8 left-8" >HeroSection</h1>
		{/* text container */}
		<div className="w-full h-screen flex justify-between items-center text-6xl">
			<span>So.Cold.</span>
			<span>So.Bold.</span>
		</div>
	</section>
  )
}
