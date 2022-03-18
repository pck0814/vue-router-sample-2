<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/product">상품 정보</router-link>
    </nav>
    <!-- 여기에 경로와 일치하는 뷰가 출력됩니다. -->
    <router-view />
  </div>
</template>