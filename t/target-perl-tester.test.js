
const { perl_versions, decode_version } = require ('../perl-versions');

const act = (options) => perl_versions ({
    since_perl: options.since_perl ? decode_version (options.since_perl) : undefined,
    until_perl: options.until_perl ? decode_version (options.until_perl) : undefined,
    with_devel: options.with_devel,
    target: 'perl-tester',
});

describe ('perl_versions () target=perl-tester', () => {
    test ('defaults to perl-tester when no target specified', () => {
        const result = perl_versions ({ since_perl: decode_version ('5.20') });
        const explicit = act ({ since_perl: '5.20' });
        expect (result).toEqual (explicit);
    });

    test ('includes 5.42', () => {
        const result = act ({ since_perl: '5.40' });
        expect (result).toContain ('5.40');
        expect (result).toContain ('5.42');
    });
});
