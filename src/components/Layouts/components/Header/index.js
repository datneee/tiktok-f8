import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSpinner,
    faCircleXmark,
    faMagnifyingGlass,
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
    faLanguage,
    faUpload,
    faCloudArrowUp,
    faMessage,
    faPager,
    faPaperPlane,
    faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItems';
import Button from '~/components/Buttons';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng anh ( English )',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt ( Việt Nam )',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp ',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt',
    },
];
function Header() {
    const currenUser = true;

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ ',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Nhận xu ',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt ',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: '/logout?...',
            role: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner-header')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <HeadlessTippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(atrrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...atrrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search account and videos" spellCheck={false} />
                        <button className={cx('clear-search-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading-search')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    <Button text={true}>+ Tải lên</Button>
                    {currenUser ? (
                        <>
                            <Tippy content="Hộp thư" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy content="Tin nhắn" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary>Log In</Button>
                    )}
                    <Menu items={currenUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currenUser ? (
                            <img
                                alt="Pham Van Dat"
                                className={cx('actions-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7121549785044516870~c5_720x720.jpeg?x-expires=1658286000&x-signature=uyYuTSAnGDZeS003Ex3fA4BgPGs%3D"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
