import { Image } from './image';


export interface User {
    id: number;
    userName: string;
    email: any;
    created: Date;
    lastActive: Date;
    images: Image[];
}
