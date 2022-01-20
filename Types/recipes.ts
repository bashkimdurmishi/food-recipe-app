export interface IRecipeWithoutSteps {
    preparationMinutes: number;
    cookingMinutes: number;
    aggregateLikes: number;
    spoonacularScore: number;
    sourceName: string;
    extendedIngredients: ExtendedIngredient[];
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    image: string;
    imageType: string;
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    instructions: string;
    analyzedInstructions: AnalyzedInstruction[];
}

export interface IRecipeWithSteps {
    aggregateLikes:           number;
    spoonacularScore:         number;
    sourceName:               string;
    extendedIngredients:      ExtendedIngredient[];
    id:                       number;
    title:                    string;
    readyInMinutes:           number;
    servings:                 number;
    image:                    string;
    summary:                  string;
    cuisines:                 any[];
    dishTypes:                string[];
    diets:                    string[];
    instructions:             string;
    analyzedInstructions:     AnalyzedInstruction[];
}


export interface AnalyzedInstruction {
    name?: string;
    steps?: Step[];
}

export interface Step {
    number?: number;
    step?: string;
    ingredients?: Ent[];
    equipment?: Ent[];
    length?: Length;
}

export interface Ent {
    id?: number;
    name?: string;
    localizedName?: string;
    image?: string;
}

export interface Length {
    number?: number;
    unit?: string;
}

export interface ExtendedIngredient {
    id?: number;
    aisle?: string;
    image?: string;
    consistency?: string;
    name?: string;
    nameClean?: string;
    original?: string;
    originalString?: string;
    originalName?: string;
    amount?: number;
    unit?: string;
    meta?: string[];
    metaInformation?: string[];
    measures?: Measures;
}

export interface Measures {
    us?: Metric;
    metric?: Metric;
}

export interface Metric {
    amount?: number;
    unitShort?: string;
    unitLong?: string;
}
