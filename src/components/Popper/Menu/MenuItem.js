import Button from '~/components/Buttons';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        role: data.role,
    });
    return (
        <Button className={classes} to={data.to} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
