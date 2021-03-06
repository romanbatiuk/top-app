import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '../../helpers/api';
import { useState } from 'react';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IReviewForm>();

	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>();

	const onSubmit = async (formData: IReviewForm) => {
		try {
			const response = await axios.post(API.review.create, { ...formData, productId });
			console.log(response);

			if (response.status === 201) {
				setIsSuccess(true);
				reset();
			} else {
				setError('Что-то пошло не так');
			}
		} catch ({ message }) {
			console.log(message);
			setError(message as string);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input
					{...register('name', { required: { value: true, message: 'Заполните имя' } })}
					placeholder="Имя"
					error={errors.name}
				/>
				<Input
					{...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
					placeholder="Заголовок отзыва"
					error={errors.title}
				/>

				<div className={styles.rating}>
					<div>Оценка курса:</div>
					<Controller
						control={control}
						name="rating"
						rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								ref={field.ref}
								setRating={field.onChange}
								error={errors.rating}
							/>
						)}
					/>
				</div>

				<Textarea
					{...register('description', {
						required: { value: true, message: 'Заполните текст отзыва' }
					})}
					className={styles.textArea}
					placeholder="Текст отзыва"
					error={errors.description}
				/>

				<div className={styles.submit}>
					<Button appearance="primary">Отправить</Button>
					<span className={styles.submitInfo}>
						* Перед публикацией отзыва о курсе, он пройдет предварительную модерацию и проверку
					</span>
				</div>
			</div>

			{isSuccess && (
				<div className={styles.success}>
					<div className={styles.successTitle}>Ваш отзыв отправлен</div>
					<div>Спасибо за Ваш отзыв, он будет опубликован после проверки модератором!</div>
					<CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
				</div>
			)}

			{error && (
				<div className={styles.error}>
					<div className={styles.errorTitle}>{error}</div>
					<CloseIcon className={styles.close} onClick={() => setError(undefined)} />
				</div>
			)}
		</form>
	);
};
