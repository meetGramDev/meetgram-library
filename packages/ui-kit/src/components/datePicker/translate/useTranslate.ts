import {be} from './dictionaries/be';
import {es} from './dictionaries/es';
import {en} from './dictionaries/en';
import {ru} from './dictionaries/ru';
import {uk} from './dictionaries/uk';

export default function useTranslate(locale?: string){
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