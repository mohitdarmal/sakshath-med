import React from 'react';
import Section from '../Section/Section';
import Footer from './Footer';

const Footerwrapper = () => {
	return (
		<Section
			id="footer_section"
			style={{
				// minWidth: '1200px',
				backgroundColor: '#03415c',
				padding: ' 48px 0',
				color: '#fff',
				fontSize: '14px'
			}}
		>
			<div
				id="footer_top"
				style={{
					// width: '1180px',
					maxWidth: "100rem",
					margin: 'auto'
				}}
			>
				<Footer>
					<div className='footerdata'>
						<h3>Sakshath</h3>

						<p>About</p>
						<p>Blog</p>
						<p>Careers</p>
						<p>Press</p>
						<p>Contact Us</p>
					</div>
					<div className='footerdata'>
						<h3>For Patients</h3>

						<p>Search for doctors</p>
						<p>Serch for clinic</p>
						<p>Search for hospitals</p>
						<p>Book diaginistics checks</p>
						<p>Book Full Body checkup</p>
						<p>Sakshath plus</p>
					</div>
					<div className='footerdata'>
						<h3>For Clinics</h3>

						<p>Ray by Sakshath</p>
						<p>Sakshath Reach</p>
						<p>Ray Tab</p>
						<p>Sakshath Pro</p>
					</div>
					<div className='footerdata'>
						<h3>For hospitals</h3>

						<p>Insta by Sakshath</p>
						<p>Quickwell by Sakshath</p>
						<p>Sakshath Profile</p>
						<p>Sakshath Reach</p>
					</div>
					<div className='footerdata'>
						<h3>More</h3>

						<p>Help</p>
						<p>Developers</p>
						<p>Privacy Policy</p>
						<p>Terms and Conditions</p>
						<p>Healthcare directory</p>
					</div>
					<div className='footerdata'>
						<h3>Social</h3>

						<p>Facebook</p>
						<p>Twitter</p>
						<p>Linkedin</p>
						<p>Youtube</p>
						<p>Github</p>
					</div>
				</Footer>
			</div>
			<div id="footer_img_div" style={{ textAlign: 'center' }}>
				<span>
					<img
						src={require('../../assets/images/logo.svg').default}
						alt='sakshath_logo'
						style={{ margin: '28px 0px', border: '0px', maxWidth: '310px', maxHeight: '78px' }}
					/>
				</span>
				<div style={{ color: '#b8bbd9', fontWeight: 700 }}>
					<span>Copyright © 2023, Sakshath. </span>
					<span>All rights reserved.</span>
				</div>
			</div>
		</Section>
	);
};

export default Footerwrapper;
