import styled from "styled-components";

export const ButtonPrimary = styled.div(
	(props) => `
		border-bottom: 0;
		background: #00b50e;
		padding: 6px 12px;
		border-radius: 3px;
		text-align: center;
		display: inline-block;
		text-transform: uppercase;
		font-size: 14px;
		color: #fff;
		border-bottom: 3px solid #029c02;
		text-shadow: 1px 1px #029c02;
		&:hover{
			cursor: pointer;
			opacity: 0.9;
		}
		&:active{
			border-bottom: 3px solid transparent;
		}
	`);

export const BadgeButton = styled.div(
	(props) => `
		display: inline-block;
		border: 1px solid #ddd;
		border-radius: 50px;
		font-weight: bold;
		width: 16px;
		height: 16px;
		line-height: 16px;
		background: #fff;
		padding: 5px;
		text-align: center;
		cursor: pointer;
	`);