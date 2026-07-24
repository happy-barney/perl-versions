
const { perl_versions, decode_version } = require ('../perl-versions');

function build_act_for_target (target) {
    return (options) => perl_versions ({
        since_perl: options.since_perl ? decode_version (options.since_perl) : undefined,
        until_perl: options.until_perl ? decode_version (options.until_perl) : undefined,
        with_devel: options.with_devel,
        target,
    });
}

module.exports = {
    build_act_for_target,
};
