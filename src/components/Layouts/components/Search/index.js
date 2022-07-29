import React, { useEffect, useState, useRef } from 'react';

import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import * as apiService from '~/services';
import AccountItem from '~/components/AccountItems';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResultSearch, setShowResultSearch] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounced = useDebounce(searchValue, 650);

    const handleClearSearchBtn = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            try {
                setLoading(true);
                const res = await apiService.search(debounced);
                setSearchResult(res);

                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        fetchApi();
    }, [debounced]);

    const handleHideResult = () => {
        setShowResultSearch(false);
    };
    const handleChangeInput = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    const handleSubmitSearch = (e) => {};
    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResultSearch && searchResult.length > 0}
                render={(atrrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...atrrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {searchResult.map((res) => (
                                <AccountItem key={res.id} data={res} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search account and videos"
                        spellCheck={false}
                        onChange={handleChangeInput}
                        onFocus={() => setShowResultSearch(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear-search-btn')} onClick={handleClearSearchBtn}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading-search')} icon={faSpinner} />}
                    <button
                        className={cx('search-btn')}
                        onClick={handleSubmitSearch}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
