import React, { useState } from 'react';
import { BurgerDiv, Header, LineRouter, Logo, RouterSocial } from './style';
import {
	AiOutlineInstagram,
	AiOutlineMail,
	AiOutlineMenu,
	AiOutlineWhatsApp,
} from 'react-icons/ai';
import LogoType from './image/logo.png';
import { Fade } from 'react-awesome-reveal';
export const HeaderC = () => {
	const [burger, setBurger] = useState(false);
	const handleSetBurger = () => {
		setBurger(!burger);
	};
	return (
		<Header>
			<div className='container-header'>
				<AiOutlineMenu
					className='icon-burger'
					onClick={handleSetBurger}
					style={{ color: burger ? '#000' : '#fafafa' }}
					size={60}
				/>
				<BurgerDiv
					style={{
						width: burger ? '65%' : '0',
						paddingLeft: burger ? '15px' : '0',
					}}>
					<Fade direction='up' cascade>
						<RouterSocial>
							<AiOutlineWhatsApp size={35} color='#075e54' />
							<a
								href='https://wa.me/5511919462746?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20!'
								target='_blank'
								rel='noreferrer'
								className='link-header'>
								WhatsApp
							</a>
						</RouterSocial>
						<LineRouter />
						<RouterSocial>
							<AiOutlineInstagram size={35} color='#C13584' />
							<a
								href='https://www.instagram.com/kah_candylover?igshid=YmMyMTA2M2Y%3D'
								target='_blank'
								rel='noreferrer'
								className='link-header'>
								Instagram
							</a>
						</RouterSocial>
						<LineRouter />
						<RouterSocial>
							<AiOutlineMail size={35} color='#3e65cf' />
							<a
								href='mailto:kahcandylover@gmail.com?subject=&amp;body='
								target='_blank'
								rel='noreferrer'
								className='link-header'>
								E-mail
							</a>
						</RouterSocial>
						<LineRouter />
					</Fade>
				</BurgerDiv>
				<Fade direction='down'>
					<Logo>
						<img src={LogoType} alt='candylover' className='image-logo' />
					</Logo>
				</Fade>
			</div>
		</Header>
	);
};
