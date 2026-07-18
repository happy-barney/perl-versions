
const { perl_versions, decode_version } = require ('../perl-versions');

const act = (options) => perl_versions ({
    since_perl: options.since_perl ? decode_version (options.since_perl) : undefined,
    until_perl: options.until_perl ? decode_version (options.until_perl) : undefined,
    with_devel: options.with_devel,
    target: 'macos',
});

describe ('perl_versions () target=macos', () => {
    test ('includes 5.8 through 5.42', () => {
        const result = act ({ since_perl: '5.8' });
        expect (result).toContain ('5.8');
        expect (result).toContain ('5.42');
    });
});
