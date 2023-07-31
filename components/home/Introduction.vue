<template>
  <!-- Basic features section-->
  <section id="introduction">
    <div class="container px-5">
      <div class="row gx-0 gy-4 align-items-center justify-content-center justify-content-lg-between">
        <div class="col-sm-8 col-md-6 order-2 order-sm-1">
          <div class="position-relative ps-lg-5">
            <div class="speech-bubble">
              <span>Welcome to the frontier of cognitive technology.</span>
            </div>
            <img class="img-fluid" src="/bot.png" alt="..." />
          </div>
        </div>
        <div class="col-12 col-lg-5 order-1 order-sm-2">
          <div>
            <h2 class="display-5 lh-1 mb-4 text-center text-sm-start">
              Embark on a Cognitive Revolution
            </h2>
            <p class="lead fw-normal text-muted mb-5 mb-lg-0">
              TruthGPT is not just an AI; it's a digital extension of you.
              A unique blend of advanced AI blockchain, NFTs, and the decentralized Web 3.0, TruthGPT serves as your
              personalized "second brain." It learns, evolves, and reflects the 'truth' of your interactions and
              experiences.
            </p>
          </div>
          <div class="mt-5">
            <h2 class="display-5 lh-1 mb-4 text-center text-sm-start">
              Own Your Digital Twin
            </h2>
            <p class="lead fw-normal text-muted mb-5 mb-lg-0">
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

<style scoped>

#introduction {
  background-color: #8c67ba;
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
  height: 64px;
  width: 370px;
  left: 180px;
  top: -45px;
}

.speech-bubble:after {
	content: '';
	position: absolute;
	bottom: 14px;
	left: 22%;
	width: 0;
	height: 0;
	border: 35px solid transparent;
	border-top-color: #143584;
	border-bottom: 0;
	border-left: 0;
	margin-left: -24px;
	margin-bottom: -48px;
}

@media (max-width: 1024px) {
  .speech-bubble {
    height: 80px;
    width: 220px;
    left: 140px;
    top: -70px;
  }
}
</style>