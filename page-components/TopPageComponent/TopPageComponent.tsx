// import styles from './Htag.module.css';
import { TopPageComponentProps } from './TopPageComponent.props';

export const TopPageComponent = ({
	page,
	products,
	firstCategory
}: TopPageComponentProps): JSX.Element => {
	return <>{products && products.length}</>;
};
