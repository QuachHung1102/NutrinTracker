//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here
// export interface ExampleInitInter {
//     example: string;
// }
// export interface Action {
//     type: string;
//     payload?: any;
// }
// export const initialState: ExampleInit = {
//     example: 'example'
// };

import { ItemFormat, NutriFormat, UserFormat } from "../interfaceFormat";

export interface CurrentCache {
    user: UserFormat;
    todayNutri: NutriFormat;
    goalNutri?: NutriFormat;
    currentItem: ItemFormat[];
}

export interface Action {
    type: string;
    payload?: UserFormat | NutriFormat;
}

export const initialState: CurrentCache = {
    user: {
        name: '',
        age: '',
        imgAddress: '',
        email: '',
    },
    todayNutri: {},
    currentItem: []
};