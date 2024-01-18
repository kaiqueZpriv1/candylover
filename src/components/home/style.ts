import styled from 'styled-components';

export const HomeS = styled.main`
	width: 100%;
	padding: 80px 0;
	.container-home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}
`;

export const RouterPage = styled.button`
	font-size: 1.6em;
	font-weight: 700;
	padding: 10px 30px;
	border-radius: 30px;
	border: none;
	background-color: #6065c1;
	color: #f9f9f9;
	width: 350px;
	&:hover {
		transform: scale(1.1);
		transition: 0.4s;
	}
`;

export const FooterHome = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	inset: 640px 0 0 0;
	.text-footer {
		font-size: 1.5em;
		color: #000;
		font-weight: 500;
	}
`;
