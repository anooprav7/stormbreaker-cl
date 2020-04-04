import { addParameters } from '@storybook/react';
import { create } from "@storybook/theming"


addParameters({
  options: {
    theme: create({
      base: 'light',
      barSelectedColor: '#03A9F4',
      brandImage: '/stormbreaker.svg',
      brandUrl: 'https://github.com/anooprav7/stormbreaker-cl', 
    }),
    panelPosition: "right",
    showRoots: true,
    showCanvas: false
  }
})


