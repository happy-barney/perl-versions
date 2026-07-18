
const { perl_versions, decode_version } = require ('../perl-versions');

describe ('perl_versions () target=unknown', () => {
    test ('throws on unknown target', () => {
        expect (() => perl_versions ({ since_perl: decode_version ('5.20'), target: 'unknown' }))
            .toThrow ('Unknown target');
    });
});
