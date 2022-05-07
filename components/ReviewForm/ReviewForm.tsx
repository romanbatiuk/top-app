import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';

export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => (
	<>
		<div className={cn(styles.reviewForm, className)} {...props}>
			<Input placeholder="Имя" />
			<Input placeholder="Заголовок отзыва" />

			<div className={styles.rating}>
				<div>Оценка курса:</div>
				<Rating rating={0} />
			</div>

			<Textarea className={styles.textArea} placeholder="Текст отзыва" />

			<div className={styles.submit}>
				<Button appearance="primary">Отправить</Button>
				<span className={styles.submitInfo}>
					* Перед публикацией отзыва о курсе, он пройдет предварительную модерацию и проверку
				</span>
			</div>
		</div>

		<div className={styles.success}>
			<div className={styles.successTitle}>Ваш отзыв отправлен</div>
			<div>Спасибо за Ваш отзыв, он будет опубликован после проверки модератором!</div>
			<CloseIcon className={styles.close} />
		</div>
	</>
);
