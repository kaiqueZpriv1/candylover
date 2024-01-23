import React from 'react';
import { FooterHome, HomeS, RouterPage } from './style';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

export const HomeC = () => {
	const handleIndisponivel = () => {
		alert('Serviço indisponivel no momento');
	};
	return (
		<HomeS>
			<div className='container-home'>
				<Fade direction='left'>
					<Link to='/pascoa'>
						<RouterPage>Ovos de páscoa</RouterPage>
					</Link>
				</Fade>
				<Fade direction='right'>
					<RouterPage
						onClick={handleIndisponivel}
						style={{ background: 'rgba(100, 100, 100, 1)' }}>
						Cone trufado
					</RouterPage>
				</Fade>
				<Fade direction='left'>
					<RouterPage
						onClick={handleIndisponivel}
						style={{ background: 'rgba(100, 100, 100, 1)' }}>
						Tortas
					</RouterPage>
				</Fade>
				<Fade direction='right'>
					<RouterPage
						onClick={handleIndisponivel}
						style={{ background: 'rgba(100, 100, 100, 1)' }}>
						Bolos
					</RouterPage>
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
