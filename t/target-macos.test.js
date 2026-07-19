
const { build_act_for_target } = require ('./test-helper');

const act = build_act_for_target ('macos');

describe ('perl_versions () target=macos', () => {
    test ('includes 5.8 through 5.42', () => {
        const result = act ({ since_perl: '5.8' });
        expect (result).toHaveLength (19);
        expect (result).toContain ('5.8');
        expect (result).toContain ('5.42');
        expect (result).toContain ('5.44');
    });
});
