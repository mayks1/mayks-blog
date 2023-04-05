<template>
  <footer class="flex-container">
    <!-- Последни Публикации -->
    <!-- <div class="section-1 mb-10">

      <h4 class="title">Последни Публикации</h4>
      <div class="section-box">
      <ul class="footer-link">
        <li>
          <a href="javascript:void(0);">Community</a>
        </li>
        <li>
          <a href="javascript:void(0);">Company</a>
        </li>
        <li>
          <a href="javascript:void(0);">Jobs</a>
        </li>
        <li>
          <a href="javascript:void(0);">Blog</a>
        </li>
      </ul>
      </div>
    </div> -->
    <!-- Категории -->
    <!-- <div class="section-2 mb-10">
      <h4 class="title">Категории</h4>
      <div class="section-box">
      <ul class="footer-link">
        <li>
          <a href="javascript:void(0);">Tutorials</a>
        </li>
        <li>
          <a href="javascript:void(0);">Plugins <span class="badge badge-primary fs-11 py-1 px-2 ms-1">NEW</span></a>
        </li>
        <li>
          <a href="javascript:void(0);">Events</a>
        </li>
        <li>
          <a href="javascript:void(0);">Integrations</a>
        </li>
      </ul>
      </div>
    </div> -->
    <!-- За Сайта -->
    <!-- <div class="section-3 mb-10">
      <h4 class="title">За Сайта</h4>
      <div class="section-box">
        <div class="avatar">
          <img class="thumbnail" src="https://res.cloudinary.com/mayks/image/upload/c_scale,w_30/v1653204230/blog-mayks/avatar/avatarpp0421_slqtlh.webp" alt="Mayks Avatar">
        </div>
        <div class="info">
          <h4 class="title-small">
            Mayks
          </h4>
          <p class="founder">Създател и редактор</p>
        </div>
      </div>
    </div> -->

    <div class="copyright">
      <div class="logo">
        <logo />
      </div>
      <p class="small text-muted text-center">© 2021 - 2023 MSPASE Blog. All rights reserved.</p>
    </div>
  </footer>

</template>

<style scoped>

.flex-container {
  display: flex;
  flex-direction: column; 
  flex-wrap: wrap;
  padding-bottom: 3rem;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-width: 768px) {
  .flex-container {
    flex-direction: row;
    justify-content: space-around;
  }

  .section-1, .section-2 {
    padding: 10px;
    flex: 47%;
  }

  .copyright, .section-3 {
    padding: 10px;
    flex: 100%;
  }

}

@media screen and (min-width: 1024px) {
  .section-1, .section-2, .section-3 {
    padding: 10px;
    flex: 30%;
  }


}

.title {
    color: var(--white);
}

.info .title-small {
    font-size: 18px;
    line-height: 1.45;
    margin-top: 0;
}

.title {
    color: var(--white);
}

.title::after {
    display: block;
    content: '';
    width: 60%;
    height: 2px;
    background: var(--gray);
    margin-top: 10px;
}
.section-box {
  padding-top: 10px;
}

.footer-link li {
  margin-bottom: 5px;
}

.footer-link li a {
  color: var(--light-gray);
}

.info {
  display: flex;
  flex-direction: column;
}

.info .founder {
    margin-top: 0px;
    margin-bottom: 9px;
    font-size: 14px;
    color: var(--light-gray);
}
.avatar {
    float: left;
    width: 30px;
    height: 30px;
    margin-right: 20px;
}

.avatar .thumbnail {
    width: 100%;
    display: block;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #00BEC1;
}

.copyright {
  text-align: center;
}
.copyright p {
  color: var(--light-gray);
}

.copyright .logo {
    margin: 30px 20px 20px;
}

</style>
