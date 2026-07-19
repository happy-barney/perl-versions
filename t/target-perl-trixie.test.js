
const { build_act_for_target } = require ('./test-helper');

const act = build_act_for_target ('perl-trixie');

const TARGET_PERL_TRIXIE_OLDEST = '5.38';
const TARGET_PERL_TRIXIE_NEWEST = '5.44';
const TARGET_PERL_TRIXIE_HAS_DEVEL = false;

describe ('perl_versions () target=perl-trixie', () => {
    test ('includes its oldest version', () => {
        const result = act ({ since_perl: TARGET_PERL_TRIXIE_OLDEST });
        expect (result).toContain (TARGET_PERL_TRIXIE_OLDEST);
    });

    test ('includes its newest version', () => {
        const result = act ({ since_perl: TARGET_PERL_TRIXIE_OLDEST });
        expect (result).toContain (TARGET_PERL_TRIXIE_NEWEST);
    });

    test ('handles devel support', () => {
        const result = act ({ since_perl: TARGET_PERL_TRIXIE_OLDEST, with_devel: true });
        if (TARGET_PERL_TRIXIE_HAS_DEVEL) {
            expect (result).toContain ('devel');
        } else {
            expect (result).not.toContain ('devel');
        }
    });
});
