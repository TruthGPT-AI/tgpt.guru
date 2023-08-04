<template>
  <!-- Basic features section-->
  <section id="introduction">
    <div class="container px-4 px-md-5">
      <div class="row gx-0 gy-4 align-items-center justify-content-center justify-content-lg-between">
        <div class="col-12 col-lg-5 order-3 order-lg-1 justify-content-center" data-aos="fade-right">
          <div class="position-relative ps-lg-5 speech-bubble-container">
            <div class="speech-bubble">
              <span>Welcome to the frontier of cognitive technology.</span>
              <div class="layers">
                <div v-for="index in Array(15)" class="layer"></div>
              </div>
            </div>
            <img class="img-fluid d-block m-auto m-lg-0" src="/bot.png" alt="bot"/>
          </div>
        </div>
        <div class="col-12 col-lg-1 order-2"></div>
        <div class="col-12 col-lg-6 order-1 order-lg-3" data-aos="fade-left">
          <div>
            <h2 class="display-5 lh-1 mb-4 text-center text-lg-start">
              Embark on a Cognitive Revolution
            </h2>
            <p class="lead fw-normal text-muted mb-5 mb-lg-0" lang="en">
              TruthGPT is not just an AI; it's a digital extension of you.
              A unique blend of advanced AI blockchain, NFTs, and the decentralized Web 3.0, TruthGPT serves as your
              personalized "second brain." It learns, evolves, and reflects the 'truth' of your interactions and
              experiences.
            </p>
          </div>
          <div class="mt-5">
            <h2 class="display-5 lh-1 mb-4 text-center text-lg-start">
              Own Your Digital Twin
            </h2>
            <p class="lead fw-normal text-muted mb-5 mb-lg-0" lang="en">
              Each TruthGPT is a unique, non-replicable digital asset, verifiable 
              on the blockchain, and solely owned by you. It's an authentic digital twin that evolves with you,
              becoming an increasingly accurate and invaluable cognitive companion.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

#introduction {
  background-color: #8c67ba;
}

.speech-bubble-container {
  perspective: 50em;
  --bi: #143584;
}

.speech-bubble  {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  padding: 0 8px;
	background: #143584;
	border-radius: 30px;
	position: absolute;
  height: 80px;
  width: 200px;
  left: 200px;
  top: -70px;
  transform: rotateY(20deg) rotateX(0);
  transform-style: preserve-3d;
  transition: transform 1s;
}

.speech-bubble:after {
	content: '';
	position: absolute;
  bottom: 20px;
  left: 25%;
	width: 30px;
	height: 30px;
  background: linear-gradient(140deg, #143584 50%, transparent 50%);
	margin-left: -24px;
	margin-bottom: -48px;
  z-index: -1
}

.layers {
  position: absolute;
  left: 0; top: 0;
  width: 100%; height: 100%;
  transform-style: preserve-3d;
  z-index: -1;
  background-color: transparent;
}

.layer {
  position: absolute;
  left: 0; top: 0;
  width: 100%; height: 100%;
  border-radius: 1em;
  background-color: var(--bi);
  transform: translateZ(var(--tz));
  box-shadow: 0 0 0.5em #000d inset;
  
  @for $i from 0 to 15 {
    &:nth-child(#{$i + 1}) {
      --tz: #{$i * -2}px;
    }
  }
  
  &:last-child {
    box-shadow: 0 0 0.5em #000d inset, 0 0 5px #000;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 20px;
    left: 25%;
    margin-left: -24px;
    margin-bottom: -48px;
  }

  &::before {
    width: 1px;
    height: 27.5px;
    background-color: transparent;
    box-shadow: 0 0 0.09em #000d inset;
    z-index: 2;
    margin-bottom: -45px;
  }

  &::after {
    width: 30px;
    height: 30px;
    background: linear-gradient(140deg, #143584 50%, transparent 50%);
    z-index: 1;
  }
}

@media (max-width: 1200px) {
  .speech-bubble {
    height: 80px;
    width: 200px;
    left: 200px;
    top: -70px;
  }
  .speech-bubble::after {
    bottom: 20px;
    left: 25%;
    border-right-width: 30px;
    border-top-width: 30px;
  }
}

@media (max-width: 991px) {
  .speech-bubble {
    left: 160px;
  }
}


@media (min-width: 1400px) {
  aside, section {
    padding-top: 10.8rem;
  }  
}
</style>