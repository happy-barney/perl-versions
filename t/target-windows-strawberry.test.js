
const { perl_versions, decode_version } = require ('../perl-versions');

const act = (options) => perl_versions ({
    since_perl: options.since_perl ? decode_version (options.since_perl) : undefined,
    until_perl: options.until_perl ? decode_version (options.until_perl) : undefined,
    with_devel: options.with_devel,
    target: 'windows-strawberry',
});

describe ('perl_versions () target=windows-strawberry', () => {
    test ('does not include 5.8', () => {
        const result = act ({ since_perl: '5.8' });
        expect (result).not.toContain ('5.8');
    });

    test ('includes 5.14', () => {
        const result = act ({ since_perl: '5.14' });
        expect (result).toContain ('5.14');
    });

    test ('does not include devel', () => {
        const result = act ({ since_perl: '5.38', with_devel: true });
        expect (result).not.toContain ('devel');
    });
});
