import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import cn from 'classnames';
import { KeyboardEvent, useEffect, useState } from 'react';

export const Rating = ({
	isEditable = false,
	rating,
	setRating,
	...props
}: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
			return (
				<span
					key={index}
					className={cn(styles.star, {
						[styles.filled]: index < currentRating,
						[styles.editable]: isEditable
					})}
					onMouseEnter={() => changeDisplay(index + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onclick(index + 1)}>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(index + 1, e)}
					/>
				</span>
			);
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (index: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(index);
	};

	const onclick = (index: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(index);
	};

	const handleSpace = (index: number, e: KeyboardEvent<SVGAElement>) => {
		if (e.code != 'Space' || !setRating) {
			return;
		}
		setRating(index);
	};

	return (
		<div {...props}>
			{ratingArray.map((rating: JSX.Element, index: number) => (
				<span key={index}>{rating}</span>
			))}
		</div>
	);
};
