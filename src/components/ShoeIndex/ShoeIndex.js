import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
	return (
		<Wrapper>
			<MainColumn>
				<Header>
					<Title>Running</Title>
					<StyledSelect
						label="Sort"
						value={sortId}
						onChange={(ev) => setSortId(ev.target.value)}
					>
						<option value="newest">Newest Releases</option>
						<option value="price">Price</option>
					</StyledSelect>
				</Header>
				<Spacer size={34} />
				<ShoeGrid />
			</MainColumn>
			<LeftColumn>
				<Breadcrumbs>
					<Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
					<Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
					<Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
				</Breadcrumbs>
				<Spacer size={42} />
				<ShoeSidebar />
			</LeftColumn>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
`;

const LeftColumn = styled.div`
	flex: 0 1;
	padding: 0 32px 0 0;
`;

const MainColumn = styled.div`
	flex: 5;
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
`;

const StyledSelect = styled(Select)`
	display: flex;
	align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
