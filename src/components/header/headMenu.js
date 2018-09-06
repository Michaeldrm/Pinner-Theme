import React from 'react';
import { NavLink } from 'react-router-dom';
import { themeSettings, text } from '../../lib/settings';

export default class HeadMenu extends React.PureComponent {
	render() {
		const { onClick, isMobile } = this.props;
		let addItemsToMenu = [];
		if (themeSettings.header_menu && themeSettings.header_menu.length > 0) {
			addItemsToMenu = themeSettings.header_menu.map(item => ({
				name: item.text,
				path: item.url
			}));
		}
		const menuItems = [...addItemsToMenu];

		const items = menuItems
			.map((item) => (
				<li
					isMobile={isMobile}
				>
					<NavLink
						activeClassName="is-active"
						to={item.path}
						onClick={onClick}
					>
						{item.name}
					</NavLink>
				</li>
			));

		return <ul className="nav-level-0">{items}</ul>;
	}
}
