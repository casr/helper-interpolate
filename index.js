/**
 * Get key from object. Probably best used as a subexpression
 * to another helper.
 * e.g. `{{#each (interpolate "people" team)}}...{{/each}}`
 *
 * @param {String} key Key that you want to look up
 * @param {Object} context Object that you want to receive data from
 */
function interpolate(key, context) {
    if (context.hasOwnProperty(key)) {
        return context[key];
    }
}

/**
 * Register with the handlebars instance.
 *
 * @param {Function} handlebars The Handlebars instance to register with
 */
interpolate.register = function (handlebars) {
    handlebars.registerHelper('interpolate', interpolate);
}

module.exports = interpolate;
