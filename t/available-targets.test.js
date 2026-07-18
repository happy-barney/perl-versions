
const { available_targets } = require ('../perl-versions');

describe ('available_targets ()', () => {
    test ('returns all supported targets', () => {
        const targets = available_targets ();
        expect (targets).toContain ('perl');
        expect (targets).toContain ('perl-tester');
        expect (targets).toContain ('macos');
        expect (targets).toContain ('windows-strawberry');
    });

    test ('returns an array', () => {
        expect (Array.isArray (available_targets ())).toBe (true);
    });
});
