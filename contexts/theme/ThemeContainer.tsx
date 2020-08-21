import React from 'react';

import { 
  ThemeProvider as ChakraThemeProvider, 
  ColorModeProvider, 
  CSSReset 
} from '@chakra-ui/core';

import theme from '../../styles/theme';

import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider value="dark">
        <EmotionThemeProvider theme={theme}>
          <CSSReset />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  );
};

export default ThemeContainer;