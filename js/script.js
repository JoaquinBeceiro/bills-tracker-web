const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      activeStep: 1,
      setStep: function (step) {
        this.activeStep = step;
      },
      activeOs: null,
      setActiveOs: function (os) {
        this.activeOs = os;
      },
    };
  },
}).mount("#onboarding");
