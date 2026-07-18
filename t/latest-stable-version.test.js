
const { perl_versions, decode_version, latest_stable_version } = require ('../perl-versions');

describe ('latest_stable_version', () => {
    test ('returns the highest non-devel version', () => {
        const latest = latest_stable_version ();
        expect (latest).not.toBe ('devel');
        expect (latest).toMatch (/^\d+\.\d+$/);
    });

    test ('returns a version present in the available list', () => {
        const latest = latest_stable_version ();
        const result = perl_versions ({ since_perl: decode_version (latest) });
        expect (result).toContain (latest);
    });
});
