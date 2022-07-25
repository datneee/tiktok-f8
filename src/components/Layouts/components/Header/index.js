import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

import config from '~/config';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Buttons';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Layouts/components/Search';

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
                    <Link className={cx('logo-link')} to={config.routes.home}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>
                <Search />
                <div className={cx('actions')}>
                    <Button text={true}>+ Tải lên</Button>
                    {/* <UploadIcon/> */}
                    {currenUser ? (
                        <>
                            <Tippy content="Tin nhắn" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    {/* <FontAwesomeIcon icon={faEnvelopeOpenText} /> */}
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <Button primary>Log In</Button>
                    )}
                    <Menu items={currenUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currenUser ? (
                            <Image
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
