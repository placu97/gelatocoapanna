import React from 'react'

export default function Quote() {
  return(
	//ection (minus w100% h100%)
	<section className="flex  flex-col w-full h-full relative bg-black text-white min-h-screen justify-center items-center" >
			{/* TextContainer  */}
			<div className="w-full h-full flex flex-col justify-center items-center" >
			
			{/* Text p		 */}
			<p className="text"><span>&#8220;&nbsp; Amme me piace a Nutella</span ></p>
			<p className="text"><span>&nbsp;&nbsp;&nbsp;Gelato coa panna</span ></p>
			<p className="text"><span>&nbsp;&nbsp;&nbsp;E merendine in QUantità &#8221;</span ></p>
			<p className="text m-7"><span className="w-full text-end">&#x23AF; Ciao</span ></p>

</div> 

	</section>
  )
}
