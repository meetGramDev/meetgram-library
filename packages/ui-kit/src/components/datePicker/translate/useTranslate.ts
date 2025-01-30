import {useRouter} from "next/router";


/*const dictionaries = {
    be: () => import('./dictionaries/be').then(module => module),
    en: () => import('./dictionaries/en').then(module => module),
    es: () => import('./dictionaries/es').then(module => module),
    ru: () => import('./dictionaries/ru').then(module => module),
    uk: () => import('./dictionaries/uk').then(module => module),
}*/

import {be} from './dictionaries/be';
import {es} from './dictionaries/es';
import {en} from './dictionaries/en';
import {ru} from './dictionaries/ru';
import {uk} from './dictionaries/uk';

export default function useTranslate(){
    const {locale} = useRouter();

    switch (locale){
        case 'be':
            return be
        case 'es':
            return es
        case 'ru':
            return ru
        case 'uk':
            return uk
        default:
            return en
    }
}