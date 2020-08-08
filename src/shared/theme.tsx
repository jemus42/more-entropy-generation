const colors = {
  primary: {
    light: '#BF0426',
    base: '#730217',
    dark: '#590212',
    darker: '#33010A'
  },
  secondary: {
    light: '#FFD505',
    base: '#F2CB05',
    dark: '#B39504',
    darker: '#736002'
  },
  ui: {
    background: '#f2f2f2',
    base: '#eeeeee',
    dark: '#cccccc',
    darker: '#aaaaaa',
    font: '#E6E6E6'
  },
  black: '#222222',
  white: '#FFFFFF'
};

const baseUnit = 16;

const spacings = {
  tiny: `${baseUnit / 4}px`,
  small: `${baseUnit / 2}px`,
  baseline: `${baseUnit}px`,
  large: `${baseUnit * 2}px`,
  huge: `${baseUnit * 4}px`
};

const transitions = {
  ease: 'all 0.3s ease'
};

const boxShadows = {
  default:
    '0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12)'
};

const fonts = {
  huge: '30px',
  large: '24px',
  regular: '16px',
  small: '14px',
  tiny: '12px'
};

enum zIndex {
  Default
}

export default {
  colors,
  spacings,
  transitions,
  boxShadows,
  fonts,
  zIndex
};
