<template>
  <section id="challenges" class="position-relative">
    <div class="position-absolute left-0 z-0 decor-wrapper">
      <img 
        src="/mid-left-decor.png"
        class="mid-left-decor"
        alt="mid left decoration"
      />
    </div>
    <div class="container position-relative z-1">
      <div class="row gx-5">
        <div class="col-12 col-sm-5">
          <div class="d-flex flex-column justify-content-center h-100">
            <h2 class="text-center text-md-start display-5 lh-3">
              Navigating Challenges Together
            </h2>
            <p class="text-center text-md-start lead fw-normal text-muted mb-5 px-4 px-md-0">
              In our pursuit of this cognitive revolution, we acknowledge and address significant challenges:
            </p>
          </div>
        </div>
        <div class="col-12 col-sm-7">
          <HomeChallengesChallengeList />>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
$primary: #3aaaf3;
$secondary: #7a76c7;
$last: #c43993;

$body-bg: #1e1e2f;
$timeline-before-bg : #222a42;
$timeline-body-bg: #27293d;
$timeline-body-round: 3px;
$timeline-body-shadow: 1px 3px 9px rgba(0, 0, 0, .1);

$card-shine-opacity: .1;
$card-shine-gradient: conic-gradient(from 205deg at 50% 50%, rgba(16, 185, 129, 0) 0deg, #00bf9a 25deg, rgba(52, 211, 153, 0.18) 295deg, rgba(16, 185, 129, 0) 360deg);
$card-line-color: #424348;
$card-tile-color: var(--gradient-bg);
$blur-opacity: .01;

.decor-wrapper {
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}

.mid-left-decor {
  width: 100%;
}

section#challenges {
  padding-top: 6rem;
}

@media (min-width: 768px) {
  .decor-wrapper {
    top: 25%;
    width: 75%
  }

  .mid-left-decor {
    width: 75%;
  }
}

@media (min-width: 1024px) {
  .decor-wrapper {
    top: 15%;
  }
  .mid-left-decor {
    width: 100%;
  }
}

.timeline {
  position: relative;
  padding-left: 4rem;
  margin: 0 0 0 30px;
  color: white;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: $timeline-body-bg;
  }

  .timeline-container {
    position: relative;
    margin-bottom: 2.5rem;

    .shine {
      border-radius: inherit;
      position: absolute;
      inset: 0;
      z-index: 1;
      overflow: hidden;
      transition: opacity .5s;
      transition-delay: 0s;

      &:before {
        content: '';
        width: 150%;
        padding-bottom: 150%;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        bottom: 55%;
        filter: blur(35px);
        opacity: ($card-shine-opacity);
        transform: translateX(-50%);
        background-image: ($card-shine-gradient);
      }
    }

    .background {
      border-radius: inherit;
      position: absolute;
      inset: 0;
      overflow: hidden;
      -webkit-mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
      mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);

      .tiles {
        transition: opacity .25s;

        .tile {
          position: absolute;
          background-image: ($card-tile-color);
          animation-duration: 8s;
          animation-iteration-count: infinite;
          animation-name: tile;
          opacity: 0;

          &.tile-4,
          &.tile-6,
          &.tile-10 {
            animation-delay: -2s;
          }

          &.tile-3,
          &.tile-5,
          &.tile-8 {
            animation-delay: -4s;
          }

          &.tile-2,
          &.tile-9 {
            animation-delay: -6s;
          }

          &.tile-1 {
            top: 0;
            left: 0;
            height: 10%;
            width: 22.5%;
          }

          &.tile-2 {
            top: 0;
            left: 22.5%;
            height: 10%;
            width: 27.5%;
          }

          &.tile-3 {
            top: 0;
            left: 50%;
            height: 10%;
            width: 27.5%;
          }

          &.tile-4 {
            top: 0;
            left: 77.5%;
            height: 10%;
            width: 22.5%;
          }

          &.tile-5 {
            top: 10%;
            left: 0;
            height: 22.5%;
            width: 22.5%;
          }

          &.tile-6 {
            top: 10%;
            left: 22.5%;
            height: 22.5%;
            width: 27.5%;
          }

          &.tile-7 {
            top: 10%;
            left: 50%;
            height: 22.5%;
            width: 27.5%;
          }

          &.tile-8 {
            top: 10%;
            left: 77.5%;
            height: 22.5%;
            width: 22.5%;
          }

          &.tile-9 {
            top: 32.5%;
            left: 50%;
            height: 22.5%;
            width: 27.5%;
          }

          &.tile-10 {
            top: 32.5%;
            left: 77.5%;
            height: 22.5%;
            width: 22.5%;
          }
        }
      }

      @keyframes tile {
        0%,
        12.5%,
        100% {
          opacity: 0.5;
        }

        25%,
        82.5% {
          opacity: 0;
        }
      }

      .line {
        position: absolute;
        inset: 0;


        &:before,
        &:after {
          content: '';
          position: absolute;
          background-color: ($card-line-color);
          transition: transform .35s;
        }

        &:before {
          left: 0;
          right: 0;
          height: 1px;
          transform-origin: 0 50%;
        }

        &:after {
          top: 0;
          bottom: 0;
          width: 1px;
          transform-origin: 50% 0;
        }

        &.line-1 {
          &:before {
            top: 10%;
          }

          &:after {
            left: 22.5%;
          }

          &:before,
          &:after {
            transition-delay: .3s;
          }
        }

        &.line-2 {
          &:before {
            top: 32.5%;
          }

          &:after {
            left: 50%;
          }

          &:before,
          &:after {
            transition-delay: .15s;
          }
        }

        &.line-3 {
          &:before {
            top: 55%;
          }

          &:after {
            right: 22.5%;
          }
        }
      }
    }

    .timeline-icon {
      position: absolute;
      left: -88px;
      top: 4px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      text-align: center;
      font-size: 2rem;
      background: $secondary;

      i {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .timeline-body {
      background: $timeline-body-bg;
      border-radius: $timeline-body-round;
      padding: 20px 20px 15px;
      box-shadow: $timeline-body-shadow;

      &:before {
        content: '';
        background: inherit;
        width: 20px;
        height: 20px;
        display: block;
        position: absolute;
        left: -10px;
        transform: rotate(45deg);
        border-radius: 0 0 0 2px;
      }

      .timeline-content {
        position: relative;
        z-index: 2;
      }

      .timeline-title {
        margin-bottom: 1.4rem;

        .badge {
          text-align: start;
          max-width: 100%;
          background: $secondary;
          padding: 4px 8px;
          border-radius: 3px;
          font-size: 16px;
          font-weight: bold;
        }
      }

      // .timeline-subtitle {
      //   font-weight: 300;
      //   font-style: italic;
      //   opacity: .4;
      //   margin-top: 16px;
      //   font-size: 11px;
      // }
    }

    &.primary {

      .badge,
      .timeline-icon {
        background: $primary !important;
      }
    }

    &.secondary {

      .badge,
      .timeline-icon {
        background: $secondary !important;
      }
    }

    &.last {
      .badge,
      .timeline-icon {
        background: $last !important;
      }
    }
  }
}

@media (max-width: 767px) {
  .timeline-body {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }
}
</style>