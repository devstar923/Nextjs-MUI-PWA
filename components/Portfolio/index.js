import React, {Fragment} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import WbSunny from '@material-ui/icons/WbSunnyOutlined';
import AccessTime from '@material-ui/icons/AccessTime';
import School from '@material-ui/icons/SchoolOutlined';
import Bookmark from '@material-ui/icons/BookmarkBorderOutlined';
import LocalPhoneOutlined from '@material-ui/icons/LocalPhoneOutlined';
import AddOutlined from '@material-ui/icons/AddOutlined';

import { makeStyles } from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/components/portfolioStyle";
import Favorite from "@material-ui/icons/Favorite";
import Button from "../CustomButtons/Button";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
const useStyles = makeStyles(styles);

export default function Portfolio(props) {
	const classes = useStyles();
	const {} = props;
	return (
		<Fragment>
			<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0 12px 0'}}>
				<Button color="primary" simple className={classes.iconBtn + " " + classes.noPadding} onClick={()=>props.onBack()}>
					<KeyboardBackspace className={classes.icons + " " + classes.normalIcon} /> Back To Search Result
				</Button>
				<div>
					<Button color="primary" simple className={classes.iconBtn + " " + classes.noPadding}>
						Previous <ArrowBackIosIcon className={classes.icons + " " + classes.normalIcon + " " + classes.backIcon} />
					</Button>
					<Button color="primary" simple className={classes.iconBtn + " " + classes.noPadding}>
						<ArrowForwardIos className={classes.icons + " " + classes.normalIcon} /> Next
					</Button>
				</div>
			</div>
			<GridContainer className={classes.normalContainer}>
				<GridItem xs={12} sm={12} md={3} lg={3} />
				<GridItem xs={12} sm={12} md={6} lg={6} className={classes.centerContainer}>
					<span className={classes.labelWithIcon}>
						<WbSunny /> senior Level
					</span>
					<span className={classes.labelWithIcon}>
						<AccessTime /> 9 + Years
					</span>
					<span className={classes.labelWithIcon}>
						<School /> ms design
					</span>
				</GridItem>
				<GridItem xs={12} sm={12} md={3} lg={3} className={classes.reverseContainer}>
					<Bookmark style={{color: '#3482BB', width: '24px', height: '24px'}} />
					<span style={{fontSize: '13px', color: '#606060'}}>Created on 23 JAN 2023</span>
				</GridItem>
			</GridContainer>
			<div className={classes.cardContainer}>
				<p className={classes.cardTitle}>Rate Card</p>
				<GridContainer>
					<GridItem xs={12} sm={12} md={6} lg={6} style={{display: 'flex', gap: '24px'}}>
						<div>
							<p className={classes.cardLabel}>Short term contract</p>
							<p className={classes.hourlyRate}><span style={{fontSize: '26px'}}>90 $ / </span>Hour</p>
						</div>
						<div className={classes.verticalLine} />
						<div>
							<p className={classes.cardLabel}>Long term contract</p>
							<p className={classes.hourlyRate}><span style={{fontSize: '26px'}}>80 $ / </span>Hour</p>
						</div>
					</GridItem>
					<GridItem xs={12} sm={12} md={6} lg={6} style={{display: 'flex', flexDirection: 'row-reverse', gap: '12px', alignItems: 'center'}}>
						<Button color="info" className={classes.largeButton} round>
							<AddOutlined className={classes.largeIcon} /> Create Contract
						</Button>
						<Button color="info" className={classes.largeButton} round>
							<LocalPhoneOutlined className={classes.largeIcon} /> Contact
						</Button>
					</GridItem>
				</GridContainer>
			</div>
			<div className={classes.contentBox}>
				<div className={classes.personalBox}>
					<img
						src="/img/faces/avatar.jpg"
						alt="..."
						style={{width: '160px'}}
						className={classes.imgRounded + " " + classes.imgFluid}
					/>
					<div className={classes.personalLabelBox}>
						<span style={{fontSize: '14px', lineHeight: '24px', fontWeight: '400', color: '#7B7B7B'}}>Phone: (0123)­456­789 | Email: info@qwikresume.com | Website: Qwikresume.com</span>
						<span style={{fontSize: '24px', lineHeight: '36px', fontWeight: '400', color: '#9D9D9D'}}>Senior Graphic Designer</span>
						<span style={{fontSize: '28px', lineHeight: '42px', fontWeight: '700', color: '#323232'}}>Jeo  Bloggs</span>
					</div>
				</div>
				<p className={classes.descLabel}>
					9 years of experience as a Senior Graphic Designer. Seeking to acquire a position in an established
					business where my expertise as a Graphics Specialist is valued and facilitates both my professional
					growth and increases the revenue of the company.
				</p>
				<div className={classes.experienceBox}>
					<p className={classes.termLabel}>JULY 2015 – MAY 2023</p>
					<p className={classes.titleLabel}>SENIOR GRAPHIC DESIGNER - ABC CORPORATION</p>
					<ul className={classes.experienceList}>
						<li className={classes.experienceItem}>Contribute with updating various social media platforms; Facebook, Twitter, and Instagram.</li>
						<li className={classes.experienceItem}>Displayed strong interpersonal skills and excellent customer service through constant communication with customer, vendors and fellow employees.</li>
						<li className={classes.experienceItem}>Successfully coordinated graphic design projects from concept through completion.</li>
						<li className={classes.experienceItem}>Collaborate with clients to create the vision, conceive designs, and consistently meet deadlines and requirements.</li>
						<li className={classes.experienceItem}>Communicate effectively with coworkers as well as customers that include in person, telephone and email. Manipulate vector as well as raster files.</li>
						<li className={classes.experienceItem}>Create and produce art that can be color separated for screen printing and embroidery.</li>
						<li className={classes.experienceItem}>Collaborate with internal and external clients to develop graphics that promote campus happenings and events.</li>
					</ul>
				</div>
				<div className={classes.experienceBox}>
					<p className={classes.termLabel}>JULY 2015 – MAY 2023</p>
					<p className={classes.titleLabel}>SENIOR GRAPHIC DESIGNER - ABC CORPORATION</p>
					<ul className={classes.experienceList}>
						<li className={classes.experienceItem}>Contribute with updating various social media platforms; Facebook, Twitter, and Instagram.</li>
						<li className={classes.experienceItem}>Displayed strong interpersonal skills and excellent customer service through constant communication with customer, vendors and fellow employees.</li>
						<li className={classes.experienceItem}>Successfully coordinated graphic design projects from concept through completion.</li>
						<li className={classes.experienceItem}>Collaborate with clients to create the vision, conceive designs, and consistently meet deadlines and requirements.</li>
						<li className={classes.experienceItem}>Communicate effectively with coworkers as well as customers that include in person, telephone and email. Manipulate vector as well as raster files.</li>
						<li className={classes.experienceItem}>Create and produce art that can be color separated for screen printing and embroidery.</li>
						<li className={classes.experienceItem}>Collaborate with internal and external clients to develop graphics that promote campus happenings and events.</li>
					</ul>
				</div>
				<div className={classes.experienceBox}>
					<p className={classes.titleLabel}>EDUCATION</p>
					<p className={classes.experienceItem} style={{width: '500px'}}>
						Bachelors in Computer Graphics ­ (Purdue School Of Engineering & Technology, IUPUI)Business
						Administration/Generals ­ (Universidad Americana) ­ 1980(Elementary School Lazaro Cardenas)
					</p>
				</div>
				<div className={classes.experienceBox}>
					<p className={classes.titleLabel}>SKILLS</p>
					<p className={classes.experienceItem} style={{width: '500px'}}>
						Adobe Photoshop, Adobe Illustrator, Adobe In Design, Microsoft Publisher, Microsoft Excel,
						Microsoft Word, Microsoft PowerPoint, Sign Program, Data Junction, QuickBooks, MLOCR Sorting
						Machine, Booklet Maker, and Drill Press.
					</p>
				</div>
			</div>
		</Fragment>
	);
}

Portfolio.propTypes = {
};
