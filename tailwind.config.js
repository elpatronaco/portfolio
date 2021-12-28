module.exports = {
    darkMode: 'class',
    content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
    theme: {
        screens: {
            xs: '420px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        extend: {
            colors: {
                'bg-light': '#fafafa',
                'bg-dark': '#222222e0',
            },
        },
    },
    plugins: [],
}
