"use client"

import { ToggleGroup } from "@ark-ui/react/toggle-group"
import {
  LuAlignLeft as AlignLeft,
  LuAlignCenter as AlignCenter,
  LuAlignRight as AlignRight,
  LuBold as Bold,
  LuItalic as Italic,
  LuUnderline as Underline,
  LuLink as Link,
} from "react-icons/lu"

export function Toolbar() {
  return (
    <div className="tw:flex tw:w-full tw:flex-col tw:items-center tw:rounded-xl tw:bg-white tw:px-4 tw:py-12 dark:tw:bg-gray-800">
      <div className="tw:flex tw:items-center tw:gap-3 tw:rounded-lg tw:border tw:border-gray-200 tw:bg-gray-50 tw:p-2 dark:tw:border-gray-600 dark:tw:bg-gray-700">
        {/* Text Formatting */}
        <ToggleGroup.Root multiple className="tw:inline-flex tw:gap-1 tw:border-r tw:border-gray-200 tw:pr-3 dark:tw:border-gray-600">
          <ToggleGroup.Item
            value="bold"
            className="tw:rounded tw:p-2 tw:text-gray-600 tw:transition-all hover:tw:bg-gray-100 data-[state=on]:tw:bg-blue-100 data-[state=on]:tw:text-blue-700 dark:tw:text-gray-400 dark:hover:tw:bg-gray-600 dark:data-[state=on]:tw:bg-blue-900/30 dark:data-[state=on]:tw:text-blue-300"
          >
            <Bold className="tw:h-4 tw:w-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="italic"
            className="tw:rounded tw:p-2 tw:text-gray-600 tw:transition-all hover:tw:bg-gray-100 data-[state=on]:tw:bg-blue-100 data-[state=on]:tw:text-blue-700 dark:tw:text-gray-400 dark:hover:tw:bg-gray-600 dark:data-[state=on]:tw:bg-blue-900/30 dark:data-[state=on]:tw:text-blue-300"
          >
            <Italic className="tw:h-4 tw:w-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="underline"
            className="tw:rounded tw:p-2 tw:text-gray-600 tw:transition-all hover:tw:bg-gray-100 data-[state=on]:tw:bg-blue-100 data-[state=on]:tw:text-blue-700 dark:tw:text-gray-400 dark:hover:tw:bg-gray-600 dark:data-[state=on]:tw:bg-blue-900/30 dark:data-[state=on]:tw:text-blue-300"
          >
            <Underline className="tw:h-4 tw:w-4" />
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        {/* Text Alignment */}
        <ToggleGroup.Root
          defaultValue={["left"]}
          className="tw:inline-flex tw:gap-0.5 tw:border-r tw:border-gray-200 tw:pr-3 dark:tw:border-gray-600"
        >
          <ToggleGroup.Item
            value="left"
            className="tw:rounded tw:p-2 tw:text-gray-600 tw:transition-all hover:tw:bg-gray-100 data-[state=on]:tw:bg-blue-100 data-[state=on]:tw:text-blue-700 dark:tw:text-gray-400 dark:hover:tw:bg-gray-600 dark:data-[state=on]:tw:bg-blue-900/30 dark:data-[state=on]:tw:text-blue-300"
          >
            <AlignLeft className="tw:h-4 tw:w-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="center"
            className="tw:rounded tw:p-2 tw:text-gray-600 tw:transition-all hover:tw:bg-gray-100 data-[state=on]:tw:bg-blue-100 data-[state=on]:tw:text-blue-700 dark:tw:text-gray-400 dark:hover:tw:bg-gray-600 dark:data-[state=on]:tw:bg-blue-900/30 dark:data-[state=on]:tw:text-blue-300"
          >
            <AlignCenter className="tw:h-4 tw:w-4" />
          </ToggleGroup.Item>
          <ToggleGroup.Item
            value="right"
            className="tw:rounded tw:p-2 tw:text-gray-600 tw:transition-all hover:tw:bg-gray-100 data-[state=on]:tw:bg-blue-100 data-[state=on]:tw:text-blue-700 dark:tw:text-gray-400 dark:hover:tw:bg-gray-600 dark:data-[state=on]:tw:bg-blue-900/30 dark:data-[state=on]:tw:text-blue-300"
          >
            <AlignRight className="tw:h-4 tw:w-4" />
          </ToggleGroup.Item>
        </ToggleGroup.Root>

        {/* Insert Options */}
        <ToggleGroup.Root multiple className="tw:inline-flex">
          <ToggleGroup.Item
            value="link"
            className="tw:rounded tw:p-2 tw:text-gray-600 tw:transition-all hover:tw:bg-gray-100 data-[state=on]:tw:bg-blue-100 data-[state=on]:tw:text-blue-700 dark:tw:text-gray-400 dark:hover:tw:bg-gray-600 dark:data-[state=on]:tw:bg-blue-900/30 dark:data-[state=on]:tw:text-blue-300"
          >
            <Link className="tw:h-4 tw:w-4" />
          </ToggleGroup.Item>
        </ToggleGroup.Root>
      </div>
    </div>
  )
}
