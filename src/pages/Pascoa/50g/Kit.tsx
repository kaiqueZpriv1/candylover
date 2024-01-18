import React from 'react';
import Global from '../../../components/Global';
import { HeaderG } from '../../header global/HeaderG';
import { Cardapio, CardapioList, HomePages, TextHomeInicial } from './style';

export const Kit = () => {
	const recheio = [
		{
			id: 0,
			recheio: 'Brigadeiro',
			value: 'R$ 45,00',
			description: 'Brigadeiro tradicional com casca ao leite',
		},
		// {
		// 	id: 1,
		// 	recheio: 'Mousse de maracujá',
		// 	value: 'R$ 45,00',
		// 	line: '---',
		// },
		// {
		// 	id: 2,
		// 	recheio: 'Prestigio',
		// 	value: 'R$ 45,00',
		// 	line: '--------------',
		// },
		// {
		// 	id: 3,
		// 	recheio: 'Beijinho',
		// 	value: 'R$ 45,00',
		// 	line: '---------------',
		// },
		// {
		// 	id: 4,
		// 	recheio: 'Ninho',
		// 	value: 'R$ 45,00',
		// 	line: '----------------',
		// },
		// {
		// 	id: 5,
		// 	recheio: 'Sensação',
		// 	value: 'R$ 45,00',
		// 	line: '--------------',
		// },
		// {
		// 	id: 6,
		// 	recheio: 'Oreo',
		// 	value: 'R$ 45,00',
		// 	line: '----------------',
		// },
		// {
		// 	id: 7,
		// 	recheio: 'Kit Kat',
		// 	value: 'R$ 45,00',
		// 	line: '----------------',
		// },
		// {
		// 	id: 8,
		// 	recheio: 'Kinder Bueno',
		// 	value: 'R$ 45,00',
		// 	line: '---------',
		// },
	];
	return (
		<>
			<Global />
			<HeaderG />
			<HomePages>
				<div className='container-homeP'>
					<TextHomeInicial>
						<span className='title-homeP'>Kit com 4 ovos de 50g</span>
						<p className='paragrafo-homeP'>Escolha 4 opções de recheio !</p>
					</TextHomeInicial>
					<Cardapio>
						<span className='span-inicial'>Recheios :</span>
						<div className='container-cardapio'>
							{recheio.map((i) => {
								return (
									<CardapioList key={i.id}>
										<div className='description-recheio'>
											<h3 className='recheio-text'>{i.recheio}</h3>
											<p className='line-cardapio'>{i.description}</p>
										</div>
										<div className='value-box'>
											<span className='value-recheio'>{i.value}</span>
										</div>
									</CardapioList>
								);
							})}
						</div>
					</Cardapio>
				</div>
			</HomePages>
		</>
	);
};
