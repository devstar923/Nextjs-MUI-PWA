import React, {useEffect} from "react";

// material-ui components
import {makeStyles} from "@material-ui/core/styles";
import styles from "styles/jss/nextjs-material-kit/components/collectionListStyle";
import CollectionItem from "./CollectionItem";
const useStyles = makeStyles(styles);

export default function CollectionList(props) {
	const classes = useStyles();
	useEffect(()=>{

	}, [props.users]);
	return (
		<ul className={classes.items + ' items ' + props.viewMode}>
		{
			props.users.map((user, index) => (
				<CollectionItem key={index} user={user} showDetail={()=>props.showDetail()}/>
			))
		}
		</ul>
	);
}

CollectionList.propTypes = {};
