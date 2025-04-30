// types/remixicon-fix.d.ts (or in global.d.ts)

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.css'



declare module '@remixicon/react' {
    import * as React from 'react';

    export type RemixiconProps = React.SVGProps<SVGSVGElement>;
    export const RiGiftLine: React.ComponentType<RemixiconProps>;
    export const RiPencilLine: React.ComponentType<RemixiconProps>;
    export const RiShareForwardLine: React.ComponentType<RemixiconProps>;
    export const RiStarSmileLine: React.ComponentType<RemixiconProps>;


    // Add more if needed
}
