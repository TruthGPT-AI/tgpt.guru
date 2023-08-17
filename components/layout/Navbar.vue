<template>
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
    id="mainNav"
  >
    <div class="container px-md-5">
      <a
        class="nav-link navbar-brand fw-bold"
        href="#page-top"
      >
        <img
          src="/logo-blue.png"
          alt="Truth GPT logo"
        />
      </a>
      <button
        class="navbar-toggler text-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi-list"></i>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarResponsive"
      >
        <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
          <li class="nav-item">
            <a
              class="nav-link me-lg-3"
              href="#introduction"
            >
              {{ $t("navbar.introduction") }}
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link me-lg-3"
              href="#features"
            >
              {{ $t("navbar.features") }}
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link me-lg-3"
              href="#challenges"
            >
              {{ $t("navbar.challenges") }}
            </a>
          </li>
        </ul>

        <div class="header-languages-change dropdown mb-3 mb-lg-0">
          <div
            class="languages-change__label dropdown-toggle text-white me-4 "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span v-if="locale === 'vi'">Tiếng Việt</span>
            <span v-else>English</span>
          </div>
          <ul class="languages-list dropdown-menu dropdown-menu-dark mt-2">
            <li>
              <NuxtLink
                :class="`dropdown-item ${locale === 'en' ? 'active' : ''}`"
                :to="switchLocalePath('en')"
                >English</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :class="`dropdown-item ${locale === 'vi' ? 'active' : ''}`"
                :to="switchLocalePath('vi')"
                >Tiếng Việt</NuxtLink
              >
            </li>
          </ul>
        </div>

        <button
          class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
          data-bs-toggle="modal"
          data-bs-target="#feedbackModal"
        >
          <span class="d-flex align-items-center">
            <i class="bi-chat-text-fill me-2"></i>
            <span class="small">
              {{ $t("navbar.join") }}
            </span>
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useSwitchLocalePath, useI18n } from "#imports";
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();
</script>

<style scoped>
#mainNav {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #09041c;
}

#mainNav img {
  width: 183px;
  height: 35px;
}

#mainNav .navbar-brand {
  font-family: "Kanit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
#mainNav .navbar-brand:hover,
#mainNav .navbar-brand:active {
  color: #2937f0;
}
#mainNav .navbar-toggler {
  font-size: 1.8rem;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  box-shadow: none !important;
}

#mainNav .navbar-nav .nav-item .nav-link {
  color: var(--text-primary-color);
}
#mainNav .navbar-nav .nav-item .nav-link:hover,
#mainNav .navbar-nav .nav-item .nav-link.active {
  color: var(--highlight-color);
}
/* #mainNav .navbar-nav .nav-item .nav-link.active {
  color: #2937f0;
} */

@media (max-width: 767px) {
  #mainNav img {
    width: 140px;
    height: 26px;
  }
}
</style>
