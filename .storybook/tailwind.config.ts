import path from 'path';
import tailwindConfig from '../templates/starter/tailwind.config'

const config = {
    presets: [
        {
            ...tailwindConfig,
            content: [
                path.resolve(__dirname, "../packages/styled/react/src/**/*{.js,.ts,.jsx,.tsx}"),
                path.resolve(__dirname, "../templates/starter/components/**/*{.js,.ts,.jsx,.tsx}"),
                path.resolve(__dirname, "../templates/starter/stories/**/*{.js,.ts,.jsx,.tsx}"),
            ],
        },
    ],
};

export default config;
