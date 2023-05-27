import styles from './Appointment.module.css';
import SliderWrapper from '../../SliderWrapper/SliderWrapper';
import Category from '../../Videoconsult/Category';

const AppointmentCard = ({ img, title, desc }) => <div className={styles.appointment_card}>
	<div className={styles.appointment_card_img}>
		<img src={img} alt={title} />
	</div>
	<h3 className={styles.appointment_card_title}>{title}</h3>
	<p className={styles.appointment_card_desc}>{desc}</p>
</div>;

const Appointment = () => {
	const appointments = [
		{
			img: require('../../../assets/images/dentist.jpg').default,
			title: 'Dentist',
			desc: 'Teething troubles? Schedule a dental checkup'
		},
		{
			img: require('../../../assets/images/gyne.jpg').default,
			title: 'Gynecologist/Obstetrician',
			desc: 'Explore for women’s health, pregnancy and infertility treatments'
		},
		{
			img: require('../../../assets/images/ditation.jpg').default,
			title: 'Dietitian/Nutrition',
			desc: 'Get guidance on eating right, weight management and sports nutrition'
		},
		{
			img: require('../../../assets/images/physeo.jpg').default,
			title: 'Physiotherapist',
			desc: 'Pulled a muscle? Get it treated by a trained physiotherapist'
		},
		{
			img: require('../../../assets/images/surgeon.jpg').default,
			title: 'General surgeon',
			desc: 'Need to get operated? Find the right surgeon'
		},
		{
			img: require('../../../assets/images/ortho.jpg').default,
			title: 'Orthopedist',
			desc: 'For Bone and Joints issues, spinal injuries and more'
		},
		{
			img: require('../../../assets/images/genral-phy.jpg').default,
			title: 'General physician',
			desc: 'Find the right family doctor in your neighborhood'
		},
		{
			img: require('../../../assets/images/pede.jpg').default,
			title: 'Pediatrician',
			desc: 'Child Specialists and Doctors for Infant'
		},
		{
			img: require('../../../assets/images/gestro.jpg').default,
			title: 'Gastroenterologist',
			desc: 'Explore for issues related to digestive system, liver and pancreas'
		}
	];

	const arr = appointments.map((el) => <AppointmentCard {...el} />);

	return (
		<Category
			heading='Book an appointment for an in-clinic consultation'
			description='Find experienced doctors across all specialties'
		>
			<SliderWrapper arr={arr} limit={4.60} />
		</Category>
	);
};

export default Appointment;
