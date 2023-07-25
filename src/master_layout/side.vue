<template>
    <section>
    <div class="sidebar-wrapper">
        <div id="sidebarEffect"></div>
        <div>
          <div class="logo-wrapper logo-wrapper-center">
            <a href="index.html" data-bs-original-title="" title="">
              <img
                class="img-fluid for-white"
                src="assets/images/logo/full-white.png"
                alt="logo"
              />
            </a>
            <div class="back-btn">
              <i class="fa fa-angle-left"></i>
            </div>
            <div class="toggle-sidebar">
              <i class="ri-apps-line status_toggle middle sidebar-toggle"></i>
            </div>
          </div>
          <div class="logo-icon-wrapper">
            <a href="index.html">
              <img
                class="img-fluid main-logo main-white"
                src="assets/images/logo/logo.png"
                alt="logo"
              />
              <img
                class="img-fluid main-logo main-dark"
                src="assets/images/logo/logo-white.png"
                alt="logo"
              />
            </a>
          </div>
          <nav class="sidebar-main">
            <div class="left-arrow" id="left-arrow">
              <i data-feather="arrow-left"></i>
            </div>

            <div id="sidebar-menu">
              <ul class="sidebar-links" id="simple-bar">
                <li class="back-btn"></li>

                <li class="sidebar-list">
                  <router-link :to="{ name: 'dashboard' }" class="sidebar-link sidebar-title   link-nav"> 
                    <span >Dashboard</span></router-link>
                </li>
              </ul>
            </div>

            <div class="right-arrow" id="right-arrow">
              <i data-feather="arrow-right"></i>
            </div>
          </nav>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>