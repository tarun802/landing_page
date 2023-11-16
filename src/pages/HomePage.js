import React from 'react';
import Users from '../components/Users/Users';
import Content from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree, heroFour } from '../data/HeroData';
import { Heading } from '../globalStyles';

const HomePage = () => {
	return (
		<>
			<Hero />
			<Features />
			<Users />
			<Heading id="explore">Top Picks</Heading>
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Content {...heroFour} />
		</>
	);
};

export default HomePage;
