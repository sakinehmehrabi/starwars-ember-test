import DS from 'ember-data';
import { pluralize } from 'ember-inflector';

export default DS.JSONAPISerializer.extend({
    normalize(primaryModelClass, payload, id) {
        return {
            id,
            type: primaryModelClass.modelName,
            attributes: payload,
        };
    },

    normalizeSingleResponse(store, primaryModelClass, payload, id) {
        return { data: this.normalize(primaryModelClass, payload, id) };
    },

    normalizeArrayResponse(store, primaryModelClass, payload) {
        const data = payload.results.map(itemPayload => { 
            const id = itemPayload.url.split(pluralize(primaryModelClass.modelName)).get('lastObject').replace(/\//g, '');
            return this.normalize(primaryModelClass, itemPayload, id);
        });
        return { data };

    }
});
