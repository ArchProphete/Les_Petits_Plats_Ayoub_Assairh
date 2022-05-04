import { createElementToCard, deleteDuplicateValue } from '../utils/utils.js';

export class DisplaySelects {
    ingredient = [];
    apparels = [];
    ustensils = [];

    constructor(recipes) {
        this.recipes = recipes;
        this.selectInput = document.getElementById('selects-input');
    }

    createSelects() {
        // INGREDIENTS
        this.elIngredients = createElementToCard('input', null, [
            { attribut: 'name', content: 'Ingredient' },
            { attribut: 'placeholder', content: 'Ingrédients' },
            { attribut: 'type', content: 'text' },
        ]);

        this.elIconI = createElementToCard('i', 'null', [
            { attribut: 'class', content: 'fa-solid fa-chevron-down' },
        ]);

        this.elUlIngredients = createElementToCard('ul', null, [
            { attribut: 'id', content: 'ingredients-dropdown' },
        ]);

        this.recipes.map((recipe) => {
            recipe.ingredients.map((ingredient) => {
                this.ingredient.push(ingredient.ingredient.toLowerCase());
            });
        });

        this.uniqIngredient = deleteDuplicateValue(this.ingredient);

        this.uniqIngredient.map((ingredient) => {
            this.elLiIngredients = createElementToCard('li', `${ingredient}`, [
                { attribut: 'class', content: 'dropdown' },
            ]);
            this.elUlIngredients.append(this.elLiIngredients);
        });

        // APPAREILS
        this.elApparel = createElementToCard('input', null, [
            { attribut: 'name', content: 'apparel' },
            { attribut: 'placeholder', content: 'Appareils' },
            { attribut: 'type', content: 'text' },
        ]);

        this.elIconA = createElementToCard('i', 'null', [
            { attribut: 'class', content: 'fa-solid fa-chevron-down' },
        ]);

        this.elUlApparels = createElementToCard('ul', null, [
            { attribut: 'id', content: 'apparels-dropdown' },
        ]);

        this.recipes.map((appliance) => {
            this.apparels.push(appliance.appliance.toLowerCase());
        });

        this.uniqApparels = deleteDuplicateValue(this.apparels);

        this.uniqApparels.map((apparel) => {
            this.elLiApparels = createElementToCard('li', `${apparel}`, [
                { attribut: 'class', content: 'dropdown' },
            ]);
            this.elUlApparels.append(this.elLiApparels);
        });

        // USTENCILES
        this.elUstensil = createElementToCard('input', null, [
            { attribut: 'name', content: 'utensil' },
            { attribut: 'placeholder', content: 'Ustensiles' },
            { attribut: 'type', content: 'text' },
        ]);

        this.elIconU = createElementToCard('i', 'null', [
            { attribut: 'class', content: 'fa-solid fa-chevron-down' },
        ]);

        this.elUlUstensils = createElementToCard('ul', null, [
            { attribut: 'id', content: 'ustensils-dropdown' },
        ]);

        this.recipes.map((recipe) => {
            this.ustensils = this.ustensils.concat(
                recipe.ustensils.map((name) => name.toLowerCase())
            );
        });

        let uniqUstensils = deleteDuplicateValue(this.ustensils);

        uniqUstensils.map((ustensil) => {
            this.elLiUstensil = createElementToCard('li', `${ustensil}`, [
                { attribut: 'class', content: 'dropdown' },
            ]);
            this.elUlUstensils.append(this.elLiUstensil);
        });

        // FINAL APPENDS
        this.selectInput.append(
            this.elUlIngredients,
            this.elUlApparels,
            this.elUlUstensils,
            this.elIngredients,
            this.elIconI,
            this.elApparel,
            this.elIconA,
            this.elUstensil,
            this.elIconU
        );
    }
}
