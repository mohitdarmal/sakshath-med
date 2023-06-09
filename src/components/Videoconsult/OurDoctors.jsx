import styles from './Testimonial.module.css';
import SliderWrapper from '../SliderWrapper/SliderWrapper';
import Category from './Category';

const TestimonialCard = ({ name, type, exp, img, consults, rating }) => (
	<div className={`${styles.testi_card}`}>
		<div className={styles.doctor_card_left}>
			<figure className={styles.doctor_card_img}>
				<img src={img} alt={name} />
			</figure>
			<label className={styles.doctor_card_badge}>{rating}/5</label>
		</div>
		<div className={styles.doctor_card_content}>
			<h4 className={styles.doctor_card_name}>{name}</h4>
			<p>{type}</p>
			<p>{exp} years experience</p>
			<p>{consults} consults done</p>
		</div>
	</div>
);

const OurDoctors = () => {
	const offers = [
		{
			name: 'Dr. Murali Reddy',
			type: 'Dermatologist',
			exp: 5,
			consults: 3367,
			rating: 4.5,
			img: require('../../assets/images/dr-murali-reddy-61079374694e8.jpg').default,
		},
		{
			name: 'Dr. Jayaprakasha G',
			type: 'Sexologist',
			exp: 27,
			consults: 10149,
			rating: 4.5,
			img: require('../../assets/images/dr-jayaprakasha-g-5ac9249d22b60.jpg').default,
		},
		{
			name: 'Dr. Kamal Kishore Verma',
			type: 'Psychiatrist, Sexologist',
			exp: 12,
			consults: 30092,
			rating: 4.5,
			img: require('../../assets/images/dr-kamal-kishore-verma-5d69f93f40699.jpg').default,
		},
		{
			name: 'Dr. Sowmyashree N',
			type: 'Gynecologist, Obstetrician',
			exp: 6,
			consults: 14491,
			rating: 4.5,
			img: require('../../assets/images/dr-sowmyashree-n-5dc2ad0c391d2.jpeg').default,
		},
		{
			name: 'Dr. Ravindrakumar Awachar',
			type: 'Sexologist',
			exp: 10,
			consults: 11604,
			rating: 4.5,
			img: require('../../assets/images/dr-ravindrakumar-awachar-5ceccf29953dc.jpg').default,
		},
		{
			name: 'Dr. Asmeet Kaur Sawhney',
			type: 'Dermatologist',
			exp: 9,
			consults: 9042,
			rating: 4.5,
			img: require('../../assets/images/dr-asmeet-kaur-sawhney-60fbebf140b07.jpg').default,
		},
		{
			name: 'Dr. Vandana',
			type: 'Gynecologist, Laparoscopic Surgeon (Obs & Gyn)',
			exp: 9,
			consults: 11403,
			rating: 4.5,
			img: require('../../assets/images/dr-vandhana-5d8ca4f1e9023.jpg').default,
		},
		{
			name: 'Dr. Swarupa Amaravadi',
			type: 'Gynecologist, Obstetrician',
			exp: 26,
			consults: 4416,
			rating: 4,
			img: require('../../assets/images/dr-swarupa-amaravadi-60b1f52bb195d.png').default,
		}
	];

	const arr = offers.map((el) => <TestimonialCard {...el} />);

	return (
		<Category heading='Our Doctors'>
			<SliderWrapper arr={arr} limit={3} />
		</Category>
	);
};

export default OurDoctors;
