"use client"
import { MultiLayersPanel } from "#components/ui/multi-layers-panel"
import { useEffect, useState } from "react"
import { Box, Stack } from "@chakra-ui/react"

const mockPanels: any = {
  filters: [
    { label: "React", value: "react" },
    { label: "Solid", value: "solid" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Preact", value: "preact" },
    { label: "Qwik", value: "qwik" },
    { label: "Lit", value: "lit" },
    { label: "Alpine.js", value: "alpinejs" },
    { label: "Ember", value: "ember" },
    { label: "Next.js", value: "nextjs" },
  ],
  items: [
    {
      title: "Presets",
      value: "presets",
      sections: [
        {
          title: "Default Presets",
          value: "default-presets",
          content: "section content for default presets",
        },
        {
          title: "Custom Presets",
          value: "custom-presets",
          content: "section content for custom presets",
        },
        {
          title: "Advanced Presets",
          value: "advanced-presets",
          content: "section content for advanced presets",
        },
        {
          title: "Experimental Presets",
          value: "experimental-presets",
          content: "section content for experimental presets",
        },
        {
          title: "Legacy Presets",
          value: "legacy-presets",
          content: "section content for legacy presets",
        }
      ],
    },
    {
      title: "Custom",
      value: "custom",
      sections: [
        {
          title: "Custom Section 1",
          value: "custom-section-1",
          content: "section content for custom section 1",
        },
        {
          title: "Custom Section 2",
          value: "custom-section-2",
          content: "section content for custom section 2",
        },
      ],
    },
    {
      title: "Settings",
      value: "settings",
      sections: [
        {
          title: "General Settings",
          value: "general-settings",
          content: "section content for general settings",
        },
        {
          title: "Advanced Settings",
          value: "advanced-settings",
          content: "section content for advanced settings",
        },
      ],
    },
  ],
}

export default function Page() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <>
          <Stack h="full" w="600px" p={4}>
            <Box h="full" shadow="md" borderRadius="md">
              <MultiLayersPanel
                items={mockPanels.items}
                filters={mockPanels.filters}
              />
            </Box>
          </Stack>
        </>
      )}
    </>
  )
}
