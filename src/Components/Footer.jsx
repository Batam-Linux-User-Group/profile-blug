import React from 'react'
import { Link } from 'react-router-dom'
// import {  }

const Footer = () => {
  return (        
    <>
      <div className="bg-secondary-dark w-full py-10 px-4 md:px-4">
				<div className="lg:max-w-screen-lg mx-auto">
					<div className="flex justify-between flex-col md:flex-row md:justify-center gap-y-4">
						<div className="md:w-[33%] w-full md:text-end px-15 text-white text-center">
							<h3 className='font-bold text-2xl mb-3.5'>Quick Links</h3>
							<div className="flex flex-col text-xs gap-y-2">
								<Link href="#">
									<p>Tentang</p>
								</Link>
								<Link href="#">
									<p>Pengurus</p>
								</Link>
								<Link href="#">
									<p>Artikel</p>
								</Link>
							</div>
						</div>
						<div className="py-6 md:w-[33%] w-full flex flex-col items-center gap-y-2">
							<img src="blug-white.svg" alt="blug-white" className='w-1/2' />
							<div className="flex gap-x-1.5">
								<Link href="#" className='p-1.5 bg-primary rounded-sm'>
									<img src="/icon/ic_instagram.svg" alt="instagram" className='w-4 h-4' />
								</Link>
								<Link href="#" className='p-1.5 bg-primary rounded-sm'>
									<img src="/icon/ic_youtube.svg" alt="instagram" className='w-4 h-4' />
								</Link>
								<Link href="#" className='p-1.5 bg-primary rounded-sm'>
									<img src="/icon/ic_linkedin.svg" alt="instagram" className='w-4 h-4' />
								</Link>
								<Link href="#" className='p-1.5 bg-primary rounded-sm'>
									<img src="/icon/ic_facebook.svg" alt="instagram" className='w-4 h-4' />
								</Link>
								<Link href="#" className='p-1.5 bg-primary rounded-sm'>
									<img src="/icon/ic_email.svg" alt="instagram" className='w-4 h-4' />
								</Link>
								<Link href="#" className='p-1.5 bg-primary rounded-sm'>
									<img src="/icon/ic_tiktok.svg" alt="instagram" className='w-4 h-4' />
								</Link>
							</div>
						</div>
						<div className="md:w-[33%] w-full md:text-start md:ps-15 text-white text-center">
							<h3 className='font-bold text-2xl mb-3.5'>Contact Us</h3>
							<div className="flex flex-col text-xs gap-y-2 justify-center md:justify-start">
								<div className="flex gap-x-3 justify-center md:justify-start">
									<img src="/icon/ic_call.svg" alt="message" />
									<p> 080132114212 | Aurellia - Sekretaris 1</p>
								</div>
								<div className="flex gap-x-3 justify-center md:justify-start">
									<img src="/icon/ic_msg.svg" alt="message" />
									<p> 080132114212 | Kayla - Sekretaris 2</p>
								</div>
								<div className="flex gap-x-3 justify-center md:justify-start">
									<img src="/icon/ic_email_white.svg" alt="message" />
									<p> beluglug@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
					<hr className='border-2 border-primary rounded-full mt-5' />
					<p className='font-semibold text-[0.6rem] text-white text-center mt-4'>Copyright @2025 BATAM LINUX USER GROUP - All Rights Reserved.</p>
				</div>
    	</div>  
    </>
  )
}

export default Footer