import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.div(
	(props) => `
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: left;
		border-bottom: 1px solid #ccc;
		background: #ddd;
		padding: 0px;
	`);

export const SiteNameStyled = styled.div(
	(props) => `
		color: #fff;
		height: 50px;
		display: block;
		border-bottom: 1px solid #ccc;
		background: #ddd;
		padding: 12px;
	`);

export const HeaderItemStyled = styled.div(
	(props) => `
		flex-grow: 1;
		line-height: 50px;
	`);

export const HeaderItemLinksStyled = styled(HeaderItemStyled)(
	(props) => `
		text-align: right;
	`);


export const NavLinkStyled = styled(NavLink)(
	(props) => `
		padding: 6px 12px;
		line-height: 50px;
		text-decoration: none;
		text-transform: uppercase;
		color: #333;
		&.is-active {
			background: #999;
			color: #fff;
			border-radius: 3px;
		}
	`);
