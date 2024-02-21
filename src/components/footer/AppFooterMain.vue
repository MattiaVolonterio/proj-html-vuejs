<script>
export default {
  data() {
    return {};
  },
  props: {
    footerAddressInfo: Array,
    footerAddressBrand: Array,
    footerExplore: Array,
    footerInformation: Array,
    instaImg: Array,
  },
  methods: {
    getImgPath(img) {
      return new URL(`../../assets/img/${img}`, import.meta.url).href;
    },

    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <!-- ADDRESS -->
        <div class="col-4">
          <div class="col-title">Address</div>
          <div class="col-list">
            <ul>
              <li v-for="info in footerAddressInfo">
                {{ info }}
              </li>
            </ul>
          </div>
          <div class="col-brands">
            <a v-for="brand in footerAddressBrand" href="#">
              <font-awesome-icon
                :icon="brand"
                size="xl"
                style="color: lightgray"
                class="me-4"
              />
            </a>
          </div>
        </div>
        <!-- EXPLORE -->
        <div class="col-2">
          <div class="col-title">Explore</div>
          <div class="col-list">
            <ul>
              <li v-for="item in footerExplore">
                <a href="#">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- INFORMATION -->
        <div class="col-2">
          <div class="col-title">Information</div>
          <div class="col-list">
            <ul>
              <li v-for="item in footerInformation">
                <a href="#">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- INSTAGRAM -->
        <div class="col-4">
          <div class="col-title">
            Instagram
            <a href="#">@maxcoach</a>
          </div>
          <div class="col-img">
            <div v-for="img in instaImg" class="img-container">
              <img :src="getImgPath(img)" alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer-end">
        <span>
          <font-awesome-icon icon="fa-regular fa-copyright" />
          2020 Maxcoach. All Rights Reserved
        </span>
      </div>
    </div>
    <div class="to-top-button" @click="scrollTop()">
      <font-awesome-icon
        icon="fa-solid fa-arrow-up"
        size="xl"
        style="color: white"
      />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

footer {
  position: relative;
  .container {
    .row {
      margin-top: 5rem;
      margin-bottom: 6rem;

      .col-title {
        font-weight: bold;

        a {
          font-size: 0.85rem;
          color: $orange;
        }
      }

      .col-brands {
        margin-top: 1rem;
      }

      .col-list {
        margin-top: 1rem;
        ul {
          list-style: none;
          margin: 0;
          padding: 0;

          li {
            margin-top: 0.6rem;
            font-size: 0.9rem;
            color: $headerList;
            a {
              text-decoration: none;
              color: inherit;
            }
          }
        }
      }

      .col-img {
        display: flex;
        gap: 20px;
        margin-top: 25px;

        .img-container {
          width: 120px;
          aspect-ratio: 1;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }
      }
    }

    .footer-end {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 0.8rem;
      color: $headerList;
    }
  }
  .to-top-button {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    right: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: $orange;
  }
}
</style>
