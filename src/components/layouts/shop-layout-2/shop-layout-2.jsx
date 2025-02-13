'use client'

import { Fragment, useCallback, useState } from 'react'
import Divider from '@mui/material/Divider'

// GLOBAL CUSTOM COMPONENTS
import Sticky from 'components/sticky'
import { SearchInput } from 'components/search-box'
import { CategoryList } from 'components/categories'
import { MobileMenu } from 'components/navbar/mobile-menu'
import { Header, HeaderCart, HeaderLogin } from 'components/header'
import { MobileHeader, HeaderSearch } from 'components/header/mobile-header'

// CUSTOM DATA MODEL

// ==============================================================

// ==============================================================

export default function ShopLayout2({ children, navbar, data }) {
  const { header, mobileNavigation } = data
  const [isFixed, setIsFixed] = useState(false)
  const toggleIsFixed = useCallback((fixed) => setIsFixed(fixed), [])
  const MOBILE_VERSION_HEADER = (
    <MobileHeader>
      <MobileHeader.Left>
        <MobileMenu navigation={header.navigation} />
      </MobileHeader.Left>

      <MobileHeader.Logo logoUrl={mobileNavigation.logo} />

      <MobileHeader.Right>
        <HeaderSearch>
          <SearchInput />
        </HeaderSearch>

        <HeaderLogin />
        <HeaderCart />
      </MobileHeader.Right>
    </MobileHeader>
  )
  return (
    <Fragment>
      {/* HEADER */}
      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={70}>
        <Header mobileHeader={MOBILE_VERSION_HEADER}>
          <Header.Logo url={header.logo} />

          {isFixed ? (
            <Header.CategoryDropdown>
              <CategoryList categories={header.categoryMenus} />
            </Header.CategoryDropdown>
          ) : null}

          <Header.Mid>
            <SearchInput />
          </Header.Mid>

          <Header.Right>
            {/* HEADER LOGIN BUTTON */}
            <HeaderLogin />

            {/* HEADER CART BUTTON */}
            <HeaderCart />
          </Header.Right>
        </Header>
      </Sticky>

      {/* NAVIGATION BAR */}
      {navbar ?? <Divider />}

      {/* BODY CONTENT */}
      {children}
    </Fragment>
  )
}
