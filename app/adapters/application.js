import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://swapi.co/api',
    
    init(...args) {
        this._super(...args);
        this.headers = {
            Accept: 'application/json'
        };
    }
});
