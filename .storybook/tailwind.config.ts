import path from 'path';
// import tailwindConfig from '../templates/starter/tailwind.config'

import tailwindConfig from '../packages/shared/styles/src/tailwind/starter/tailwind.config'

const config = {
    presets: [
        {
            ...tailwindConfig,
            content: [
                // '../demos/react-lite/components/**/*{.js,.ts,.jsx,.tsx}',
                // '../demos/react-lite/stories/**/*{.js,.ts,.jsx,.tsx}',
                // '../packages/unstyled/react/src/**/*{.js,.ts,.jsx,.tsx}',
                // '../templates/starter/stories/**/*{.js,.ts,.jsx,.tsx}',
                // '../templates/starter/components/**/*{.js,.ts,.jsx,.tsx}'

                path.resolve(__dirname, "../packages/unstyled/react/src/**/*{.js,.ts,.jsx,.tsx}"),
                path.resolve(__dirname, "../templates/starter/components/**/*{.js,.ts,.jsx,.tsx}"),
                path.resolve(__dirname, "../templates/starter/stories/**/*{.js,.ts,.jsx,.tsx}"),
                path.resolve(__dirname, "../demos/react-lite/components/**/*{.js,.ts,.jsx,.tsx}"),
                path.resolve(__dirname, "../demos/react-lite/stories/**/*{.js,.ts,.jsx,.tsx}"),

            ],
        },
    ],
};

export default config;
