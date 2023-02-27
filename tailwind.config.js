/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/containers/**/*.{js,ts,jsx,tsx}",
        "./src/common/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily:{
                sans:["IranYekan_Fa"] ,
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
      ],
};
