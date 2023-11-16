import React from 'react';
import { GiConcentrationOrb } from 'react-icons/gi';
import { FaHeadphones } from "react-icons/fa";
import { PiConfetti } from "react-icons/pi";
import { BsGlobe } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";

const iconStyle = (Icon) => <Icon size="3rem" color="#fefefe" />;

export const featuresData = [
	{
		name: 'Personalized Playlists',
		description:'Tailor your listening experience with personalized playlists.',
		icon: iconStyle(FaHeadphones),
		imgClass: 'one',
	},
	{
		name: 'Discover Hidden Gems',
		description: 'Unearth unique podcasts and hidden gems.',
		icon: iconStyle(GiConcentrationOrb),
		imgClass: 'two',
	},
	{
		name: 'Explore Diverse Content',
		description: 'Explore curated diverse content for every mood and interest',
		icon: iconStyle(FaMagnifyingGlass),
		imgClass: 'three',
	},
	{
		name: 'Exclusive Content Awaits',
		description: 'Unlock a world of exclusive content curated just for you.',
		icon: iconStyle(BsStars),
		imgClass: 'four',
	},
	{
		name: 'Anytime, Anywhere Access',
		description: 'Enjoy the freedom of accessing your favorite podcasts whenever and wherever you want.',
		icon: iconStyle(BsGlobe),
		imgClass: 'five',
	},
	{
		name: 'Join the Community',
		description: 'Connect with like-minded individuals in our vibrant podcast community.',
		icon: iconStyle(PiConfetti),
		imgClass: 'six',
	},
];
