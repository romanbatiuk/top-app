import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Button, Htag, Ptag, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

const Home = ({ menu }: HomeProps): JSX.Element => {
	// console.log(menu);

	const [counter, setCounter] = useState<number>(0);
	const [rating, setRating] = useState<number>(4);

	useEffect(() => {
		console.log('Counter', counter);
		return function cleanup() {
			console.log('Unmount');
		};
	});

	return (
		<div>
			<Htag tag="h1">{counter}</Htag>
			<Button appearance="primary" arrow="right" onClick={() => setCounter((x) => x + 1)}>
				Submit
			</Button>
			<Button appearance="ghost" arrow="down">
				Submit
			</Button>
			<Ptag size="small">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, molestias omnis dicta
				dolores corrupti praesentium quia saepe est dolorem. Vero odit inventore unde ab nihil
				dignissimos magnam consectetur aliquid aut?
			</Ptag>

			<hr />
			<Tag color="red">Small tag</Tag>
			<Tag color="ghost">Small tag</Tag>
			<Tag color="primary" size="small">
				tag
			</Tag>
			<Tag color="green">tag</Tag>
			<Tag color="gray" href="https://nextjs.org/">
				tag
			</Tag>
			<div>
				<Rating rating={rating} isEditable={true} setRating={setRating} />
			</div>
		</div>
	);
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory
		}
	);

	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
