import { base_url } from './Constants';
import { Category } from '../Interface/Category';


type JSONResponse = {
    data?: {
        result: Category[],
    }
}

const fetchData = async () => {
    const result = await fetch(base_url + 'getAllCategories');

    const { data }: JSONResponse = await result.json();

    categories = data.result;
}

fetchData();

export var categories: Category[] = [];
