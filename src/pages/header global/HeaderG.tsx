import React, { useState } from 'react';
import Global from '../../components/Global';
import { HomeGS, LogoHG } from './style';
import { AiOutlineMenu } from 'react-icons/ai';
import { Fade } from 'react-awesome-reveal';
import {
	BurgerDiv,
	LineRouter,
	RouterSocial,
} from '../../components/header/style';
import LogoType from './logo.png';
import { Link } from 'react-router-dom';
export const HeaderG = () => {
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
					<Fade direction='up' cascade>
						<Link to='/'>
							<RouterSocial style={{ fontSize: '2em' }}>Inicio</RouterSocial>
						</Link>
						<LineRouter />
						<Link to='/pascoa'>
							<RouterSocial style={{ fontSize: '2em' }}>
								Ovos de pascoa
							</RouterSocial>
						</Link>
						<LineRouter />
						<RouterSocial style={{ fontSize: '2em' }}>
							Cone trufado
						</RouterSocial>
						<LineRouter />
						<RouterSocial style={{ fontSize: '2em' }}>Tortas</RouterSocial>
						<LineRouter />
						<RouterSocial style={{ fontSize: '2em' }}>Bolos</RouterSocial>
						<LineRouter />
					</Fade>
				</BurgerDiv>
				<LogoHG>
					<img src={LogoType} alt='logo' className='image-logo' />
				</LogoHG>
			</HomeGS>
		</>
	);
};
