import React from 'react';
import { HeaderG } from '../../header global/HeaderG';
import Global from '../../../components/Global';
import { Fade } from 'react-awesome-reveal';
import {
	ButtonWpp,
	Cardapio,
	CardapioList,
	FooterOvos,
	HomePages,
	LineCardapio,
	TextHomeInicial,
} from '../style';
import { recheio } from '../50g/Kit';

export const OvosDC = () => {
	return (
		<>
			<Global />
			<HeaderG />
			<HomePages>
				<div className='container-homeP'>
					<Fade cascade direction='up'>
						<TextHomeInicial>
							<span className='title-homeP'>Ovos de colher 250g</span>
							{/* <p className='paragrafo-homeP'>Escolha 4 opções de recheio !</p> */}
						</TextHomeInicial>
					</Fade>
					<Cardapio>
						<Fade direction='down'>
							<span className='span-inicial'>Recheios :</span>
						</Fade>
						<div className='container-cardapio'>
							{recheio.map((i) => {
								return (
									<>
										<CardapioList key={i.id}>
											<div className='description-recheio'>
												<Fade cascade direction='left'>
													<h3 className='recheio-text'>{i.recheio}</h3>
													<p className='description-cardapio'>
														{i.description}
													</p>
												</Fade>
											</div>
											<div className='value-box'>
												<span className='value-recheio'>{i.value}</span>
											</div>
										</CardapioList>
										<Fade direction='down'>
											<LineCardapio />
										</Fade>
									</>
								);
							})}
						</div>
					</Cardapio>
					<ButtonWpp>
						<button className='btnWpp'>
							<a
								href='https://wa.me/5511919462746?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20!'
								className='link-wpp'>
								Encomendar !
							</a>
						</button>
					</ButtonWpp>
					<FooterOvos>
						<Fade direction='up' cascade>
							<span className='text-footer'>São Paulo - SP</span>
							<span className='text-footer'>
								Horario de atendimento: 8h ás 20h
							</span>
							<span className='text-footer'>11 98018-2164</span>
						</Fade>
					</FooterOvos>
				</div>
			</HomePages>
		</>
	);
};
