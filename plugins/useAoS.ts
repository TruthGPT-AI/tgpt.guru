// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin(nuxtApp => {
  if (typeof window !== 'undefined') {
    nuxtApp.AOS = AOS.init({
      offset: 100,
      duration: 400,
      easing: "ease-in-sine",
      delay: 200,
      once: true,
    });
  }
})