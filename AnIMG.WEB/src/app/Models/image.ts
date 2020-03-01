import { Category } from './category';

export interface Image {
    id: number;
    title?: any;
    filename: string;
    points: number;
    description?: any;
    addedBy: string;
    categories: Category[];
    addTime: Date;
    url: string;
}
