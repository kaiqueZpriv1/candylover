import styled from 'styled-components';

export const HomeGS = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #6065c1;
	height: 80px;
	.icon-burger {
		display: block;
		z-index: 9;
		position: fixed;
		left: 10px;
		top: 10px;
	}
`;

export const LogoHG = styled.div`
	position: absolute;
	inset: 0 0 0 140px;
	.image-logo {
		width: 150px;
	}
`;
