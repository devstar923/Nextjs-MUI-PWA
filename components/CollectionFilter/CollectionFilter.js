import React from "react";

// material-ui components
import {makeStyles} from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import basicsStyles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import listStyles from "styles/jss/nextjs-material-kit/components/collectionListStyle";
import CollectionItem from "../Collection/CollectionItem";

import {rc_users, rv_users, users} from "public/users"

const useStyles = makeStyles({...basicsStyles, ...styles, ...listStyles});

export default function CollectionFilter(props) {
	const classes = useStyles();
	return (
		<div className={classes.filterOptionContainer}>
			<p className={classes.p18}>Recently viewed Designer's profiles</p>
			<ul className={classes.items + ' items ' + props.viewMode}>
				{
					rv_users.map((user, index) => (
						<CollectionItem key={index} summarized={true} user={user} showDetail={()=>props.showDetail()}/>
					))
				}
			</ul>
			<p className={classes.p18}>Recently contacted Designers</p>
			<ul className={classes.items + ' items ' + props.viewMode}>
				{
					rc_users.map((user, index) => (
						<CollectionItem key={index} summarized={true} user={user} showDetail={()=>props.showDetail()}/>
					))
				}
			</ul>
		</div>
	);
}

CollectionFilter.propTypes = {};
