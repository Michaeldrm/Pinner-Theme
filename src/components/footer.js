import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { themeSettings, text } from '../lib/settings';

class FooterMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		};
	}

	isActiveToggle = () => {
		this.setState({
			isActive: !this.state.isActive
		});
	};

	render() {
		const { title, items } = this.props;
		let ulItems = null;

		if (items && items.length > 0) {
			ulItems = items.map((item, index) => (
				<li key={index}>
					<NavLink to={item.url || ''}>{item.text}</NavLink>
				</li>
			));
		}

		return (
			<div>
				<ul className="footer-menu">{ulItems}</ul>
			</div>
		);
	}
}

const SocialIcons = ({ icons }) => {
	if (icons && icons.length > 0) {
		const items = icons.map((icon, index) => (
			<a
				key={index}
				href={icon.url || ''}
				target="_blank"
				rel="noopener"
				title={icon.type}
				className={icon.type}
			/>
		));
		return <p className="social-icons">{items}</p>;
	} else {
		return null;
	}
};

const Contacts = ({ contacts }) => {
	if (contacts && contacts.length > 0) {
		const items = contacts.map((item, index) => {
			const contact = item ? item.text : null;
			if (contact && contact.indexOf('@') > 0) {
				return (
					<li key={index}>
						<a href={'mailto:' + contact}>{contact}</a>
					</li>
				);
			} else {
				return <li key={index}>{contact}</li>;
			}
		});
		return <ul className="footer-contacts">{items}</ul>;
	} else {
		return null;
	}
};

export default class Footer extends React.PureComponent {
	static propTypes = {
		settings: PropTypes.shape({}).isRequired
	};

	render() {
		const { settings } = this.props;
		const footerLogoUrl =
			themeSettings.footer_logo_url && themeSettings.footer_logo_url.length > 0
				? '/assets/images/' + themeSettings.footer_logo_url
				: settings.logo;

		return (
			<footer id="footer" className="footer-wrapper">
				<div className="container absolute-footer">
					<div className="content">
						<div className="columns is-gapless">
							<div className="column is-2">
								<div className="mobile-padding">
									<FooterMenu
										items={themeSettings.footer_menu_1_items}
									/>
									<small>
	                  {themeSettings.footer_about}
	                </small>
								</div>
							</div>
							<div className="column is-1 is-hidden-mobile" />
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
