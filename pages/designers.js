import React, {Component, useState, useEffect} from "react";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import CollectionFilter from "../components/CollectionFilter/CollectionFilter";
import CollectionList from "../components/Collection/CollectionList";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Portfolio from "../components/Portfolio";
import { useRouter } from 'next/router'
import styles from "../styles/jss/nextjs-material-kit/pages/components.js";
import basicsStyles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import pageStyles from "styles/jss/nextjs-material-kit/pages/collections";
import Button from "components/CustomButtons/Button";
import headerStyles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import {users, rc_users, rv_users} from "public/users"

const useStyles = makeStyles({...basicsStyles, ...styles, ...pageStyles});
const useStyles1 = makeStyles(headerStyles);

export default function Index(props) {
	const classes = useStyles();
	const classes1 = useStyles1();
	const [tab, setTab] = useState("all");
	const [isShowDetail, setIsShowDetail] = useState(false);
	const [viewMode, setViewMode] = useState(("list"));
	const [isShowFilter, setIsShowFilter] = useState(false);
	const [data, setData] = useState(users);
	const [key, setKey] = useState(0);

	const showFilter = () => {
		setIsShowFilter(!isShowFilter);
	}

	const sort = (e) => {
		console.log(e.target.value);
		data.reverse();
		setData(data);
		setKey((key + 1) % 2);
	}

	useEffect(()=> {
		if (tab == "top")
			setData(rc_users);
		else
		if (tab == "short")
			setData(rv_users);
		else
			setData(users);
		setKey((key + 1) % 2);
	}, [data, tab]);
	return (
		<div className={classes.container}>
			<div className={classes.partTitle}>
				<div className={classes.searchContainer}>
					<div className={classes.searchBar}>
						<img src={'/img/logos/ic_search.svg'} width={24} height={24}/>
						<input type="text" placeholder={'Search for Designers'}/>
						<select className={classes.sort}>
							<option value={'Latest'}>Experience</option>
						</select>
						<div>
							<img src={'/img/logos/ic_location.svg'} width={24} height={24}/>
							<span>&nbsp;Location</span>
						</div>
					</div>
					<Button color="actionButton" round size="lg" style={{ textTransform: 'capitalize' }}>Search</Button>
				</div>
			</div>
			<GridContainer>
				{!isShowDetail && (<GridItem xs={12} sm={12} md={8} lg={9}>
					<List className={classes1.list}>
						<ListItem className={classes1.listItem}>
							<Button
								color="transparent"
								onClick={() => setTab("all")}
								className={classes1.navLink + (tab == "all" ? ' ' + classes1.activeLink  : '')}>
								All Designers
							</Button>
						</ListItem>
						<ListItem className={classes1.listItem}>
							<Button
								color="transparent"
								onClick={() => setTab("top")}
								className={classes1.navLink + (tab == "top" ? ' ' + classes1.activeLink  : '')}
							>
								Top Rated Designers
							</Button>
						</ListItem>
						<ListItem className={classes1.listItem}>
							<Button
								color="transparent"
								onClick={() => setTab("short")}
								className={classes1.navLink + (tab == "short" ? ' ' + classes1.activeLink  : '')}
							>
								Short Listed Designers
							</Button>
						</ListItem>
					</List>
					<div className={classes.listIndicator}>
						<div>Designers List of 356 Results</div>
						<div className={'right'}>
							ListView&nbsp;
							<Button color="white" size="sm" onClick={() => setViewMode("grid")}>
								<img src={'/img/logos/ic_gridview.svg'} alt="eth" width="16px"
									 height="16px" />
							</Button>
							<Button color="white" size="sm" onClick={() => setViewMode("list")}>
								<img src={'/img/logos/ic_listview.svg'} alt="eth" width="16px"
									 height="16px" />
							</Button>
							&nbsp;&nbsp;Sort by:
							<select className={classes.sort} onChange={sort}>
								<option value={'Latest'}>Latest</option>
								<option value={'Availability'}>Availability</option>
								<option value={'Contacted'}>Contacted</option>
								<option value={'SeniorLevel'}>Senior Level</option>
								<option value={'MidLevel'}>Mid Level</option>
								<option value={'JuniorLevel'}>Junior Level</option>
							</select>
						</div>
					</div>
					<CollectionList key={key} users={data} viewMode={viewMode} showDetail={()=>setIsShowDetail(true)}/>
				</GridItem>)}
				{isShowDetail && (<GridItem xs={12} sm={12} md={8} lg={9}><Portfolio onBack={()=>setIsShowDetail(false)}/></GridItem>)}
				<GridItem xs={12} sm={12} md={4} lg={3} className={'text-center ' + classes.gridFilterContainer + (isShowFilter ? ' ' + classes.showFilter : '')}>
					<CollectionFilter viewMode="list" summarized={true} showDetail={()=>setIsShowDetail(true)}/>
				</GridItem>
				<div className={classes.mobileFilterButton}>
					<Button color="info" size="sm" onClick={showFilter}>
						{isShowFilter ? 'Apply Filter' : 'Filter'}
					</Button>
				</div>
			</GridContainer>
			<p className={classes.textCenter}>Copyright © 2023 DKSH Connect. All rights reserved.</p>
		</div>
	);
}
