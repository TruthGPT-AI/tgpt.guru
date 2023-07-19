<template>
  <!-- App features section-->
  <section id="features">
    <div class="container px-5">
      <div class="row gx-5 align-items-center">
        <div class="col-lg-8 order-lg-1 mb-5 mb-lg-0">
          <div class="container-fluid px-5">
            <div class="row gx-5">
              <div class="col-md-6 mb-5">
                <!-- Feature item-->
                <div class="text-center">
                  <i class="bi-phone icon-feature text-gradient d-block mb-3"></i>
                  <h3 class="font-alt">Device Mockups</h3>
                  <p class="text-muted mb-0">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                </div>
              </div>

              <div class="col-md-6 mb-5">
                <!-- Feature item-->
                <div class="text-center">
                  <i class="bi-camera icon-feature text-gradient d-block mb-3"></i>
                  <h3 class="font-alt">Flexible Use</h3>
                  <p class="text-muted mb-0">Put an image, video, animation, or anything else in the screen!</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6 mb-5 mb-md-0">
                <!-- Feature item-->
                <div class="text-center">
                  <i class="bi-gift icon-feature text-gradient d-block mb-3"></i>
                  <h3 class="font-alt">Free to Use</h3>
                  <p class="text-muted mb-0">As always, this theme is free to download and use for any purpose!</p>
                </div>
              </div>

              <div class="col-md-6">
                <!-- Feature item-->
                <div class="text-center">
                  <i class="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                  <h3 class="font-alt">Open Source</h3>
                  <p class="text-muted mb-0">Since this theme is MIT licensed, you can use it commercially!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 order-lg-0">
          <!-- Features section device mockup-->
          <div class="features-device-mockup">
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

<style scope>
.icon-feature {
  font-size: 4rem;
}

.features-device-mockup {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.features-device-mockup .circle {
  position: absolute;
  left: 0;
  fill: url(#circleGradient);
  width: 70%;
  display: none;
}
.features-device-mockup .circle .gradient-start-color {
  stop-color: #2937f0;
}
.features-device-mockup .circle .gradient-end-color {
  stop-color: #9f1ae2;
}
.features-device-mockup .shape-1 {
  position: absolute;
  height: 1rem;
  width: 1rem;
  transform: rotate(10deg);
  fill: #2937f0;
  top: 15%;
  right: 10%;
}
.features-device-mockup .shape-2 {
  position: absolute;
  height: 0.75rem;
  width: 0.75rem;
  fill: #2937f0;
  bottom: 15%;
  left: 10%;
}
.features-device-mockup .device-wrapper {
  max-width: 10rem;
}

@media (min-width: 576px) {
  .features-device-mockup .circle {
    width: 70%;
    display: block;
    left: auto;
  }
  .features-device-mockup .device-wrapper {
    max-width: 12.5rem;
  }
}
@media (min-width: 768px) {
  .features-device-mockup .circle {
    width: 60%;
    left: auto;
  }
  .features-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 992px) {
  .features-device-mockup .circle {
    width: 90%;
    left: -25%;
  }
  .features-device-mockup .shape-1 {
    top: 5%;
    right: -15%;
  }
  .features-device-mockup .shape-2 {
    bottom: 10%;
    left: -10%;
  }
  .features-device-mockup .device-wrapper {
    max-width: 15rem;
    margin-left: auto;
  }
}
@media (min-width: 1200px) {
  .features-device-mockup .circle {
    width: 75%;
    left: 0;
  }
  .features-device-mockup .shape-2 {
    bottom: 15%;
    left: 10%;
  }
  .features-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 1400px) {
  .features-device-mockup .circle {
    width: 80%;
    left: 0;
  }
  .features-device-mockup .device-wrapper {
    max-width: 17rem;
  }
}
</style>