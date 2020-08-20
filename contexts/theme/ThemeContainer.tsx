import React from 'react';

import { ThemeProvider as ChakraThemeProvider } from '@chakra-ui/core';

const ThemeContainer: React.FC = ({ children}) => {
  return (
    <ChakraThemeProvider></ChakraThemeProvider>
  );
};