import styled from 'styled-components';

export const Header = styled.header`
	width: 100%;
	height: 200px;
	background-color: #6065c1;
	border-radius: 0 0 80px 80px;
	.container-header {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.icon-burger {
		display: block;
		z-index: 9;
		position: fixed;
		left: 10px;
		top: 10px;
	}
`;

export const BurgerDiv = styled.div`
	background-color: #fafafa;
	display: flex;
	flex-direction: column;
	padding: 90px 0 30px 0;
	position: fixed;
	border-radius: 10px;
	border: 2px solid #151076;
	transition: 0.5s;
	overflow: hidden;
	z-index: 8;
	gap: 15px;
	width: 0;
	left: 0;
	top: 0;
`;

export const LineRouter = styled.div`
    width: 200px;
    height: 2px;
    background-color: #151076;
    position: relative;
`

export const RouterSocial = styled.h3`
	color: #000;
	cursor: pointer;
	font-size: 2em;
	font-weight: 600;
	position: relative;
`;

export const Logo = styled.div`
	.image-logo {
		width: 300px;
	}
`;
