
const { build_act_for_target } = require ('./test-helper');

const act = build_act_for_target ('perl');

describe ('perl_versions () target=perl', () => {
    test ('includes 5.42', () => {
        const result = act ({ since_perl: '5.40' });
        expect (result).toContain ('5.40');
        expect (result).toContain ('5.42');
    });
});
