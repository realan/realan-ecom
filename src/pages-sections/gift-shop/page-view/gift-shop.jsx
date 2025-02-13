import { Fragment } from 'react'

// GLOBAL CUSTOM COMPONENTS
import Setting from 'components/settings'
import Newsletter from 'components/newsletter'
import StickyWrapper from 'components/sticky-wrapper'
import SideNavbar from 'components/page-sidenav/side-navbar'
import { MobileNavigationBar2 } from 'components/mobile-navigation'

// LOCAL CUSTOM COMPONENTS
import Section1 from '../section-1'
import Section2 from '../section-2'
import Section3 from '../section-3'
import Section4 from '../section-4'
import Section5 from '../section-5'
import Section6 from '../section-6'
import Section7 from '../section-7'

// API FUNCTIONS
import api from 'utils/__api__/gift-shop'
import { mobileNavigationTwo } from 'data/layout-data'

// ==============================================================

// ==============================================================

export default async function GiftShopPageView({ selected }) {
  const products = await api.getAllProducts(selected)
  const navList = await api.getCategoryNavigation()
  // const carouselData = await api.getMainCarouselData()
  const popularProducts = await api.getPopularProducts()
  const topSailedProducts = await api.getTopSailedProducts()

  console.log('navList', navList)
  console.log('products', navList)
  console.log('popularProducts', navList)
  console.log('topSailedProducts', navList)

  // SIDE NAVBAR COMPONENT
  const SideNav = (
    <SideNavbar
      line='dash'
      navList={navList}
      sx={{
        borderRadius: 0,
      }}
    />
  )
  return (
    <Fragment>
      {/* TOP HERO AREA */}
      {/* <Section1 carouselData={carouselData} /> */}

      <StickyWrapper className='pb-4' SideNav={SideNav}>
        {selected ? (
          // FILTERED PRODUCT LIST
          <Section6 products={products} title={selected} />
        ) : (
          <Fragment>
            {/* SERVICE LIST AREA */}
            <Section2 />

            {/* OFFER BANNER AREA */}
            <Section3 />

            {/* TOP CATEGORY AREA */}
            <Section4 />

            {/* POPULAR PRODUCT AREA */}
            <Section5 title='Popular Products' products={popularProducts} />

            {/* TOP SALES PRODUCTS AREA */}
            <Section5 title='Top Sales Products' products={topSailedProducts} />

            {/* ALL PRODUCTS AREA */}
            <Section6 title='All Gift Items' products={products} />
          </Fragment>
        )}

        {/* SUMMER OFFER BANNER AREA */}
        <Section7 />
      </StickyWrapper>

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      {/* <Setting /> */}

      {/* POPUP NEWSLETTER FORM */}
      <Newsletter image='/assets/images/newsletter/bg-5.png' />

      {/* SMALL DEVICE BOTTOM NAVIGATION */}
      <MobileNavigationBar2 navigation={mobileNavigationTwo}>
        {SideNav}
      </MobileNavigationBar2>
    </Fragment>
  )
}
