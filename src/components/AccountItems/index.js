import classnames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

const cx = classnames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                alt="Dat"
                src="https://thuthuatnhanh.com/wp-content/uploads/2019/10/hinh-anime-boy-chang-hoc-sinh.jpg"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>datneee</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('name')}>Phạm Văn Đạt</span>
            </div>
        </div>
    );
}

export default AccountItem;
