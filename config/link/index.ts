import font from './font'

export default [
  { 
    // Page icon
    rel: "icon", 
    type: "image/x-icon", 
    href: "/assets/images/favicon.ico" 
  },
  { 
    // Bootstrap icons
    rel: "stylesheet", 
    href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" 
  },
  ...font,
]