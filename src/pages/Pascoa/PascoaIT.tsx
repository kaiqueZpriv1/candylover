import React from 'react';
import { HeaderC } from '../../components/header/HeaderC';
import Global from '../../components/Global';
import { FooterHome, HomeS, RouterPage } from '../../components/home/style';
import { Fade } from 'react-awesome-reveal';

export const PascoaIT = () => {
	return (
		<>
			<Global />
			<HeaderC />
			<HomeS>
				<div className='container-home'>
					<Fade direction='left'>
						<RouterPage>Kit 4 ovos de 50g</RouterPage>
					</Fade>
					<Fade direction='right'>
						<RouterPage>Ovos de 250g</RouterPage>
					</Fade>
					<Fade direction='left'>
						<RouterPage>Ovos Trufados</RouterPage>
					</Fade>
				</div>
				<FooterHome>
					<Fade direction='up' cascade>
						<span className='text-footer'>São Paulo - SP</span>
						<span className='text-footer'>
							Horario de atendimento: 8h ás 20h
						</span>
						<span className='text-footer'>11 98018-2164</span>
					</Fade>
				</FooterHome>
			</HomeS>
		</>
	);
};
