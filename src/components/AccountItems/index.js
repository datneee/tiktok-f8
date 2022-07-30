import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import styles from './AccountItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Image from '~/components/Image';

const cx = classnames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} alt={data.avatar} src={data.avatar} />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                </h4>
                <span className={cx('name')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
