
const { build_act_for_target } = require ('./test-helper');

const act = build_act_for_target ('perl-bullseye');

const TARGET_PERL_BULLSEYE_OLDEST = '5.30';
const TARGET_PERL_BULLSEYE_NEWEST = '5.42';
const TARGET_PERL_BULLSEYE_HAS_DEVEL = false;

describe ('perl_versions () target=perl-bullseye', () => {
    test ('includes its oldest version', () => {
        const result = act ({ since_perl: TARGET_PERL_BULLSEYE_OLDEST });
        expect (result).toContain (TARGET_PERL_BULLSEYE_OLDEST);
    });

    test ('includes its newest version', () => {
        const result = act ({ since_perl: TARGET_PERL_BULLSEYE_OLDEST });
        expect (result).toContain (TARGET_PERL_BULLSEYE_NEWEST);
    });

    test ('handles devel support', () => {
        const result = act ({ since_perl: TARGET_PERL_BULLSEYE_OLDEST, with_devel: true });
        if (TARGET_PERL_BULLSEYE_HAS_DEVEL) {
            expect (result).toContain ('devel');
        } else {
            expect (result).not.toContain ('devel');
        }
    });
});
