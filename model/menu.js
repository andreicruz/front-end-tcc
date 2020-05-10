import { icons } from '../utils/icons';

export const objects = [
    { 
        id: 1, 
        title: 'Usar a câmera', 
        icon: icons.iconFaCamera, 
        route: 'Camera',
        leftCard: { 
            title: 'Utilize sua câmera',
            description: 'É possível utilizar sua câmera para reconhecer textos.',
        } 
    },
    { 
        id: 2, 
        title: 'Desafios', 
        route: 'Camera',
        icon: icons.iconFaList, 
        leftCard: { 
            title: 'Desafios',
            description: 'Jogue os desafios para aprimorar seus conhecimentos.',            
        } 
    },
]
