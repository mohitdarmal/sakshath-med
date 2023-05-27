import Section from '../../Section/Section';
import Cards from './Cards';
import Card from './Card';

const CardsWrapper = () => {
	const info = [
		{
			title: 'Instant Video Consultation',
			desc: 'Connect within 60 secs',
			img: require('../../../assets/images/mobile.png').default
		},
		{
			title: 'Find Doctors Near You',
			desc: 'Confirmed Appointments',
			img: require('../../../assets/images/dweb_find_doctors.png').default,
			bg: '#98cbd6'
		},
		{
			title: 'Medicines',
			desc: 'Essentials at your doorstep',
			img: require('../../../assets/images/dweb_medicines.png').default,
			bg: '#ccd0db'
		},
		{
			title: 'Lab Tests',
			desc: 'Sample pickup at your home',
			img: require('../../../assets/images/dweb_lab_tests.png').default,
			bg: '#a2cae7'
		},
		{
			title: 'Surgeries',
			desc: 'Safe and trusted surgery centers',
			img: require('../../../assets/images/dweb_surgeries.png').default,
			bg: '#d5d8fc'
		}
	];

	return (
		<Section className='mt-60'>
			<Cards id="cards_content" className='content'>
				{info.map(({ title, desc, img, bg }, indx) => (
					<Card bg={bg} key={title} className={`Card`}>
						<div className='img-wrapper'>
							<img className={`img-${indx}`} src={img} alt={title} /> 
						</div>
						<div className='info'>
							<h3>{title}</h3>
							<p>{desc}</p>
						</div>
					</Card>
				))}
			</Cards>
		</Section>
	);
};

export default CardsWrapper;
