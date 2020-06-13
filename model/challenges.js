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
            { id: 1, idDisplay: 1, challengeId: 1, answer: 'PATO', image: images[0].path, complete: false },
            { id: 2, idDisplay: 2, challengeId: 1, answer: 'GATO', image: images[1].path, complete: false  },
            { id: 3, idDisplay: 3, challengeId: 1, answer: 'CASA', image: images[2].path, complete: false  },
            { id: 4, idDisplay: 4, challengeId: 1, answer: 'VELA', image: images[3].path, complete: false  },
            { id: 5, idDisplay: 5, challengeId: 1, answer: 'MOTO', image: images[4].path, complete: false  },
        ]
    },
    { 
        id: 2, 
        title: 'Desafio 2', 
        subtitle: 'Desafios', 
        route: 'cameraAarea',
        challenges: [
            { id: 6, idDisplay: 1, challengeId: 2, answer: 'PATO', complete: false  },
            { id: 7, idDisplay: 2, challengeId: 2, answer: 'PATO', complete: false  },
            { id: 8, idDisplay: 3, challengeId: 2, answer: 'PATO', complete: false  },
            { id: 9, idDisplay: 4, challengeId: 2, answer: 'PATO', complete: false  },
            { id: 10, idDisplay: 5, challengeId: 2, answer: 'PATO', complete: false  },
        ]
    },
]