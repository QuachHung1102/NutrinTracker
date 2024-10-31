export interface UserFormat {
    name: string;
    age: string;
    imgAddress: ImgAddressFormat | string;
    email: string;
}

export interface IndayNutriFormat {
    nutri: NutriFormat;
}

export interface NutriFormat {
    calo?: number;
    carb?: number;
    fat?: number;
    protein?: number;
    fiber?: number;
    sugar?: number;
}

export interface ImgAddressFormat {
    uri: any;
}

export interface ScheduleFormat {
    date: Date | Date[];
    reminder: boolean;
}

export interface ItemSpiceFormat {
    name: string;
    unit: string;
}

export interface ItemFormat {
    name: string;
    unit?: string;
    amount?: number;
    nutri?: NutriFormat;
    info?: string | string[];
    imgAddress?: ImgAddressFormat;
    related?: ItemFormat[];
    recipeRelated?: RecipeFormat[];
}

export interface RecipeFormat {
    id: `${UserFormat['email']}-${string}`;
    author?: UserFormat;
    name: string;
    info?: string;
    imgAddress?: ImgAddressFormat;
    nutri?: NutriFormat;
    ingredients: [ItemFormat['name'], number][];
    spice?: [ItemSpiceFormat['name'], number][];
    serving?: number;
    preTime?: number;
    cookTime?: number;
    steps: CookStepFormat[];
    related?: RecipeFormat[];
    cmt?: {
        user: UserFormat;
        content: string;
        time: Date;
        rate: number;
    }
}

export interface CookStepFormat {
    name: string;
    steps: [string, ImgAddressFormat?][];
}

export interface MealFormat {
    name: 'Bữa sáng' | 'Bữa trưa' | 'Bữa tối' | 'Khác';
    totalNutri: NutriFormat;
    recipes: RecipeFormat[];
}

export interface CateFoodFormat {
    name: string;
    items: string[];
}