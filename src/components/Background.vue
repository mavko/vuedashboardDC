<template>
  <div id="" class="globalContent">
    <div class="Helm-PageIntro Helm-PageIntro--hasImage">
      <div class="Helm-PageIntro__content">
        <div class="Helm-PageIntro__overline">
          <div class="Helm-ProductTitle">
            <figure class="Helm-ProductTitle__icon">
              <span
                class="Helm-Icon Helm-Icon--medium Helm-Icon__corporate_card Helm__background--transparent Helm-Icon--full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 95.281">
                  <title>inspectionOS</title>
                  <path
                    d="M41.143,91.692h-.02a2.527,2.527,0,0,1-2.1-2.894q.011-.07.026-.139l4.4-20.711L29.826,61.3A11.981,11.981,0,0,1,25.4,43.5L56.354.83A47.547,47.547,0,0,0,37.892,94.11c.446.1.882.168,1.318.248Z"
                    transform="translate(0 0)"
                    style="fill:#87bbfd"
                  />
                  <path
                    d="M57.672,1.078c-.446-.1-.882-.168-1.318-.248L25.386,43.5a11.981,11.981,0,0,0,4.43,17.788l13.626,6.659L52.1,27.239,65.729,33.9a11.97,11.97,0,0,1,4.43,17.788L39.21,94.368A47.55,47.55,0,1,0,57.672,1.078Z"
                    transform="translate(0 0)"
                    style="fill:#555abf"
                  />
                  <path
                    d="M65.441,33.75,52.123,27.239,39.062,88.65a2.527,2.527,0,0,0,1.932,3.006q.069.015.139.026h.03l29.016-40A12.011,12.011,0,0,0,72.1,41.727,12.328,12.328,0,0,0,65.441,33.75Z"
                    transform="translate(0 0)"
                    style="fill:#fff"
                  />
                </svg>
              </span>
            </figure>
            <div class="Helm-ProductTitle__title-container">
              <h1 class="common-UppercaseTitle Helm__text--blue4">
                inspection.OS
              </h1>

              <div
                class="Helm-Pill common-Pill Helm__background--blue4 Helm__text--white"
              >
                NORDIC REGION ONLY
              </div>
            </div>
          </div>
        </div>
        <div class="Helm-PageIntro__title">
          <h1 class="common-PageTitle Helm__text--slate1 Hero__title">
            The
            <em class="Hero__highlight">Operating System</em>
            for Leading Construction Businesses
          </h1>
        </div>
        <div class="Helm-PageIntro__buttons">
          <a
            href="#request-invite"
            class="common-Button Helm-Button common-Button--default js-request-invite"
            >Request invite</a
          >

          <a href="/docs/corporate-card/faqs" class="common-Button Helm-Button"
            >Learn more</a
          >
        </div>
      </div>
      <div class="Helm-PageIntro__image">
        <div class="HeroGraphic js-hero-graphic" style="opacity: 1.79065;">
          <img src="@/assets/schedule_screenshot.png" alt="" />
        </div>
      </div>
    </div>

    <div class="common-StripeGrid anchorBottom Hero__stripes">
      <div class="backgroundContainer">
        <div class="grid">
          <div class="background Helm__background--slate9"></div>
        </div>
      </div>

      <div class="stripeContainer">
        <div class="grid">
          <div class="stripe"></div>
          <div class="stripe"></div>
          <div class="stripe"></div>
          <div class="stripe"></div>
          <div class="stripe"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Background"
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
@import "@/global-styles/backgrounds.scss";
</style>
