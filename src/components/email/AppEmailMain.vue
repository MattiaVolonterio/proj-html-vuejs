<script>
import EmailBg from "./EmailBg.vue";
export default {
  components: {
    EmailBg,
  },
};
</script>

<template>
  <div class="email-container">
    <EmailBg />
    <div class="container">
      <div class="input-label">Newsletter to get in touch</div>

      <div class="email-input">
        <span>Your e-mail</span>
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.email-container {
  position: relative;
  .container {
    width: 980px;
    position: absolute;
    display: flex;
    gap: 50px;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;

    .input-label {
      font-size: 1.5rem;

      text-align: end;
      width: 30%;
    }

    .email-input {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 70%;
      flex-grow: 1;
      flex-shrink: 0;

      border-bottom: 1px solid white;
      padding-bottom: 0.6rem;

      span {
        display: inline block;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
