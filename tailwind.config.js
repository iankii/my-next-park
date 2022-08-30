module.exports = {
    future: {
        removeDeprecatedGapUtilities: true 
    },
    purge: ["./components/8*/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "accent-1": "#333"
            }
        }
    },
    variants: {},
    plugins: []
}