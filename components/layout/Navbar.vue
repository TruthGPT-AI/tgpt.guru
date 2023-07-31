<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
    <div class="container px-md-5">
      <a class="navbar-brand fw-bold" href="#page-top">
        <img 
          src="/logo-blue.png" 
          width="183px"
          height="35px"
        />
      </a>
      <button 
        class="navbar-toggler text-white" type="button" 
        data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"
      >
        Menu
        <i class="bi-list"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
          <li class="nav-item">
            <a class="nav-link me-lg-3" href="#introduction">
              Introduction
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link me-lg-3" href="#features">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link me-lg-3" href="#challenges">
              Challenges
            </a>
          </li>
        </ul>
        <button 
          class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" 
          data-bs-toggle="modal" data-bs-target="#feedbackModal"
        >
          <span class="d-flex align-items-center">
            <i class="bi-chat-text-fill me-2"></i>
            <span class="small">
              Join us now
            </span>
          </span>
        </button>
      </div>
    </div>
  </nav>

  <LayoutFeedbackModal />
</template>

<style scoped>
#mainNav {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #09041c;
}
#mainNav .navbar-brand {
  font-family: "Kanit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
#mainNav .navbar-brand:hover, #mainNav .navbar-brand:active {
  color: #2937f0;
}
/* #mainNav .navbar-toggler {
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  color: #212529;
} */
#mainNav .navbar-nav .nav-item .nav-link {
  color: var(--text-primary-color);
}
#mainNav .navbar-nav .nav-item .nav-link:hover {
  color: var(--highlight-color);
}
#mainNav .navbar-nav .nav-item .nav-link.active {
  color: #2937f0;
}

</style>