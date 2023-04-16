const { createApp } = Vue;

createApp({
  data() {
    return {
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
          const onboardingElement = document.getElementById("onboarding");
          onboardingElement.scrollIntoView();
        }
      },
    };
  },
}).mount("#onboarding");
