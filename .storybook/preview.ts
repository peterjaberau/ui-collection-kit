import type { Preview } from '@storybook/react'
// import '../examples/ecme/src/assets/styles/app.css'
import './styles.css'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    layout: 'padded',
  },
}

export default preview
