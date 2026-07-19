
const { build_act_for_target } = require ('./test-helper');

const act = build_act_for_target ('windows-strawberry');

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
