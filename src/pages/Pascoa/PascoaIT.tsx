import React, { useState } from 'react';
// import { HeaderC } from '../../components/header/HeaderC';
import Global from '../../components/Global';
import { FooterHome, HomeS, RouterPage } from '../../components/home/style';
import { Link } from 'react-router-dom';
import { HomeGS, LogoHG } from '../header global/style';
import { AiOutlineMenu } from 'react-icons/ai';
import {
	BurgerDiv,
	LineRouter,
	RouterSocial,
} from '../../components/header/style';
import LogoType from '../header global/logo.png';
import { Fade } from 'react-awesome-reveal';
export const PascoaIT = () => {
	const [burger, setBurger] = useState(false);
	const handleSetBurger = () => {
		setBurger(!burger);
	};
	return (
		<>
			<Global />
			<HomeGS>
				<AiOutlineMenu
					className='icon-burger'
					onClick={handleSetBurger}
					color='#000'
					size={60}
				/>
				<BurgerDiv
					style={{
						width: burger ? '65%' : '0',
						paddingLeft: burger ? '15px' : '0',
					}}>
					<Fade direction='up' cascade damping={0.3}>
						<Link to='/'>
							<RouterSocial style={{ fontSize: '1.4em' }}>Inicio</RouterSocial>
						</Link>
						<LineRouter />
						<Link to='/pascoa'>
							<RouterSocial style={{ fontSize: '1.4em' }}>
								Ovos de pascoa
							</RouterSocial>
						</Link>
						<LineRouter />
						<RouterSocial style={{ fontSize: '1.4em' }}>
							Cone trufado
						</RouterSocial>
						<LineRouter />
						<RouterSocial style={{ fontSize: '1.4em' }}>Tortas</RouterSocial>
						<LineRouter />
						<RouterSocial style={{ fontSize: '1.4em' }}>Bolos</RouterSocial>
						<LineRouter />
					</Fade>
				</BurgerDiv>
				<LogoHG>
					<img src={LogoType} alt='logo' className='image-logo' />
				</LogoHG>
			</HomeGS>
			<HomeS>
				<div className='container-home'>
					<Fade direction='left'>
						<Link to='/kit'>
							<RouterPage>Kit 4 ovos de 50g</RouterPage>
						</Link>
					</Fade>
					<Fade direction='right'>
						<Link to='/ovos250'>
							<RouterPage>Ovos de colher 250g</RouterPage>
						</Link>
					</Fade>
					<Fade direction='left'>
						<Link to='/ovostrufados'>
							<RouterPage>Ovos Trufados</RouterPage>
						</Link>
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
