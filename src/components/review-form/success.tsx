import styles from './review-form.module.css';
import cn from 'classnames'
import { SuccessProps } from './review-form.props';
import CloseIcon from './icon/close.svg'

const Success = ({ setIsSuccess }: SuccessProps): JSX.Element => {
	return (
		<div className={cn(styles.success, styles.panel)}>
			<div className={styles.successTitle}>Review sent successfully</div>
			<div>Thanks your review will published after testing</div>
			<CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
		</div>
	);
};

export default Success;