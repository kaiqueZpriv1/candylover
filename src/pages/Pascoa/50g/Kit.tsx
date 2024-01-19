import React from 'react';
import Global from '../../../components/Global';
import { HeaderG } from '../../header global/HeaderG';
import {
	ButtonWpp,
	Cardapio,
	CardapioList,
	FooterOvos,
	HomePages,
	LineCardapio,
	TextHomeInicial,
} from '../style';
import { Fade } from 'react-awesome-reveal';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export const recheio = [
	{
		id: 0,
		recheio: 'Brigadeiro',
		value: 'R$ 45,00',
		description: 'Brigadeiro tradicional / casca ao leite',
	},
	{
		id: 1,
		recheio: 'Mousse de maracujá',
		value: 'R$ 45,00',
		description: 'Mousse de maracuja / casca meia amarga',
	},
	{
		id: 2,
		recheio: 'Prestigio',
		value: 'R$ 45,00',
		description:
			'Brigadeiro tradicional acompanhado de beijinho / casca ao leite',
	},
	{
		id: 3,
		recheio: 'Beijinho',
		value: 'R$ 45,00',
		description: 'Beijinho com massa de coco / casca ao leite',
	},
	{
		id: 4,
		recheio: 'Ninho',
		value: 'R$ 45,00',
		description: 'Brigadeiro branco com leite ninho',
	},
	{
		id: 5,
		recheio: 'Sensação',
		value: 'R$ 45,00',
		description: 'Brigadeiro tradicional com moranguinho',
	},
	{
		id: 6,
		recheio: 'óreo',
		value: 'R$ 45,00',
		description: 'Brigadeiro de óreo / casca branca',
	},
	{
		id: 7,
		recheio: 'Kit Kat',
		value: 'R$ 45,00',
		description:
			'Brigadeiro tradicional e brigadeiro branco com kit kat / casca ao leite',
	},
	{
		id: 8,
		recheio: 'Kinder Bueno',
		value: 'R$ 45,00',
		description:
			'Brigadeiro de ninho com kinder bueno e nutella / casca branca',
	},
];
export const Kit = () => {
	return (
		<>
			<Global />
			<HeaderG />
			<HomePages>
				<div className='container-homeP'>
					<Fade cascade direction='up'>
						<TextHomeInicial>
							<span className='title-homeP'>Kit com 4 ovos de 50g</span>
							<p className='paragrafo-homeP'>Escolha 4 opções de recheio !</p>
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
						<a
							href='https://wa.me/5511919462746?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20!'
							className='link-wpp'>
							<button className='btnWpp'>
								<AiOutlineWhatsApp className='icon-wpp' size={30} color='#fafafa' />
								Encomendar !
							</button>
						</a>
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
