<template>
  <div class="container">
    <div class="gradient-background"></div>
    <div class="stripes-container initial">
      <div class="stripe gradient"></div>
      <div class="left-dots-container">
        <img src="@/assets/dots-left.svg" alt />
      </div>
      <div class="light-dots-container"></div>
      <div class="dark-dots-container">
        <img src="@/assets/dots-right-dark.svg" alt />
      </div>
    </div>
    <div class="request">
      Looking for the recover page?
      <router-link to="/request">Recover an account</router-link>
    </div>
    <div class="login">
      <div class="login-header">
        <img src="@/assets/inspectionOS.svg" alt />
      </div>
      <form @submit.prevent="onSubmit">
        <div class="form-row text email">
          <label class="email" for="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane.doe@example.com"
            required="yes"
            v-model="email"
          />
        </div>
        <div class="submit-row">
          <button class="common-Button common-Button--default" type="submit">Request Account</button>
        </div>
      </form>
    </div>
    <router-link to="/signin" class="recover-pw"
      >Already have an account? Sign in here</router-link>
  </div>
</template>

<script>

export default { 
  name: "Request",
  components: {
    Notification
  },
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: ""
    };
  },
  methods: {
    onSubmit() {
      const email = this.email;

      // slack api logic
      let slackURl = new URL("https://slack.com/api/chat.postMessage")

      const data = {
        token: 'xoxp-860831059589-849353704243-862804370295-6267d53d274b4d10056b4cf8bd040922',
        channel: "hq",
        text: '${email} has requested admin access to HQ. Plis go 2 netlify 2 inv them.'
      };

      slackURL.search = new URLSearchParams(data);

      fetch(slackURL).then (() => {
        this.$router.push({
          name: "signin",
          params: {
            userRequestedAccount: true,
            email: email
          }
        })
      }).catch(error => {
        alert("Error: " + error);
      });
    }
  },
  mounted() {
    const params = this.$route.params;

    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "You have logged out!";
    } else if (params.userRecoveredAccount) {
      this.hasText = true;
      this.text = `A recovery email has been sent to ${params.email}`;
    } else if (params.userRequestedAccount) {
      this.hasText = true;
      this.text = `Your request has been sent to an administator for ${
        params.email
      }`;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
@import "@/global-styles/backgrounds.scss";
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
img {
  margin: 0 auto;
}
.login {
  border-radius: 4px;
  -webkit-box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
    0 30px 60px -30px rgba(0, 0, 0, 0.3),
    0 -18px 60px -10px rgba(0, 0, 0, 0.025);
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25),
    0 30px 60px -30px rgba(0, 0, 0, 0.3),
    0 -18px 60px -10px rgba(0, 0, 0, 0.025);
  background: #f7fafc;
  margin: 0 auto;
  max-width: 440px;
  width: 100%;
  .login-header {
    box-shadow: inset 0 -1px #e3e8ee;
    background-color: #fff;
    width: 100%;
    padding: 30px 0px 20px 30px;
  }
  img {
    max-width: 330px;
    width: 100%;
  }
}

.request {
  position: absolute;
  top: 40px;
  right: 40px;
  color: rgba(134, 134, 134, 0.7);
  a {
    color: $blue;
  }
}
.recover-pw {
  left: 0;
  right: 0;
  bottom: 20%;
  position: absolute;
  margin: 0 auto;
  color: white;
}
.form-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-bottom: none;
  padding: 20px 20px 0px 20px;
}
.submit-row {
  text-align: right;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  padding: 15px 20px 15px 0px;
}
.common-Button {
  white-space: nowrap;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
    0 1px 3px rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background: #fff;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: #6772e5;
  text-decoration: none;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  cursor: pointer;
}
.common-Button:hover {
  color: #7795f8;
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
  -webkit-box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  -webkit-box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
    0 3px 6px rgba(0, 0, 0, 0.08);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}
a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  text-decoration: underline;
}
// bg styling
.stripes-container {
  pointer-events: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  -webkit-transform: skewY(-12deg);
  transform: skewY(-12deg);
  -webkit-transition: opacity 0.2s ease-out;
  transition: opacity 0.2s ease-out;
  will-change: transform;
  z-index: -1;
}
.stripes-container.initial .gradient {
  height: 5000px;
  bottom: 0;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#f6f9fc),
    to(#fff)
  );
  background: linear-gradient(270deg, #f6f9fc, #fff);
  left: 0;
  right: 0;
}
.stripes-container .stripe {
  position: absolute;
}
.stripes-container.initial .gradient {
  height: 5000px;
  bottom: 0;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#f6f9fc),
    to(#fff)
  );
  background: linear-gradient(270deg, #f6f9fc, #fff);
  left: 0;
  right: 0;
}
.stripes-container .left-dots-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.stripes-container .left-dots-container img {
  background-size: 100%;
  position: absolute;
  bottom: 29px;
  left: -160px;
  -webkit-transform: skewY(12deg);
  transform: skewY(12deg);
  z-index: 2;
}
.stripes-container .dark-dots-container img {
  right: 6px;
}
.stripes-container .dark-dots-container img {
  background-size: 100%;
  position: absolute;
  top: -141px;
  width: 220px;
  height: 352px;
  -webkit-transform: skewY(12deg);
  transform: skewY(12deg);
  will-change: opacity;
}
// inputs
fieldset {
  border: none;
  margin: 0;
  padding: 0;
}
input {
  background-color: #fff;
  box-shadow: 0 2px 5px 0 rgba(60, 66, 87, 0.12),
    0 1px 1px 0 rgba(0, 0, 0, 0.12);
  padding: 5px 20px 8px 13px;
  width: auto;
  display: block;
  border: none;
  outline: none;
  border-radius: 4px;
  color: #333;
  font-family: "Camphor", "Open Sans", "Segoe UI", sans-serif;
  font-weight: 400;
  font-size: 17px;
  line-height: 26px;
  max-width: 300px;
  width: 100%;
  -webkit-transition: background-color 0.1s ease-in, color 0.1s ease-in;
  transition: background-color 0.1s ease-in, color 0.1s ease-in;

  &::placeholder {
    color: #333;
  }
  &:focus {
    border-color: #6772e5;
    border-width: 1px;
  }
}
.form-row > label {
  color: #424770;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 26px;
  margin-right: 20px;
  -ms-flex-item-align: center;
  align-self: center;
  -webkit-box-flex: 32%;
  -ms-flex: 32%;
  flex: 32%;
  text-transform: none;
  text-align: left;
}
</style>
