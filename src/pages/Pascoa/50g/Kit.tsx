import React from 'react';
import Global from '../../../components/Global';
import { HeaderG } from '../../header global/HeaderG';
import {
	Cardapio,
	CardapioList,
	HomePages,
	LineRecheio,
	TextHomeInicial,
} from './style';

export const Kit = () => {
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
							<CardapioList>
								<h3 className='recheio-text'>Moranguinho</h3>
								<span className='value-recheio'>R$ 45,00</span>
							</CardapioList>
							<LineRecheio />
							<CardapioList>
								<h3 className='recheio-text'>Moranguinho</h3>
								<span className='value-recheio'>R$ 45,00</span>
							</CardapioList>
							<LineRecheio />
							<CardapioList>
								<h3 className='recheio-text'>Moranguinho</h3>
								<span className='value-recheio'>R$ 45,00</span>
							</CardapioList>
							<LineRecheio />
							<CardapioList>
								<h3 className='recheio-text'>Moranguinho</h3>
								<span className='value-recheio'>R$ 45,00</span>
							</CardapioList>
							<LineRecheio />
							<CardapioList>
								<h3 className='recheio-text'>Moranguinho</h3>
								<span className='value-recheio'>R$ 45,00</span>
							</CardapioList>
							<LineRecheio />
						</div>
					</Cardapio>
				</div>
			</HomePages>
		</>
	);
};
