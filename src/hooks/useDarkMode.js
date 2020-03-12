import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = (initialValue) => {
    const [value, setValue] = useLocalStorage('dark-mode', initialValue);

    useEffect(() => {
        if (value){
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [value]);

    return [value, setValue];
}