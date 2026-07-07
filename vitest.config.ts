import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        projects: [
            'shared/vitest.config.ts',
            'CheckmarkControl/vitest.config.ts',
            'OptionsetColourControl/vitest.config.ts',
        ],
    },
});
