import React from 'react';
import { Container } from '../../globalStyles';
import {
	UserSection,
	UserColumn,
	UserText,
	UserTitle,
	UserRow,
	UserWrapper,
	UserImage,
	UserTextWrapper,
} from './UsersStyles';
import { UsersData } from '../../data/UsersData';

const Users = () => {
	return (
		<UserSection id="user">
			<Container>
				<UserTextWrapper>
					<UserTitle>Browse By Category</UserTitle>
					<UserText>Explore our curated categories to discover podcasts tailored to every passion, mood, and curiosity.</UserText>
				</UserTextWrapper>

				<UserRow>
					{UsersData.map((Users, UsersIndex) => (
						<UserColumn key={UsersIndex}>
							{Users.map((el, index) => (
								<UserWrapper key={index}>
									<UserImage src={`./images/genres/${el.name}.svg`} />
								</UserWrapper>
							))}
						</UserColumn>
					))}
				</UserRow>
			</Container>
		</UserSection>
	);
};

export default Users;


