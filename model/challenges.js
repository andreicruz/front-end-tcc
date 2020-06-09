import { icons } from '../utils/icons';
import * as object from '../utils/imagesChallenge';

const images = object.images;

export const objects = [
    { 
        id: 1, 
        title: 'Desafio 1', 
        subtitle: 'Desafios', 
        route: 'cameraAarea',
        challenges: [
            { id: 1, challengeId: 1, answer: 'PATO', image: images[0].path },
            { id: 2, challengeId: 1, answer: 'PATO' },
            { id: 3, challengeId: 1, answer: 'PATO' },
            { id: 4, challengeId: 1, answer: 'PATO' },
            { id: 5, challengeId: 1, answer: 'PATO' },
        ]
    },
    { 
        id: 2, 
        title: 'Desafio 2', 
        subtitle: 'Desafios', 
        route: 'cameraAarea',
        challenges: [
            { id: 1, challengeId: 2, answer: 'PATO' },
            { id: 2, challengeId: 2, answer: 'PATO' },
            { id: 3, challengeId: 2, answer: 'PATO' },
            { id: 4, challengeId: 2, answer: 'PATO' },
            { id: 5, challengeId: 2, answer: 'PATO' },
        ]
    },
]