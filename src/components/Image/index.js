import classNames from 'classnames';
import styles from './Image.module.scss';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.defaultImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallBack);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
