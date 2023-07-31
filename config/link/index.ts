import font from './font'

export default [
  { 
    // Page icon
    rel: "icon", 
    type: "image/x-icon", 
    href: "/favicon.ico" 
  },
  { 
    // Bootstrap icons
    rel: "stylesheet", 
    href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" 
  },
  ...font,
]