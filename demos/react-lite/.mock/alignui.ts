export const components = {
    accordion: {
        'anatomy': {
            'AccordionRoot': {},
            'AccordionItem': {},
            'AccordionTrigger': {
                className: {
                    base: [
                        'w-[calc(100%+theme(space.7))] text-left text-label-sm text-text-strong-950',
                        'grid auto-cols-auto grid-flow-col grid-cols-[auto,minmax(0,1fr)] items-center gap-2.5',
                        '-m-3.5 p-3.5 outline-none',
                    ],
                    focus: 'focus:outline-none',
                },
            },
            'AccordionIcon': {
                className: {
                    base: ['size-5 text-text-sub-600'],
                },
            },
            'AccordionArrow': {
                openIcon: {
                    className: {
                        base: ['size-5 text-text-soft-400', 'transition duration-200 ease-out'],
                        hover: ['group-hover/accordion:text-text-sub-600'],
                        open: ['group-data-[state=open]/accordion:hidden']
                    },
                },
                closeIcon: {
                    className: {
                        base: ['size-5 text-text-sub-600'],
                        close: ['hidden group-data-[state=open]/accordion:block'],
                    }
                }
            },
            'AccordionContent': {
                'className': {
                    'base': [
                        'overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
                    ],
                    'inner': [
                        'overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
                    ]
                }
            }
        }
    }
}
