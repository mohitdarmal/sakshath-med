import React from 'react';
import Download from './Download';
import Section from '../../Section/Section';

const DownloadWrapper = () => {
	return (
		<Section className='mt-60 DownloadWrapper'>
			<Download className='download content'>
				<div id="download_left" className='left'>
					<img
						src={require('../../../assets/images/download.png').default}
						alt='download Sakshath app'
					/>
				</div>
				<div id="download_right" className='right'> 
					<h3>Download the Sakshath app </h3>
					<p className='app_info'>
						Access video consultation with India’s top doctors on the Sakshath app. Connect with doctors
						online, available 24/7, from the comfort of your home.
					</p>
					<p className='get_link'>Get the link to download the app</p>
					<div className="app_link_form">
						<div className="app_link_input">
							<span className="country_code">+91</span>
							<input type="number" name="number" placeholder="Enter your number"/>
						</div>
						<button>Send SMS</button>
					</div>
					<div className='downloads'>
						<img
							className='play_store_button'
							src={require('../../../assets/images/google_play.png').default}
							alt='google play store'
						/>
						<img
							className='app_store_button'
							src={require('../../../assets/images/apple_store.png').default}
							alt='apple store'
						/>
					</div>
				</div>
			</Download>
		</Section>
	);
};

export default DownloadWrapper;
