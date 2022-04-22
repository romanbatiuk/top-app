import styles from './TopPageComponent.module.css';
import { Card, HhData, Htag, Tag } from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';
import { TopLevelCategory } from '../../interfaces/page.interface';

export const TopPageComponent = ({
	page,
	products,
	firstCategory
}: TopPageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag="h1">{page.title}</Htag>
				{products && (
					<Tag color="gray" size="medium">
						{products.length}
					</Tag>
				)}
				<span>Сортировка</span>
			</div>
			<div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>

			<div className={styles.hhTitle}>
				<Htag tag="h2">Вакансии - {page.category}</Htag>
				<Tag color="red" size="medium">
					hh.ua
				</Tag>
			</div>

			{firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}
		</div>
	);
};
