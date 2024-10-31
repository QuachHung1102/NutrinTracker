import * as FormatData from "./interfaceFormat"

export const factoryData: {
    itemList: FormatData.ItemFormat[];
    spiceList: FormatData.ItemSpiceFormat[];
    recipeList: FormatData.RecipeFormat[];
    mealList?: FormatData.RecipeFormat[];
    cateList: FormatData.CateFoodFormat[];
    targetNutri: FormatData.NutriFormat;
} = {
    cateList: [
        {
            name: 'Rau củ',
            items: ['Cà chua', 'Cà rốt', 'Dưa leo', 'Hành tây', 'Rau mùi']
        },
        {
            name: 'Thịt cá',
            items: ['Cá hồi', 'Cá thu', 'Cá ngừ', 'Cá chép', 'Cá trê']
        },
        {
            name: 'Gia vị',
            items: []
        }
    ],
    targetNutri: {
        calo: 2500,
        carb: 300,
        protein: 50,
        fat: 70,
        fiber: 30,
        sugar: 50
    },
    itemList: [
        {
            name: 'Cà chua',
            unit: 'Quả',
            amount: 1,
            nutri: {
                calo: 20,
                carb: 4,
                protein: 1,
                fat: 0,
                fiber: 1,
                sugar: 2
            },
            info: 'Cà chua có chứa nhiều vitamin C và lycopene',
            imgAddress: {
                uri: require('../assets/photos/food/Tomato.jpg')
            },
            related: [
                {
                    name: 'Cà chua bi',
                    unit: 'Quả',
                    amount: 1,
                    nutri: {
                        calo: 10,
                        carb: 2,
                        protein: 1,
                        fat: 0,
                        fiber: 1,
                        sugar: 1
                    },
                    imgAddress: {
                        uri: require('../assets/photos/food/Tomato.jpg')
                    }
                }
            ]
        },
        {
            name: 'Cà rốt',
            unit: 'Củ',
            amount: 1,
            nutri: {
                calo: 30,
                carb: 5,
                protein: 1,
                fat: 0,
                fiber: 2,
                sugar: 2
            },
            info: 'Cà rốt có chứa nhiều vitamin A và beta-carotene',
            imgAddress: {
                uri: require('../assets/photos/food/Tomato.jpg')
            }
        },
        {
            name: 'Dưa leo',
            unit: 'Quả',
            amount: 1,
            nutri: {
                calo: 15,
                carb: 3,
                protein: 1,
                fat: 0,
                fiber: 1,
                sugar: 2
            },
            info: 'Dưa leo có chứa nhiều nước và vitamin K',
            imgAddress: {
                uri: require('../assets/photos/food/Tomato.jpg')
            }
        },
        {
            name: 'Hành tây',
            unit: 'Củ',
            amount: 1,
            nutri: {
                calo: 40,
                carb: 9,
                protein: 1,
                fat: 0,
                fiber: 1,
                sugar: 4
            },
            info: 'Hành tây có chứa nhiều vitamin C và quercetin',
            imgAddress: {
                uri: require('../assets/photos/food/Tomato.jpg')
            }
        },
        {
            name: 'Rau mùi',
            unit: 'Bó',
            amount: 1,
            nutri: {
                calo: 5,
                carb: 1,
                protein: 0,
                fat: 0,
                fiber: 1,
                sugar: 0
            },
            info: 'Rau mùi có chứa nhiều vitamin A và C',
            imgAddress: {
                uri: require('../assets/photos/food/Tomato.jpg')
            }
        }
    ],
    spiceList: [
        {
            name: 'Muối',
            unit: 'Muỗng cà phê'
        },
        {
            name: 'Đường',
            unit: 'Muỗng cà phê'
        },
        {
            name: 'Tiêu',
            unit: 'Muỗng cà phê'
        },
        {
            name: 'Ớt',
            unit: 'Quả'
        },
        {
            name: 'Tỏi',
            unit: 'Tép'
        },
        {
            name: 'Hành',
            unit: 'Củ'
        },
        {
            name: 'Gừng',
            unit: 'Lát'
        },
        {
            name: 'Nước mắm',
            unit: 'Muỗng canh'
        },
        {
            name: 'Dầu ăn',
            unit: 'Muỗng canh'
        },
        {
            name: 'Xì dầu',
            unit: 'Muỗng canh'
        },
        {
            name: 'Mật ong',
            unit: 'Muỗng canh'
        },
        {
            name: 'Giấm',
            unit: 'Muỗng canh'
        },
        {
            name: 'Rượu trắng',
            unit: 'Muỗng canh'
        },
        {
            name: 'Bột ngọt',
            unit: 'Muỗng cà phê'
        },
        {
            name: 'Hạt nêm',
            unit: 'Muỗng cà phê'
        },
        {
            name: 'Ớt bột',
            unit: 'Muỗng cà phê'
        },
        {
            name: 'Bột nghệ',
            unit: 'Muỗng cà phê'
        },
        {
            name: 'Bột quế',
            unit: 'Muỗng cà phê'
        },
        {
            name: 'Bột ớt',
            unit: 'Muỗng cà phê'
        }
    ],

    recipeList: [
        {
            id: `nutri1@gmail.com-00345`,
            name: 'Salad cà chua',
            imgAddress: {
                uri: require('../assets/photos/food/Tomato.jpg')
            },
            preTime: 10,
            cookTime: 0,
            serving: 2,
            ingredients: [
                ['Cà chua', 2],
                ['Cà rốt', 1],
                ['Dưa leo', 1],
                ['Hành tây', 1],
                ['Rau mùi', 1],
            ],
            steps: [
                {
                    name: 'Bước 1',
                    steps: [
                        ['Bước 1: Cắt cà chua, cà rốt, dưa leo, hành tây, rau mùi nhỏ'],
                        ['Bước 2: Trộn đều các nguyên liệu'],
                        ['Bước 3: Thêm gia vị và chút dầu ăn'],
                        ['Bước 4: Trộn đều và thưởng thức'],
                    ]
                }
            ],
            nutri: {
                calo: 100,
                carb: 20,
                protein: 5,
                fat: 1,
                fiber: 2,
                sugar: 5
            },
            info: 'Salad cà chua giúp cung cấp vitamin C và beta-carotene',
            spice: [
                ['Muối', 1],
                ['Tiêu', 1],
                ['Dầu ăn', 1],
                ['Giấm', 1]
            ]
        },
    ]
}