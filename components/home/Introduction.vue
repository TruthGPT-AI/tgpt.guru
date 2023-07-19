<template>
  <section class="masthead">
    <div class="container px-5">
      <div class="row gx-5 align-items-center">
        <div class="col-lg-6">
          <!-- Mashead text and app badges-->
          <div class="mb-5 mb-lg-0 text-center text-lg-start">
            <h1 class="display-1 lh-1 mb-3">Showcase your app beautifully.</h1>
            <p class="lead fw-normal text-muted mb-5">Launch your mobile app landing page faster with this free, open
              source theme from Start Bootstrap!</p>
            <div class="d-flex flex-column flex-lg-row align-items-center">
              <a class="me-lg-3 mb-4 mb-lg-0" href="#!"><img class="app-badge" src="/assets/images/google-play-badge.svg"
                  alt="..." /></a>
              <a href="#!"><img class="app-badge" src="/assets/images/app-store-badge.svg" alt="..." /></a>
            </div>
          </div>
        </div>
        
        <div class="col-lg-6">
          <!-- Masthead device mockup feature-->
          <div class="masthead-device-mockup">
            <svg class="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                  <stop class="gradient-start-color" offset="0%"></stop>
                  <stop class="gradient-end-color" offset="100%"></stop>
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="50"></circle>
            </svg><svg class="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
              <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03"
                transform="translate(120.42 -49.88) rotate(45)"></rect>
              <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03"
                transform="translate(-49.88 120.42) rotate(-45)"></rect>
            </svg><svg class="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50"></circle>
            </svg>
            <div class="device-wrapper">
              <div class="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                <div class="screen bg-black">
                  <!-- PUT CONTENTS HERE:-->
                  <!-- * * This can be a video, image, or just about anything else.-->
                  <!-- * * Set the max width of your media to 100% and the height to-->
                  <!-- * * 100% like the demo example below.-->
                  <video :muted="true" :autoplay="true" :loop="true" style="max-width: 100%; height: 100%">
                    <source src="/assets/images/demo-screen.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.masthead {
  background-color: #f8f9fa;
  padding-top: 9.5rem;
  padding-bottom: 5rem;
}
.masthead .masthead-device-mockup {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.masthead .masthead-device-mockup .circle {
  position: absolute;
  fill: url(#circleGradient);
  width: 70%;
  display: none;
}
.masthead .masthead-device-mockup .circle .gradient-start-color {
  stop-color: #2937f0;
}
.masthead .masthead-device-mockup .circle .gradient-end-color {
  stop-color: #9f1ae2;
}
.masthead .masthead-device-mockup .shape-1 {
  position: absolute;
  height: 1rem;
  width: 1rem;
  transform: rotate(-10deg);
  fill: #2937f0;
  bottom: 15%;
  left: 10%;
}
.masthead .masthead-device-mockup .shape-2 {
  position: absolute;
  height: 0.75rem;
  width: 0.75rem;
  fill: #2937f0;
  top: 15%;
  right: 10%;
}
.masthead .masthead-device-mockup .device-wrapper {
  max-width: 10rem;
}
@media (min-width: 576px) {
  .masthead .masthead-device-mockup .circle {
    width: 70%;
    display: block;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 12.5rem;
  }
}
@media (min-width: 768px) {
  .masthead .masthead-device-mockup .circle {
    width: 60%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 992px) {
  .masthead .masthead-device-mockup .circle {
    width: 90%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 1200px) {
  .masthead .masthead-device-mockup .circle {
    width: 75%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 1400px) {
  .masthead .masthead-device-mockup .circle {
    width: 70%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 17rem;
  }
}
</style>