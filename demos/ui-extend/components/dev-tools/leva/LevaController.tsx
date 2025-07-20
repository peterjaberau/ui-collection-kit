'use client'
import { useControls, folder } from 'leva'
export const LevaController = () => {
  const layout = useControls({
    Header: folder({
      header_isVisible: { label: 'isVisible', value: true },
      header_content: { label: 'content', value: '' },
      Parts: folder({
        header_parts_start_isVisible: { label: 'start.isVisible', value: true },
        header_parts_start_content: { label: 'start.content', value: '' },
        header_parts_center_isVisible: { label: 'center.isVisible', value: true },
        header_parts_center_content: { label: 'center.content', value: '' },
        header_parts_end_isVisible: { label: 'end.isVisible', value: true },
        header_parts_end_content: { label: 'end.content', value: '' },
      }),
    }),

    Footer: folder({
      footer_isVisible: { label: 'isVisible', value: true },
      footer_content: { label: 'content', value: '' },
      Parts: folder({
        footer_parts_start_isVisible: { label: 'start.isVisible', value: true },
        footer_parts_start_content: { label: 'start.content', value: '' },
        footer_parts_center_isVisible: { label: 'center.isVisible', value: true },
        footer_parts_center_content: { label: 'center.content', value: '' },
        footer_parts_end_isVisible: { label: 'end.isVisible', value: true },
        footer_parts_end_content: { label: 'end.content', value: '' },
      }),
    }),

    BarLeft: folder({
      barLeft_isVisible: { label: 'isVisible', value: true },
      barLeft_content: { label: 'content', value: '' },
      Parts: folder({
        barLeft_parts_start_isVisible: { label: 'start.isVisible', value: true },
        barLeft_parts_start_content: { label: 'start.content', value: '' },
        barLeft_parts_center_isVisible: { label: 'center.isVisible', value: true },
        barLeft_parts_center_content: { label: 'center.content', value: '' },
        barLeft_parts_end_isVisible: { label: 'end.isVisible', value: true },
        barLeft_parts_end_content: { label: 'end.content', value: '' },
      }),
    }),

    BarRight: folder({
      barRight_isVisible: { label: 'isVisible', value: true },
      barRight_content: { label: 'content', value: '' },
      Parts: folder({
        barRight_parts_start_isVisible: { label: 'start.isVisible', value: true },
        barRight_parts_start_content: { label: 'start.content', value: '' },
        barRight_parts_center_isVisible: { label: 'center.isVisible', value: true },
        barRight_parts_center_content: { label: 'center.content', value: '' },
        barRight_parts_end_isVisible: { label: 'end.isVisible', value: true },
        barRight_parts_end_content: { label: 'end.content', value: '' },
      }),
    }),

    Toolbar: folder({
      toolbar_isVisible: { label: 'isVisible', value: true },
      toolbar_content: { label: 'content', value: '' },
      Parts: folder({
        toolbar_parts_start_isVisible: { label: 'start.isVisible', value: true },
        toolbar_parts_start_content: { label: 'start.content', value: '' },
        toolbar_parts_center_isVisible: { label: 'center.isVisible', value: true },
        toolbar_parts_center_content: { label: 'center.content', value: '' },
        toolbar_parts_end_isVisible: { label: 'end.isVisible', value: true },
        toolbar_parts_end_content: { label: 'end.content', value: '' },
      }),
    }),

    SideLeft: folder({
      sideLeft_isVisible: { label: 'isVisible', value: true },
      sideLeft_content: { label: 'content', value: '' },
      Parts: folder({
        sideLeft_parts_start_isVisible: { label: 'start.isVisible', value: true },
        sideLeft_parts_start_content: { label: 'start.content', value: '' },
        sideLeft_parts_center_isVisible: { label: 'center.isVisible', value: true },
        sideLeft_parts_center_content: { label: 'center.content', value: '' },
        sideLeft_parts_end_isVisible: { label: 'end.isVisible', value: true },
        sideLeft_parts_end_content: { label: 'end.content', value: '' },
      }),
    }),

    SideRight: folder({
      sideRight_isVisible: { label: 'isVisible', value: true },
      sideRight_content: { label: 'content', value: '' },
      Parts: folder({
        sideRight_parts_start_isVisible: { label: 'start.isVisible', value: true },
        sideRight_parts_start_content: { label: 'start.content', value: '' },
        sideRight_parts_center_isVisible: { label: 'center.isVisible', value: true },
        sideRight_parts_center_content: { label: 'center.content', value: '' },
        sideRight_parts_end_isVisible: { label: 'end.isVisible', value: true },
        sideRight_parts_end_content: { label: 'end.content', value: '' },
      }),
    }),

    SideContent: folder({
      sideContent_isVisible: { label: 'isVisible', value: true },
      sideContent_content: { label: 'content', value: '' },
      Parts: folder({
        sideContent_parts_start_isVisible: { label: 'start.isVisible', value: true },
        sideContent_parts_start_content: { label: 'start.content', value: '' },
        sideContent_parts_center_isVisible: { label: 'center.isVisible', value: true },
        sideContent_parts_center_content: { label: 'center.content', value: '' },
        sideContent_parts_end_isVisible: { label: 'end.isVisible', value: true },
        sideContent_parts_end_content: { label: 'end.content', value: '' },
      }),
    }),
  })

  return null
}
