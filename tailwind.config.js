module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Lato"],
      body: ["Noto sans"],
    },
    fontSize: {
      xxs: ["13px", "16px"],
      sm: ["16px", "22px"],
      base: ["18px", "28px"],
      p: ["20px", "30px"],
      h6: ["19px", "28.5px"],
      h5: ["20px", "30px"],
      h4: ["22px", "20px"],
      h3: ["24px", "24.3px"],
      h2: ["30px", "33.5px"],
      h1: ["34px", "42px"],
      "h1-xl": ["40px", "46px"],
    },
    screens: {
      xxs: "768px",
      xs: "768px",
      sm: "768px",
      md: "768px",
      lg: "992px",
      xl: "992px",
      xxl: "1170px",
    },
    extend: {
      backgroundImage: (theme) => ({
        "banner-img": "url('../public/images/bg-banner.png')",
      }),
      colors: {
        "custom-blue": {
          blue: "#2572B4",
          light: "#1492B4",
          dark: "#26374a",
          link: "#0535d2",
          canadaLight: "#1c578a",
          reportButton: "#335075",
          reportButtonActive: "#16446c",
        },
        "gray-light-200": "#f5f5f5",
        "gray-light-100": "#e0e0e0",
        "gray-light": "#EFEFEF",
        "gray-md": "#CFCFCF",
        "gray-dark": "#444",
        "gray-dark-100": "#333",
        "text-gray": "#5c5c5c",
        "dk-blue": "#26374a",
        "hr-red-bar": "#AE3B43",
        "gray-light-report": "#EAEBED",
        "gray-active": "#bbbfc5",
        "details-button-gray": "#E7E8EA",
        "details-button-active-gray": "#cfd1d5",
        "details-button-hover-gray": "#bbbfc5",
        "details-border-gray": "#e3e3e3",
        "form-input-gray": "#555",
        "form-input-border-gray": "#ccc",
        "canada-footer-font": "#284162",
      },
      width: {
        "40px": "40px",
        "44px": "44px",
        "300px": "300px",
      },
      height: {
        "40px": "40px",
        "44px": "44px",
        "46px": "46px",
      },
      inset: {
        "-2px": "-2px",
      },
      zIndex: {
        1: "1",
      },
      padding: {
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "8px": "8px",
        "12px": "12px",
        "15px": "15px",
        "40px": "40px",
      },
      margin: {
        "5px": "5px",
        "15px": "15px",
        "10px": "10px",
        "20px": "20px",
      },

      maxWidth: {
        "350px": "350px",
      },

      minHeight: {
        "40px": "40px",
        "200px": "200px",
      },

      maxHeight: {
        "40px": "40px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["visited"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
