
const { build_act_for_target } = require ('./test-helper');

const act = build_act_for_target ('unknown');

describe ('perl_versions () target=unknown', () => {
    test ('throws on unknown target', () => {
        expect (() => act ({ since_perl: '5.20' }))
            .toThrow ('Unknown target');
    });
});
