import type { NextPage } from 'next';
import { Button, Htag, Ptag, Tag } from '../components';

const Home: NextPage = (): JSX.Element => {
	return (
		<div>
			<Htag tag="h1">Text title!</Htag>
			<Button appearance="primary" arrow="right">
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
		</div>
	);
};

export default Home;
