<template>
  <section id="welcome" class="masthead position-relative"> 
    <div class="position-absolute top-0 left-0 w-75 z-1">
      <nuxt-img 
        src="/top-left-decor.png"
        class="top-left-decor"
      />
    </div>

    <div class="container px-5">
      <div class="row gx-5 align-items-center">
        <div class="col-lg-6">
          <!-- Mashead text and app badges-->
          <div class="mb-5 mb-lg-0 text-center text-lg-start">
            <h1 class="display-1 lh-1 mb-3">
              Welcome to TruthGPT
            </h1>
            <p class="lead fw-normal text-muted mb-5 text-center text-md-start">
              Your Personalized, Sovereign AI in the Web 3.0 Era
            </p>

            <a class="btn btn-outline-primary py-2 pe-5 ">
              Getting started today!
              <i class="bi bi-arrow-right"></i>
            </a>

            <!-- Download buttons -->
            <!-- <div class="d-flex flex-column flex-lg-row align-items-center">
              <a class="me-lg-3 mb-4 mb-lg-0" href="#!">
                <img 
                  class="app-badge" 
                  src="/assets/images/google-play-badge.svg"
                  alt="..." 
                />
              </a>
              <a href="#!">
                <img 
                  class="app-badge" 
                  src="/assets/images/app-store-badge.svg" 
                  alt="..." 
                />
              </a>
            </div> -->


          </div>
        </div>
        
        <div class="col-lg-6">
          <!-- Masthead device mockup feature-->
          <div class="masthead-device-mockup">
            <div class="rounded-circle bg-gradient--primary circle-glow"></div>
            <svg class="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
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
  background-color: #8c67ba;
  padding-top: 9.5rem;
  padding-bottom: 5rem;
  overflow: hidden;
  position: relative;
}

.masthead:before,
.masthead:after {
  content: "";
  position: absolute;
  left: 50%;
  min-width: 300vw;
  min-height: 300vw;
  background-color:  var(--primary-bg-color);
  animation-name: rotate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  z-index: 1;
}

.masthead:before {
  bottom: 50px;
  border-radius: 45%;
  animation-duration: 10s;
}

.masthead:after {
  bottom: 35px;
  opacity: .5;
  border-radius: 47%;
  animation-duration: 10s;
}

.masthead .container {
  position: relative;
  z-index: 2;
}

@keyframes rotate {
  0% {transform: translate(-50%, 0) rotateZ(0deg);}
  50% {transform: translate(-50%, -2%) rotateZ(180deg);}
  100% {transform: translate(-50%, 0%) rotateZ(360deg);}
}
.masthead .masthead-device-mockup {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.masthead .masthead-device-mockup .shape-1 {
  position: absolute;
  height: 1rem;
  width: 1rem;
  transform: rotate(-10deg);
  fill: #dc2582;
  bottom: 15%;
  left: 10%;
}
.masthead .masthead-device-mockup .shape-2 {
  position: absolute;
  height: 0.75rem;
  width: 0.75rem;
  fill: #2ab8ff;
  top: 15%;
  right: 10%;
}
.masthead .masthead-device-mockup .device-wrapper {
  max-width: 10rem;
}

.top-left-decor {
  width: 100%;
}

.circle-glow {
  height:250px;
  width: 250px;
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
  .top-left-decor {
    width: 50%;
  }
  .circle-glow {
    height:390px;
    width: 390px;
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