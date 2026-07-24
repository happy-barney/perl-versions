
const { build_act_for_target } = require ('./test-helper');

const act = build_act_for_target ('perl-bookworm');

const TARGET_PERL_BOOKWORM_OLDEST = '5.36';
const TARGET_PERL_BOOKWORM_NEWEST = '5.44';
const TARGET_PERL_BOOKWORM_HAS_DEVEL = false;

describe ('perl_versions () target=perl-bookworm', () => {
    test ('includes its oldest version', () => {
        const result = act ({ since_perl: TARGET_PERL_BOOKWORM_OLDEST });
        expect (result).toContain (TARGET_PERL_BOOKWORM_OLDEST);
    });

    test ('includes its newest version', () => {
        const result = act ({ since_perl: TARGET_PERL_BOOKWORM_OLDEST });
        expect (result).toContain (TARGET_PERL_BOOKWORM_NEWEST);
    });

    test ('handles devel support', () => {
        const result = act ({ since_perl: TARGET_PERL_BOOKWORM_OLDEST, with_devel: true });
        if (TARGET_PERL_BOOKWORM_HAS_DEVEL) {
            expect (result).toContain ('devel');
        } else {
            expect (result).not.toContain ('devel');
        }
    });
});
