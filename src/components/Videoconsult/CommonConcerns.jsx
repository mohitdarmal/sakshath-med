import { Link } from 'react-router-dom';
import styles from './CommonConcerns.module.css';
import SliderWrapper from '../SliderWrapper/SliderWrapper';
import Category from './Category';

const CommonProblems = ({ name, price, img }) => (
	<div className={styles.problem_card}>
		<img src={img} alt={name} className={styles.problem_card_img} />
		<h3 className={styles.problem_card_title}>{name}</h3>
		<h4 className={styles.problem_card_price}>
			<span className='rupees_symbol'>₹</span>
			{price}
		</h4>
		<Link className={styles.consult_link} to='/search'>
			Consult Now{' '}
			<svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M5.7212 3.12422C5.81457 3.1239 5.90683 3.14451 5.99119 3.18453C6.07555 3.22454 6.14987 3.28296 6.2087 3.35547L9.22745 7.10547C9.31938 7.2173 9.36963 7.35758 9.36963 7.50234C9.36963 7.64711 9.31938 7.78738 9.22745 7.89922L6.10245 11.6492C5.99636 11.7769 5.84392 11.8571 5.67865 11.8724C5.51339 11.8876 5.34883 11.8366 5.2212 11.7305C5.09356 11.6244 5.0133 11.4719 4.99806 11.3067C4.98282 11.1414 5.03386 10.9769 5.13995 10.8492L7.9337 7.49922L5.2337 4.14922C5.15727 4.05748 5.10872 3.94576 5.0938 3.8273C5.07887 3.70883 5.0982 3.58856 5.14948 3.48073C5.20077 3.3729 5.28187 3.28202 5.38319 3.21884C5.48451 3.15566 5.6018 3.12282 5.7212 3.12422Z'
					fill='#47CCF3'
				/>
			</svg>
		</Link>
	</div>
);

const CommonConcerns = () => {
	const problems = [
		{
			name: 'Cough & Cold?',
			price: 349,
			img: require('../../assets/images/cough-cold-v1.jpg').default,
		},
		{
			name: 'Period problems?',
			price: 400,
			img: require('../../assets/images/period-problems-v1.jpg').default,
		},
		{
			name: 'Performance issues in bed?',
			price: 299,
			img: require('../../assets/images/performance-issues-bed-v1.jpg').default,
		},
		{
			name: 'Skin problems?',
			price: 400,
			img: require('../../assets/images/skin-problems-v1.jpg').default,
		},
		{
			name: 'Depression or anxiety?',
			price: 349,
			img: require('../../assets/images/depression-anxiety-v1.jpg').default,
		},
		{
			name: 'Want to lose weight?',
			price: 400,
			img: require('../../assets/images/lose-weight-v1.jpg').default,
		},
		{
			name: 'Vaginal infections?',
			price: 349,
			img: require('../../assets/images/vaginal-infections-v1.jpg').default,
		},
		{ name: 'Sick kid?', price: 400, img: require('../../assets/images/sick-kid-v1.jpg').default, }
	];

	const arr = problems.map((el) => <CommonProblems {...el} />);

	return (
		<Category heading='Common Problems' description='Consult a doctor online for any health issue' type='Symptoms'>
			<SliderWrapper arr={arr} limit={3} />
		</Category>
	);
};

export default CommonConcerns;
