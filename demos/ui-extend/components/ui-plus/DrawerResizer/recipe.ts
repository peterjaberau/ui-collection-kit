import { defineSlotRecipe } from "@chakra-ui/react"

export const drawerResizerRecipe = defineSlotRecipe({
	slots: ["root", "resizer"],
	base: {
		root: {
			cursor: "ew-resize",
			position: "absolute",
			left: 0,
			top: 0,
			bottom: 0,
			pr: 2,
		},
		resizer: {
			width: 1,
			height: "100%",
			transition: "background-color 0.1s",
			_hover: {
				backgroundColor: "bg.emphasized",
			},
			_active: {
				backgroundColor: "bg.emphasized",
			},
		},
	},
})
