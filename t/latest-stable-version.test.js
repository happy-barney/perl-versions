
const { latest_stable_version } = require ('../perl-versions');
const { build_act_for_target } = require ('./test-helper');

// latest_stable_version () is derived from the 'perl' target's list, so it
// must be checked against target: 'perl' explicitly — the default target is
// 'perl-tester', which is a separate list that may lag behind.
const act = build_act_for_target ('perl');

describe ('latest_stable_version', () => {
    test ('returns the current latest stable version', () => {
        // Pinned to a literal on purpose: when a new Perl version is added to
        // the 'perl' target's list, this expectation must be updated too.
        expect (latest_stable_version ()).toBe ('5.44');
    });

    test ('is included in the perl target list without until-perl', () => {
        const result = act ({ since_perl: '5.40' });
        expect (result).toContain (latest_stable_version ());
    });
});
