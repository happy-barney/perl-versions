
const { decode_version, latest_stable_version } = require ('../perl-versions');

describe ('decode_version', () => {
    test ('parses numeric version string', () => {
        const v = decode_version ('5.20');
        expect (v).not.toBeNull ();
        expect (v.major).toBe (5);
        expect (v.minor).toBe (20);
    });

    test ('parses v-prefixed version string', () => {
        const v = decode_version ('v5.30');
        expect (v).not.toBeNull ();
        expect (v.major).toBe (5);
        expect (v.minor).toBe (30);
    });

    test ('returns null for empty string', () => {
        expect (decode_version ('')).toBeNull ();
    });

    test ('returns null for null input', () => {
        expect (decode_version (null)).toBeNull ();
    });

    test ('normalizes patch version to major.minor', () => {
        const v = decode_version ('5.8.1');
        expect (v).not.toBeNull ();
        expect (v.major).toBe (5);
        expect (v.minor).toBe (8);
        expect (v.patch).toBe (0);
    });

    test ('normalizes three-part version to major.minor', () => {
        const v = decode_version ('5.36.3');
        expect (v).not.toBeNull ();
        expect (v.major).toBe (5);
        expect (v.minor).toBe (36);
        expect (v.patch).toBe (0);
    });

    test ('resolves latest to the highest stable version', () => {
        const v = decode_version ('latest');
        expect (v).not.toBeNull ();
        expect (v.major).toBe (5);
        expect (v.minor).toBe (decode_version (latest_stable_version ()).minor);
    });
});
