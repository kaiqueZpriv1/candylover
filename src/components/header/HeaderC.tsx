import React, { useState } from 'react';
import { BurgerDiv, Header, LineRouter, RouterSocial } from './style';
import { AiOutlineMenu } from 'react-icons/ai';
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
					style={{ color: burger ? '#fafafa' : '#000' }}
					size={60}
				/>
				<BurgerDiv
					style={{
						width: burger ? '0%' : '65%',
						paddingLeft: burger ? '0' : '15px',
					}}>
					<RouterSocial>Exemple</RouterSocial>
					<LineRouter />
					<RouterSocial>Exemple</RouterSocial>
					<LineRouter />
					<RouterSocial>Exemple</RouterSocial>
					<LineRouter />
					<RouterSocial>Exemple</RouterSocial>
				</BurgerDiv>
			</div>
		</Header>
	);
};
