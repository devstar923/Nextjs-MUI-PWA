import imagesStyles from "styles/jss/nextjs-material-kit/imagesStyles.js";

const style = {
	...imagesStyles,
	iconBtn: {
		color: '#7B7B7B !important',
		fontSize: '14px',
		fontWeight: '400',
		lineHeight: '24px'
	},
	normalContainer: {
		padding: '20px',
	},
	noPadding: {
		padding: '0'
	},
	backIcon: {
		marginLeft: '8px',
		marginRight: '0 !important'
	},
	normalIcon: {
		width: '24px !important',
		height: '24px !important',
	},
	centerContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '16px'
	},
	reverseContainer: {
		display: 'flex',
		flexDirection: 'row-reverse',
		gap: '16px',
		alignItems: 'center'
	},
	labelWithIcon: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '6px',
		color: '#606060'
	},
	cardContainer: {
		display: 'flex',
		flexDirection: 'column',
		background: '#F1F1F5',
		padding: '30px 30px 30px 60px',
	},
	cardTitle: {
		fontSize: '18px',
		fontWeight: '700',
		lineHeight: '32px',
		marginBottom: '24px'
	},
	cardLabel: {
		fontSize: '18px',
		lineHeight: '24px',
		fontWeight: '400',
		color: '#737373',
	},
	hourlyRate: {
		fontWeight: '400',
		fontSize: '18px',
		lineHeight: '32px',
		color: '#3D3D3D',
		marginBottom: '0'
	},
	verticalLine: {
		width: 0,
		height: '80%',
		borderLeft: '1px solid #B7B7B7'
	},
	largeButton: {
		fontSize: '16px'
	},
	largeIcon: {
		width: '32px !important',
		height: '32px !important',
	},
	contentBox: {
		padding: '60px 60px 60px 90px',
		display: 'flex',
		flexDirection: 'column',
	},
	personalBox: {
		display: 'flex',
		gap: '24px',
		paddingBottom: '24px',
		borderBottom: '1px solid #B7B7B7'
	},
	personalLabelBox: {
		display: 'flex',
		flexDirection: 'column-reverse',
	},
	descLabel: {
		fontSize: '16px',
		lineHeight: '24px',
		color: '#737373',
		fontWeight: '400',
		padding: '24px 0',
		wordBreak: 'break-all'
	},
	experienceBox: {
		paddingBottom: '24px',
	},
	termLabel: {
		fontSize: '18px',
		lineHeight: '32px',
		fontWeight: '400',
		color: '#9D9D9D'
	},
	titleLabel: {
		fontSize: '18px',
		lineHeight: '32px',
		fontWeight: '700',
		color: 'black'
	},
	experienceItem: {
		fontSize: '14px',
		lineHeight: '24px',
		fontWeight: '400',
		color: '#737373'
	}
};

export default style;
