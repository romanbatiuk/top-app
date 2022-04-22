import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({
	color = 'white',
	children,
	className,
	...props
}: CardProps): JSX.Element => (
	<div className={cn(styles.card, className, { [styles.blue]: color == 'blue' })} {...props}>
		{children}
	</div>
);
