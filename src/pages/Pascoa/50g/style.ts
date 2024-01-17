import styled from 'styled-components';

export const HomePages = styled.div`
	padding: 90px 0 0 0;
	.container-homeP {
		display: flex;
		flex-direction: column;
	}
`;

export const TextHomeInicial = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.title-homeP {
		font-size: 3em;
		color: #151076;
		font-weight: 900;
	}
	.paragrafo-homeP {
		font-size: 1.3em;
		font-weight: 500;
		color: #000;
		text-align: center;
	}
`;

export const Cardapio = styled.div`
	padding: 60px 10px 0 5px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	.span-inicial {
		font-size: 2.5em;
		font-weight: 700;
		color: #151076;
		padding-left: 15px;
	}
	.container-cardapio {
		display: flex;
		flex-direction: column;
		gap: 10px;
		justify-content: center;
	}
`;

export const CardapioList = styled.div`
	display: flex;
	/* flex-direction: column; */
	justify-content: space-between;
	padding: 10px 15px 0 15px;
	.recheio-text {
		font-size: 1.6em;
		color: #000;
		font-weight: 600;
	}
	.value-recheio {
		font-size: 1.8em;
		color: #151076;
		font-weight: 600;
	}
`;

export const LineRecheio = styled.div`
	text-align: center;
	height: 2px;
	width: 370px;
	background-color: #6065c1;
	position: relative;
	left: 30px;
`;
