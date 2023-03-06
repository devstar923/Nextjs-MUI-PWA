/*eslint-disable*/
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useWeb3 } from "@3rdweb/hooks"
import MiddleTruncate from "../Helper/MiddleTruncate";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import {Apps, CloudDownload} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
	const router = useRouter();
	const { pathname, query } = router
	const { connectWallet, address, error } = useWeb3();

	const incrementCounter = () => {
		const currentCounter = query.counter ? parseInt(query.counter) : 0
		const href = `/?counter=${currentCounter + 1}`

	}
	const goToPage = (url) => {
		const href = "/create/" + url.toLowerCase();
		router.push(href, href, { shallow: true })
	};

	console.log('wallet-address:', address, error);
	console.log('router pathname', (router.pathname.indexOf('myNFTs') >= 0));


    return (
		<div style={{'display': 'flex', 'alignItems': 'center'}}>
			<List className={classes.list}>
				<ListItem className={classes.listItem}>
					<Button
						href="/designers"
						color="transparent"
						className={classes.navLink + (router.pathname.indexOf('portfolios') >= 0 ? ' ' + classes.activeLink  : '')}>
						Design Portfolios
					</Button>
				</ListItem>
				<ListItem className={classes.listItem}>
					<Button
						href="/designers"
						color="transparent"
						className={classes.navLink + (router.pathname.indexOf('designers') >= 0 ? ' ' + classes.activeLink  : '')}
					>
						Designers
					</Button>
				</ListItem>
				<ListItem className={classes.listItem}>
					<Button
						href="/designers"
						color="transparent"
						className={classes.navLink + (router.pathname.indexOf('contact') >= 0 ? ' ' + classes.activeLink  : '')}
					>
						Contact
					</Button>
				</ListItem>
				<ListItem className={classes.listItem}>
					<Button
						href="/designers"
						color="transparent"
						className={classes.navLink + (router.pathname.indexOf('about') >= 0 ? ' ' + classes.activeLink  : '')}
					>
						About us
					</Button>
				</ListItem>
				<ListItem className={classes.listItem}>
					<Button
						href="/designers"
						color="transparent"
						className={classes.navLink + (router.pathname.indexOf('help') >= 0 ? ' ' + classes.activeLink  : '')}
					>
						Help
					</Button>
				</ListItem>

			</List>
			<ListItem className={classes.listItem} style={{'display': 'flex'}}>
				<CustomDropdown
				left
				caret={false}
				hoverColor="black"
				dropdownHeader="Dropdown Header"
				buttonText={
					<img
					src="/img/faces/avatar.jpg"
					className={classes.img}
					alt="profile"
					/>
				}
				buttonProps={{
					className:
					classes.navLink + " " + classes.imageDropdownButton,
					color: "transparent",
				}}
				dropdownList={[
					"Me",
					"Settings and other stuff",
					"Sign out",
				]}
				/>
				John Doe
			</ListItem>
		</div>

    );
}
