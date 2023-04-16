const { createApp } = Vue;

createApp({
  data() {
    return {
      isMenuOpen: false,
      toggleMenu: function (fromMenu = false) {
        if (fromMenu) {
          this.isMenuOpen = false;
        } else {
          this.isMenuOpen = !this.isMenuOpen;
        }
      },
      activeStep: 1,
      setStep: function (step) {
        if (this.activeOs !== null) {
          this.activeStep = step;
        }
      },
      activeOs: null,
      setActiveOs: function (os) {
        this.activeOs = os;
      },
      nextStep: function () {
        if (this.activeStep < 3) {
          this.setStep(this.activeStep + 1);
          const onboardingElement = document.getElementById("steps-list");
          onboardingElement.scrollIntoView();
        }
      },
    };
  },
}).mount("#main");
