
const { resolve_single_out } = require ('../perl-versions');

describe ('resolve_single_out ()', () => {
    const versions = ['5.30', '5.32', '5.34', '5.36', '5.38', '5.40', '5.42'];

    describe ('single-out=oldest', () => {
        const result = resolve_single_out ([...versions, 'devel'], 'oldest');

        test ('it should single out the oldest version', () => {
            expect (result.single_out).toBe ('5.30');
            expect (result.versions).not.toContain ('5.30');
            expect (result.versions).toContain ('5.32');
            expect (result.versions).toContain ('5.42');
            expect (result.versions).toContain ('devel');
        });
    });

    describe ('single-out=newest; with-devel=true', () => {
        const result = resolve_single_out ([...versions, 'devel'], 'newest');

        test ('it should single out the newest non-devel version', () => {
            expect (result.single_out).toBe ('5.42');
            expect (result.versions).not.toContain ('5.42');
            expect (result.versions).toContain ('devel');
        });
    });

    describe ('single-out=newest; with-devel=false', () => {
        const result = resolve_single_out (versions, 'newest');

        test ('it should single out the last version', () => {
            expect (result.single_out).toBe ('5.42');
        });
    });

    describe ('single-out=latest', () => {
        const result = resolve_single_out (versions, 'latest');

        test ('it should single out the newest version (alias for newest)', () => {
            expect (result.single_out).toBe ('5.42');
        });
    });

    describe ('single-out=devel; with-devel=true', () => {
        const result = resolve_single_out ([...versions, 'devel'], 'devel');

        test ('it should single out devel', () => {
            expect (result.single_out).toBe ('devel');
            expect (result.versions).not.toContain ('devel');
            expect (result.versions).toHaveLength (7);
        });
    });

    describe ('single-out=devel; with-devel=false', () => {
        const result = resolve_single_out (versions, 'devel');

        test ('it should return null and not modify the versions list', () => {
            expect (result.single_out).toBeNull ();
            expect (result.versions).toEqual (versions);
        });
    });

    describe ('single-out=5.36', () => {
        const result = resolve_single_out ([...versions, 'devel'], '5.36');

        test ('it should single out the specified version', () => {
            expect (result.single_out).toBe ('5.36');
            expect (result.versions).not.toContain ('5.36');
        });
    });

    describe ('single-out=5.20 (not in list)', () => {
        const result = resolve_single_out ([...versions, 'devel'], '5.20');

        test ('it should return the version even if not in the list', () => {
            expect (result.single_out).toBe ('5.20');
            expect (result.versions).toEqual ([...versions, 'devel']);
        });
    });

    describe ('single-out=v5.36', () => {
        const result = resolve_single_out ([...versions, 'devel'], 'v5.36');

        test ('it should resolve the version via decode_version', () => {
            expect (result.single_out).toBe ('5.36');
        });
    });

    describe ('single-out=""', () => {
        const result = resolve_single_out ([...versions, 'devel'], '');

        test ('it should return null and not modify the versions list', () => {
            expect (result.single_out).toBeNull ();
            expect (result.versions).toEqual ([...versions, 'devel']);
        });
    });

    describe ('single-out=null', () => {
        const result = resolve_single_out ([...versions, 'devel'], null);

        test ('it should return null', () => {
            expect (result.single_out).toBeNull ();
        });
    });

    describe ('single-out=oldest; single-element list', () => {
        const result = resolve_single_out (['5.32'], 'oldest');

        test ('it should single out the only version', () => {
            expect (result.single_out).toBe ('5.32');
            expect (result.versions).toHaveLength (0);
        });
    });
});
