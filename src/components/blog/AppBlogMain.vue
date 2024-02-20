<script>
import BlogBg from "./BlogBg.vue";
export default {
  props: { cardsArray: Array },

  components: {
    BlogBg,
  },
  methods: {
    getImgPath(img) {
      return new URL(`../../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>
<template>
  <div class="blog-main-container">
    <BlogBg />
    <div class="blog-header">
      <div class="title">Articles and Tips</div>
      <div class="subtitle">Latest From The Blog</div>
    </div>
    <!-- CARD SECTION -->
    <div class="left-card">
      <div class="img-top-container">
        <img :src="getImgPath(cardsArray[2].imgUrl)" alt="img left" />
      </div>
      <div class="left-card-text-container">
        <span class="card-subtext">ARTIST</span>
        <span class="card-title">{{ cardsArray[2].title }}</span>
        <div class="badges">
          <div>
            <font-awesome-icon icon="fa-regular fa-calendar" />
            <span>{{ cardsArray[2].date }}</span>
          </div>
          <div>
            <font-awesome-icon icon="fa-regular fa-eye" />
            <span>{{ cardsArray[2].views }} views</span>
          </div>
        </div>
      </div>
    </div>
    <div class="middle-card-container">
      <div class="middle-card">
        <img
          class="main-image"
          :src="getImgPath(cardsArray[1].imgUrl)"
          alt="middle card img"
        />
        <img
          class="paint-stains"
          :src="getImgPath('paint-stains.png')"
          alt="paint-stains"
        />
        <img
          :src="getImgPath('maxcoach-shape-05-150x150.png')"
          alt="shape 2"
          class="backgroundShapeTop"
        />
        <div class="middle-card-text-container">
          <span class="card-subtext">ARTIST</span>
          <span class="card-title">{{ cardsArray[1].title }}</span>
          <div class="badges">
            <div>
              <font-awesome-icon icon="fa-regular fa-calendar" />
              <span>{{ cardsArray[1].date }}</span>
            </div>
            <div>
              <font-awesome-icon icon="fa-regular fa-eye" />
              <span>{{ cardsArray[1].views }} views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-card">
      <div class="img-top-container">
        <img :src="getImgPath(cardsArray[0].imgUrl)" alt="img left" />
      </div>
      <div class="right-card-text-container">
        <span class="card-subtext">ARTIST</span>
        <span class="card-title">{{ cardsArray[0].title }}</span>
        <div class="badges">
          <div>
            <font-awesome-icon icon="fa-regular fa-calendar" />
            <span>{{ cardsArray[0].date }}</span>
          </div>
          <div>
            <font-awesome-icon icon="fa-regular fa-eye" />
            <span>{{ cardsArray[0].views }} views</span>
          </div>
        </div>
      </div>
    </div>
    <!-- LINK -->
    <p class="detail-link">
      Get into details now?
      <a href="#"
        >View all posts <font-awesome-icon icon="fa-solid fa-arrow-right"
      /></a>
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.blog-main-container {
  position: relative;

  .blog-header {
    position: absolute;
    left: 50%;
    top: 6rem;
    transform: translate(-50%);
    text-align: center;
    .title {
      color: $sectionTitle;
      font-family: "Marck Script", cursive;
      font-size: 2rem;
    }

    .subtitle {
      font-weight: bold;
      font-size: 1.8rem;
      color: $lightBlack;
    }
  }

  .left-card,
  .right-card {
    position: absolute;
    background-color: white;
    width: 250px;
    height: 350px;
    box-shadow: -5px 5px 20px gray;

    .left-card-text-container,
    .right-card-text-container {
      padding: 1rem 1rem;

      .card-subtext {
        display: block;
        font-size: 0.8rem;
        font-weight: 500;
        color: $headerList;
        margin-bottom: 0.8rem;
      }
      .card-title {
        font-weight: bold;
      }
      .badges {
        display: flex;
        gap: 10px;
        font-size: 0.85rem;
        color: $headerList;
        margin-top: 1rem;

        span {
          display: inline-block;
          margin-left: 5px;
        }
      }
    }
  }

  .left-card {
    top: 55%;
    left: 23%;
    transform: translate(-50%, -50%);
  }

  .right-card {
    top: 45%;
    right: 23%;
    transform: translate(50%, -50%);
  }

  .middle-card-container {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);

    .middle-card {
      position: relative;

      .main-image {
        filter: brightness(0.75);
      }
      .paint-stains {
        width: 250px;
        position: absolute;
        bottom: -70px;
        left: 100%;
        transform: translate(-35%);
        z-index: -1;
      }

      .backgroundShapeTop {
        position: absolute;
        right: 100%;
        bottom: 100%;
        transform: translate(80%, 85%);
        z-index: -1;
      }

      .middle-card-text-container {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1rem 2rem 3rem 2rem;
        color: white;

        span {
          display: block;
        }

        .card-subtext {
          font-size: 1.2rem;
        }

        .card-title {
          font-weight: bolder;
          font-size: 1.8rem;
        }

        .badges {
          display: flex;
          gap: 20px;
          margin-top: 1rem;
          span {
            display: inline-block;
            margin-left: 10px;
          }
        }
      }
    }
  }

  .detail-link {
    position: absolute;
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%);
    color: $headerList;

    a {
      font-weight: bold;
      color: $orange;
    }
  }
}
</style>
