import { createElementToCard } from '../utils/utils.js';

export class DisplaySearchFilter {
    constructor() {
        this.searchFilter = document.getElementById('search-filter');
    }

    createSearchFilter() {
        this.elInput = createElementToCard('input', null, [
            { attribut: 'id', content: 'search-filter' },
            { attribut: 'type', content: 'text' },
            { attribut: 'placeholder', content: 'Rechercher une recette' },
            { attribut: 'tabindex', content: '2' },
        ]);

        this.elIcon = createElementToCard('i', null, [
            { attribut: 'class', content: 'fa-solid fa-magnifying-glass' },
        ]);

        this.elLabel = createElementToCard('label', null, null);

        this.elLabel.append(this.elInput, this.elIcon);
        this.searchFilter.appendChild(this.elLabel);
    }
}
