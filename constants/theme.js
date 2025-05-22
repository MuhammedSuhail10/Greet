import { isDarkMode } from "../helpers/common";

export const useTheme = () => {
    const dark = isDarkMode();
    return {
        colors: {
            primaryBg: isDarkMode() ? '#000' : '#fff',
            secondaryBg: isDarkMode() ? '#232323' : '#ced4da',
            inverted: isDarkMode() ? '#000' : '#fff',
            primary: '#E63946',
            text: isDarkMode() ? '#f0f8ff' : '#000',
            LessOpacity: isDarkMode() ? '#6c757d' : '#ced4da',
        },
        fonts: {
            body: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            heading: 'Merriweather, Georgia, Cambria, "Times New Roman", Times, serif',
            mono: 'Fira Code, Courier New, Courier, monospace'
        },
        fontWeights: {
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800
        },
        fontSizes: {
            xs: 5,
            sm: 10,
            base: 15,
            lg: 20,
            xl: 25,
            '2xl': 30,
            '3xl': 35,
        },
        borderRadius: {
            none: '0',
            xs: 5,
            sm: 10,
            md: 15,
            lg: 20,
            xl: 25,
            '2xl': 50,
            '3xl': 75,
            full: 1000
        },
        shadows: {
            sm: '0 1px 2px 0 #fff',
            DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)',
            md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
            lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
            xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
            '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
            inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
            none: 'none'
        }
    }
};