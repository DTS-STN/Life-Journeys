module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "border-custom-blue-experiment-blue",
    "border-gray-experiment",
    "bg-custom-blue-experiment-blue",
    "bg-gray-experiment",
    "opacity-40",
    "opacity-60",
    "opacity-80",
    "opacity-100",
  ],
  theme: {
    boxShadow: {
      blue: "0 1px 3px 0 #66AFE9",
    },
    fontFamily: {
      display: ["Lato"],
      body: ["Noto sans"],
    },
    fontSize: {
      xxs: ["12px", "16px"],
      xs: ["14px", "16px"],
      sm: ["16px", "22px"],
      base: ["18px", "28px"],
      p: ["20px", "30px"],
      h6: ["19px", "28.5px"],
      h5: ["20px", "30px"],
      h4: ["22px", "20px"],
      h3: ["24px", "24.3px"],
      h2: ["30px", "33.5px"],
      h1: ["36px", "42px"],
      h1l: ["38px", "42px"],
      h1xl: ["45px", "54px"],
      "h1-xl": ["40px", "46px"],
      "h3-tall": ["24px", "30px"],
    },
    screens: {
      xxs: "280px",
      xs: "325px",
      sm: "450px",
      md: "550px",
      lg: "768px",
      xl: "992px",
      xxl: "1200px",
    },
    extend: {
      backgroundImage: (theme) => ({
        // "splash-img": "url('../public/images/bg-banner.jpg')",
        "banner-img": "url('../public/images/having-a-child.png')",
        "banner-img-mobile": "url('../public/images/mobileBanner.png')",
        "footer-parliament-image": "url(../public/images/landscape.png)",
        // "lightbulb-right-img": "url('../public/images/lightbulb_right.jpg')",
      }),
      colors: {
        "custom-blue": {
          blue: "#1D5B90",
          light: "#1492B4",
          // blue: "#2572B4",
          // light: "#1492B4",
          dark: "#26374a",
          link: "#0535d2",
          canadaLight: "#1c578a",
          reportButton: "#335075",
          reportButtonActive: "#16446c",
          focus: "#66AFE9",
          "experiment-blue": "#004986",
        },
        "gray-light-200": "#f5f5f5",
        "gray-light-100": "#e0e0e0",
        "gray-light": "#EFEFEF",
        "gray-md": "#CFCFCF",
        "gray-dark": "#444",
        "gray-dark-100": "#333",
        "gray-experiment": "#575757",
        "gray-breadcrumb": "#474747",
        "text-gray": "#5c5c5c",
        //
        "dk-blue": "#26374a",
        "hr-red-bar": "#AE3B43",
        //
        "gray-light-report": "#EAEBED",
        "gray-active": "#bbbfc5",
        "gray-subtopic": "#575757",
        //
        "error-border-red": "#D3080C",
        "error-background-red": "#F3E9E8",
        //
        "details-button-gray": "#E7E8EA",
        "details-button-active-gray": "#cfd1d5",
        "details-button-hover-gray": "#bbbfc5",
        "details-border-gray": "#e3e3e3",
        //
        "form-input-gray": "#555",
        "form-input-border-gray": "#ccc",
        //
        "canada-ca-link-colour": "#7834BC",
        "circle-color": "#083C6C",
        "canada-footer-font": "#284162",
        "canada-footer-hover-font-blue": "#0535d2",
        "footer-background-color": "#f8f8f8",
        "splash-page-bottom": "#e1e4e7",
        //
        "visited-link": "#7834bc",
        //
        "banner-green": "#cae9de",
      },
      width: {
        "40px": "40px",
        "44px": "44px",
        "68px": "68px",
        "80px": "80px",
        "100px": "100px",
        "138px": "138px",
        "160px": "160px",
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
        "7.5rem": "7.5rem",
      },
      height: {
        "40px": "40px",
        "44px": "44px",
        "46px": "46px",
        "100px": "100px",
        "187px": "187px",
        "400px": "400px",
        "500px": "500px",
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

      boxShadow: {
        "experiment-shadow": "0px 2px 8px rgba(0, 0, 0, 0.25)",
      },

      lineHeight: {
        "30px": "30px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "focus-visible"],
      textColor: ["visited"],
      outline: ["focus-visible"],
      ringWidth: ["focus-visible"],
      ringColor: ["focus-visible"],
      width: ["focus"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
