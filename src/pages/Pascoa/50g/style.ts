import styled from 'styled-components';

export const HomePages = styled.div`
	padding: 50px 0 0 0;
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
		font-size: 2.5em;
		color: #151076;
		font-weight: 900;
	}
	.paragrafo-homeP {
		font-size: 1.2em;
		font-weight: 500;
		color: #000;
		text-align: center;
	}
`;

export const Cardapio = styled.div`
	padding: 30px 10px 0 5px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	.span-inicial {
		font-size: 1.6em;
		font-weight: 900;
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
	justify-content: space-between;
	margin: 0 10px;
	padding: 15px 10px;
	/* box-shadow: 0 0 5px #000; */
	border-radius: 15px;
	gap: 30px;
	.description-recheio {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.value-box {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.recheio-text {
		font-size: 1.4em;
		color: #151076;
		font-weight: 700;
		width: 250px;
	}
	.value-recheio {
		font-size: 1.4em;
		color: #151076;
		font-weight: 600;
		width: 100px;
	}
	.description-cardapio {
		font-size: 1em;
		font-weight: 500;
	}
`;

export const LineCardapio = styled.div`
	border: 1px solid rgba(150, 150, 150, 1);
	width: 350px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	inset: 0 0 0 20px;
`;
