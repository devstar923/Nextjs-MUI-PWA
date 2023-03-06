import React from "react";
import Image from "next/image";
import Tooltip from "@material-ui/core/Tooltip";

// material-ui components
import {makeStyles} from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/components/collectionListStyle";
import tooltip from "styles/jss/nextjs-material-kit/tooltipsStyle.js";
import Button from "../CustomButtons/Button";

const useStyles = makeStyles({...styles, ...tooltip});

export default function CollectionItem(props) {
	const classes = useStyles();
	return (
		<li className="verified" onClick={()=>props.showDetail()}>
			<div className={classes.flexRow}>
				{!props.summarized ?
					(<img className={classes.avatar} src="/img/faces/christian.jpg" width={96} height={96} loading="lazy"/>) :
					(<img className={classes.avatar} src="/img/faces/christian.jpg" width={64} height={64} loading="lazy"/>)}
				<div className={classes.flexCol}>
					<strong className={classes.p18}>{props.user.name}</strong>
					<span className={classes.p18}>{props.user.job}</span>
					<span>{props.user.address}</span>
				</div>
			</div>
			{!props.summarized && (
				<div className={classes.flexCol}>
					<div className={classes.userProperty}>
						<div className={classes.flexRow}>
							<Image src="/img/logos/ic_level.svg" width={24} height={24} loading="lazy"/>
							Senior Level
						</div>
						<div className={classes.flexRow}>
							<Image src="/img/logos/ic_duration.svg" width={24} height={24} loading="lazy"/>
							10+ Years
						</div>
						<div className={classes.flexRow}>
							<Image src="/img/logos/ic_major.svg" width={24} height={24} loading="lazy"/>
							BE design
						</div>
					</div>
					<p>
						Web Design, Logo Design, UI Design
					</p>
				</div>
			)}
			<div className={classes.flexCol} style={{alignItems: 'end'}}>
				<div className={classes.flexRow}>
					{!props.summarized && (<Image src="/img/logos/ic_calendar.svg" width={24} height={24} loading="lazy"/>)}
					{!props.summarized && (<span>Available in 60 days</span>)}
					<Tooltip
						id="tooltip-right"
						title={(<p><strong>‘Elizabeth sezi’</strong> - Design Specialist has been Shortlisted</p>)}
						placement="right"
						classes={{ tooltip: classes.tooltip }}
					>
						<Button color="transparent" style={{padding: '0px'}}><Image src="/img/logos/ic_like.svg" width={24} height={24} loading="lazy"/></Button>
					</Tooltip>
				</div>
				<p>{!props.summarized ? "created on 23 JAN 2023" : "6 + Years"}</p>
			</div>
		</li>
	);
}

CollectionItem.propTypes = {};
