import { configure } from "@storybook/react"
// ** For adding Styled-component themes later ** //
// import {addDecorator} from '@storybook/react';
// import {withThemesProvider} from 'storybook-addon-styled-component-theme';

// const themes = [theme1, theme2];
// addDecorator(withThemesProvider(themes));

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
