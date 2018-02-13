var handlebarsConfig = {
    src: [
        'source/templates/pages/**/*.hbs'
    ],
    fileExtension: '.html',
    dest: 'public',
    ignorePartials: false,
    batch: ['source/templates/partials'],
    watch: [
        'source/templates/**/*.+(php|html|md|hbs|json)',
        'source/data/**/*.+(js|json)'
    ],
    ignoreProduction: [],
    minifyOptions: {
        collapseWhitespace: true,
        removeComments: true
    },
    helpers: {
        entities: function(str) {
            var map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };

            return str.replace(/[&<>"']/g, function(m) { return map[m]; });
        }
    }
};

module.exports = handlebarsConfig;
