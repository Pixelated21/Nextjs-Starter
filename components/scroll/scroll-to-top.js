import {useEffect, useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import {classNames} from '../../utils/class-name';

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className='fixed bottom-[30px] right-[15px] z-10'>
            <button
                type='button'
                onClick={scrollToTop}
                className={classNames(
                    isVisible ? 'opacity-100 animate-[spin_1s_ease-in-out_1]' : 'opacity-0 ',
                    ' flex items-center justify-center w-[40px]  h-[40px] shadow-sm  text-white bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 rounded-full transition-all hover:bg-primary focus:outline-none'
                )}
                aria-label='Right Align'
            >
                <FaIcons.FaChevronCircleUp
                    className='h-6 w-6'
                    aria-hidden='true'
                />
            </button>
        </div>
    );
};
