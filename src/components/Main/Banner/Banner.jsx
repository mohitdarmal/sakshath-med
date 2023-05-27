import BannerWrapper from './BannerWrapper';

const Banner = ({ bannerImg }) => {
	return (
		<BannerWrapper id="banner_wrapper">
			<img src={require('../../../assets/images/banner.png').default} alt='Sakshath Technologies' />
		</BannerWrapper>
	);
};

export default Banner;
