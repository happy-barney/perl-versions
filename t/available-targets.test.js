
const { available_targets } = require ('../perl-versions');

const EXPECTED_TARGETS = [
    'perl',
    'perl-buster',
    'perl-bullseye',
    'perl-bookworm',
    'perl-tester',
    'perl-trixie',
    'macos',
    'windows-strawberry',
];

describe ('available_targets ()', () => {
    test ('returns an array', () => {
        expect (Array.isArray (available_targets ())).toBe (true);
    });

    test ('returns exactly the expected number of targets', () => {
        expect (available_targets ()).toHaveLength (EXPECTED_TARGETS.length);
    });

    test.each (EXPECTED_TARGETS) ('includes %s', (target) => {
        expect (available_targets ()).toContain (target);
    });
});
