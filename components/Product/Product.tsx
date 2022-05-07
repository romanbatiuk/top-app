import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Htag } from '../Htag/Htag';
import { declOfNum, priceRegEx } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import { Ptag } from '../Ptag/Ptag';
import { Button } from '../Button/Button';
import Image from 'next/image';
import React, { useState } from 'react';
import { Review } from '../Review/Review';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);

	return (
		<div className={styles.productWrapper}>
			<Card className={styles.product}>
				<div className={styles.name}>
					<Image
						className={styles.image}
						src="https://img-c.udemycdn.com/course/50x50/1035000_c1aa_6.jpg"
						alt={product.title}
						width={70}
						height={70}
					/>

					<div>
						<Htag tag="h3">{product.title}</Htag>
						<div className={styles.categories}>
							{product.categories.map((c) => (
								<Tag color="ghost" key={c}>
									{c}
								</Tag>
							))}
						</div>
					</div>
				</div>

				<div className={styles.prices}>
					<div>
						<span className={styles.price}>{priceRegEx(product.price)}</span>&nbsp;&nbsp;
						{product.oldPrice && (
							<Tag className={styles.oldPrice} color="green">
								<span className="visualyHidden">скидка</span>
								{priceRegEx(product.price - product.oldPrice)}
							</Tag>
						)}
					</div>
					<div>
						<span className={styles.price}>{priceRegEx(product.credit)}</span>
					</div>
					<div>
						<Rating rating={product.reviewAvg ?? product.initialRating} />
					</div>
					<div className={styles.priceDescription}>цена курса</div>
					<div className={styles.priceDescription}>в рассрочку</div>
					<div className={styles.priceDescription}>
						{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
					</div>
				</div>

				<div className={styles.divider}>
					<Divider className={styles.hr} />
				</div>

				<div className={styles.description}>
					<Ptag size="medium">{product.description}</Ptag>
				</div>

				<div>
					{product.characteristics.map((c) => (
						<div className={styles.characteristics} key={c.name}>
							<div className={styles.characteristicsName}>{c.name}</div>
							<div className={styles.characteristicsDots}></div>
							<div className={styles.characteristicsValue}>{c.value}</div>
						</div>
					))}
					<div className={styles.tags}>
						{product.tags.map((t) => (
							<Tag color="ghost" key={t} className={styles.tag}>
								{t}
							</Tag>
						))}
					</div>
				</div>

				<div>
					{product.advantages && (
						<div className={styles.advantages}>
							<div className={styles.advTitle}>Преимущества</div>
							<Ptag size="medium">{product.advantages}</Ptag>
						</div>
					)}
					{product.disAdvantages && (
						<div className={styles.disAdvantages}>
							<div className={styles.advTitle}>Недостатки</div>
							<Ptag size="medium">{product.disAdvantages}</Ptag>
						</div>
					)}
				</div>

				<div className={styles.divider}>
					<Divider className={styles.hr} />
				</div>
				<div className={styles.actions}>
					<Button appearance="primary" className={styles.button}>
						Подробнее о курсе
					</Button>
					<Button
						appearance="ghost"
						className={styles.button}
						arrow={isReviewOpen ? 'down' : 'right'}
						onClick={() => setIsReviewOpen(!isReviewOpen)}>
						Отзывы о курсе
					</Button>
				</div>
			</Card>

			<Card
				color="blue"
				className={cn(styles.reviews, {
					[styles.opened]: isReviewOpen,
					[styles.closed]: !isReviewOpen
				})}>
				{product.reviews.map((r) => (
					<React.Fragment key={r._id}>
						<Review review={r} />
						<Divider className={styles.hr} />
					</React.Fragment>
				))}
			</Card>
		</div>
	);
};
