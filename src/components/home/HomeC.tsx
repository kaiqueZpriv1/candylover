import React from 'react';
import { FooterHome, HomeS, RouterPage } from './style';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

export const HomeC = () => {
	return (
		<HomeS>
			<div className='container-home'>
				<Fade direction='left'>
					<Link to='/pascoa'>
						<RouterPage>Ovos de páscoa</RouterPage>
					</Link>
				</Fade>
				<Fade direction='right'>
					<RouterPage>Cone trufado</RouterPage>
				</Fade>
				<Fade direction='left'>
					<RouterPage>Tortas</RouterPage>
				</Fade>
				<Fade direction='right'>
					<RouterPage>Bolos</RouterPage>
				</Fade>
			</div>
			<FooterHome>
				<Fade direction='up' cascade>
					<span className='text-footer'>São Paulo - SP</span>
					<span className='text-footer'>Horario de atendimento: 8h ás 20h</span>
					<span className='text-footer'>11 98018-2164</span>
				</Fade>
			</FooterHome>
		</HomeS>
	);
};
