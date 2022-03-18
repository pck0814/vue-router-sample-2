import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import ProductList from './views/ProductList' // 상품 목록
import Product from './views/Product' // 상품 정보(부모 라우트)
// Product 자식 라우트들
import ProductHome from './views/Product/Home'
import ProductReview from './views/Product/Review'
import ProductReviewDetail from './views/Product/ReviewDetail'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    // 상품 목록 페이지
    {
      path: '/product',
      component: ProductList,
    },
    // 상품 정보 페이지
    {
      path: '/product/:id',
      component: Product,
      props: route => ({
        id: Number(route.params.id)
      }),
      children: [
        // 상품 상세(디폴트 라우트)
        {
          name: 'product-home',
          path: '',
          component: ProductHome
        },
        // 상품 리뷰 목록
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview
        },
        // 상품 리뷰 상세
        {
          name: 'review-detail',
          path: 'review/:rid', // 부모 라우트로 사용하지 않는 매개 변수 지정하기
          component: ProductReviewDetail,
          props: route => ({
            rid: Number(route.params.rid)
          })
        }
      ]
    }
  ]
})
export default router