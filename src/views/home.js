import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import ActiveUsers from '../components/active-users'
import YouTube from '../components/you-tube'
import Testimonal from '../components/testimonal'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Resilientia</title>
        <meta property="og:title" content="Resilientia" />
      </Helmet>
      <section className="home-hero">
        <header className="home-header1">
          <div id="mobile-menu" className="home-mobile-navigation">
            <img
              alt="pastedImage"
              src="/pastedimage-no9b-1500h.png"
              className="home-logo"
            />
            <div className="home-links1">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="home-close-mobile-menu">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon10">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-desktop-navigation">
            <nav className="home-centered">
              <div className="home-left1">
                <div className="home-links2">
                  <span className="Link">Solutions</span>
                  <span className="Link">How it works</span>
                  <span className="Link">Prices</span>
                </div>
              </div>
              <div className="home-right1">
                <span className="home-sign-in Link">Sign in</span>
                <div className="home-get-started1">
                  <span className="home-text106">Get started</span>
                </div>
                <div id="open-mobile-menu" className="home-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="home-mobile-menu-button"
                  />
                </div>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="home-image1"
                />
              </div>
            </nav>
          </div>
          <div>
            <div className="home-container12">
              <Script
                html={`<script defer>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></Script>
            </div>
          </div>
        </header>
        <div className="home-container13">
          <img
            alt="image"
            src="/external/pastedimage-cbae-200h.png"
            className="home-image2"
          />
          <header className="home-content1">
            <h1 className="home-text107">
              l’efficienza energetica diventa semplice
            </h1>
            <div className="home-get-started2">
              <span className="home-text108">Get started</span>
            </div>
          </header>
        </div>
        <div className="home-dashboard-preview">
          <div className="home-outline">
            <img
              alt="pastedImage"
              src="/pastedimage-cdo-1400w.png"
              loading="lazy"
              className="home-image3"
            />
          </div>
        </div>
      </section>
      <section className="home-features">
        <div className="home-title">
          <span className="home-text109">
            <span>
              Let&apos;s grow your social media
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>presence</span>
          </span>
          <span className="home-text113">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>eiusmod tempor incididunt.</span>
          </span>
        </div>
        <div>
          <div className="home-container15">
            <Script
              html={`<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvt5DyriG2Wf0frmfzGQZOjlcT005WruHIhKY8EyKh8-2CJw/viewform?embedded=true" 
width="1000" height="2000" frameborder="0" marginheight="0" marginwidth="0"></iframe>`}
            ></Script>
          </div>
        </div>
        <div className="home-cards1">
          <div className="home-container16">
            <div className="card">
              <img
                alt="pastedImage"
                src="/pastedimage-fii6m-200h.png"
                className="home-icon12"
              />
              <span className="home-text116">Schedule</span>
              <span className="home-text117">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
            <div className="home-publish card">
              <img
                alt="pastedImage"
                src="/pastedimage-mimg-200h.png"
                className="home-icon13"
              />
              <span className="home-text118">Publish</span>
              <span className="home-text119">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
              </span>
            </div>
          </div>
          <div className="home-container17">
            <div className="card home-analyze">
              <img
                alt="pastedImage"
                src="/pastedimage-l6p-200h.png"
                className="home-icon14"
              />
              <span className="home-text120">Analyze</span>
              <span className="home-text121">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
            <div className="card">
              <img
                alt="pastedImage"
                src="/pastedimage-vyi5-200h.png"
                className="home-icon15"
              />
              <span className="home-text122">Get leads</span>
              <span className="home-text123">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-quote-container">
        <div className="home-quote1">
          <span className="home-message">
            “Scale your content, grew lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.”
          </span>
          <div className="home-author">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdpcmx8ZW58MHx8fHwxNjY0ODA5MjE1&amp;ixlib=rb-1.2.1&amp;w=200"
              className="home-avatar"
            />
            <span className="home-quote2">
              <span className="home-text124">—  Peter McPau</span>
              <span>, Founder and CEO, Active</span>
            </span>
          </div>
        </div>
      </section>
      <section className="home-statistics">
        <div className="home-container18">
          <ActiveUsers caption="— Active users" statistic="3.5M"></ActiveUsers>
          <ActiveUsers caption="— Brands" statistic="50k"></ActiveUsers>
          <ActiveUsers
            caption="— Accounts Managed"
            statistic="250K"
          ></ActiveUsers>
          <ActiveUsers caption="— Active leads" statistic="30M"></ActiveUsers>
        </div>
      </section>
      <div className="home-banner-manage">
        <div className="home-container19">
          <div className="home-left2">
            <span className="sub-title">Content Management</span>
            <span className="home-text127 title">
              Manage all your platforms in just one place.
            </span>
            <span className="home-text128">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
            </span>
            <div className="home-get-started3 template-button">
              <span className="home-text129">Get started</span>
            </div>
          </div>
          <div className="home-image-container1">
            <img
              alt="pastedImage"
              src="/pastedimage-wvmq%201-1200w.png"
              className="home-cards-image1"
            />
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-container20">
          <div className="home-left3">
            <span className="home-text130">Improve Scheduling</span>
            <h2 className="home-text131 title">
              Powerful scheduler that saves you time
            </h2>
            <span className="home-text132">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
            </span>
            <div className="home-get-started4 template-button">
              <span className="home-text133">Get started</span>
            </div>
          </div>
          <div className="home-image-container2">
            <img
              alt="pastedImage"
              src="/83d913a38a75e38d7cef4fea757ed7ed-1200w.png"
              className="home-cards-image2"
            />
          </div>
        </div>
      </div>
      <section className="home-integrations">
        <div className="home-centered-container1">
          <div className="home-heading1">
            <span className="sub-title">Integrations</span>
            <span className="title">
              Integrated with the tools you know and love
            </span>
            <span className="home-text136">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
            </span>
          </div>
          <div className="home-pills-container">
            <div className="home-pills">
              <div className="home-container21">
                <YouTube></YouTube>
                <YouTube pastedImageSrc="/logos/group%201012-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/layer1-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group-200h.png"></YouTube>
              </div>
              <div className="home-container22">
                <YouTube pastedImageSrc="/logos/pinterest%20logo-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201014-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201015-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201017-200h.png"></YouTube>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-how-it-works">
        <div className="home-centered-container2">
          <div className="home-heading2">
            <span className="home-text137">How it works</span>
            <span className="home-text138 title">
              Being social and getting leads has never been easier
            </span>
          </div>
          <div className="home-category1">
            <div className="home-headng1">
              <span className="home-text139">
                1 — Sign up
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text140">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
              </span>
              <div className="home-get-started5 template-button">
                <span className="home-text141">Get started</span>
              </div>
            </div>
            <div className="home-container23">
              <img
                alt="pastedImage"
                src="/pastedimage-k5xi%201-1200w.png"
                className="home-pasted-image1"
              />
            </div>
          </div>
          <div className="home-row">
            <div className="home-category2">
              <div className="home-headng2">
                <span className="home-text142">2 — Act</span>
                <span className="home-text143">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/pastedimage-ibg-1200w.png"
                className="home-pasted-image2"
              />
            </div>
            <div className="home-category3">
              <div className="home-headng3">
                <span className="home-text144">2 — Act</span>
                <span className="home-text145">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/pastedimage-3c4o-1200w.png"
                className="home-pasted-image3"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-pricing">
        <div className="home-centered-container3">
          <div className="home-heading3">
            <span className="home-text146 title">
              Pricing for all kind of businesses
            </span>
            <span className="home-text147">
              Create next-generation solutions for small business customers with
              pricing options that accommodate everyone.
            </span>
            <div className="home-selection">
              <span className="home-text148">Monthly</span>
              <span className="home-text149">Yearly</span>
            </div>
          </div>
          <div className="home-cards2">
            <div className="home-card1">
              <span className="home-text150">Free</span>
              <span className="home-text151">
                Unlimited lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed doliqua.
              </span>
              <div className="home-get-started6 template-button">
                <span className="home-text152">Start for free</span>
              </div>
              <span className="home-text153">What&apos;s included</span>
              <div className="home-bullet-points1">
                <div className="home-point10">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon16"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text154">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point11">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon18"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text155">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card2">
              <span className="home-text156">Pay as you go</span>
              <span className="home-text157">
                <span>Launch your lorem for $49/mo</span>
                <br></br>
                <span>lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              </span>
              <div className="home-get-started7 template-button">
                <span className="home-text161">
                  <span>Upgrade now</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text164">What&apos;s included</span>
              <div className="home-bullet-points2">
                <div className="home-point12">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon20"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text165">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point13">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon22"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text166">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point14">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon24"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text167">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point15">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon26"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text168">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card3">
              <span className="home-text169">Enterprise</span>
              <span className="home-text170">
                <span>
                  Custom-built lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed doliqua.
                </span>
                <br></br>
              </span>
              <div className="home-get-started8 template-button">
                <span className="home-text173">
                  <span>Contact us</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text176">What&apos;s included</span>
              <div className="home-bullet-points3">
                <div className="home-point16">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon28"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text177">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point17">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon30"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text178">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point18">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon32"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text179">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
                <div className="home-point19">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon34"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text180">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonals">
        <div className="home-left4">
          <span className="home-text181">Testimonals</span>
          <span className="home-text182 title">
            What people say about Active
          </span>
        </div>
        <div className="home-right2">
          <div className="home-column1">
            <Testimonal
              quote='"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”'
              avatarSrc="/image552912-e3yq-200h.png"
            ></Testimonal>
            <Testimonal
              from="Social Club"
              name="Jessica Smith"
              quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.\u2028 Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
              avatarSrc="/image312912-mvsg-200h.png"
            ></Testimonal>
            <Testimonal
              from="BeMe"
              name="Logan Boy"
              quote="“Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..”"
              avatarSrc="/image502912-6wy-200h.png"
            ></Testimonal>
            <Testimonal
              from="Hello W."
              name="Laraine Summers"
              quote="“Rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.”"
              avatarSrc="/image202912-zekh-200h.png"
            ></Testimonal>
          </div>
          <div className="home-column2">
            <Testimonal
              from="Handsly"
              name="William McPau"
              quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
              avatarSrc="/image572912-0d3-200h.png"
            ></Testimonal>
            <Testimonal
              from="Share"
              name="Mariah Mae"
              quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
              avatarSrc="/image632913-swij-200h.png"
            ></Testimonal>
            <Testimonal
              from="Gather"
              name="John Finati"
              quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'
              avatarSrc="/image102913-x4z8-200h.png"
            ></Testimonal>
            <Testimonal
              from="Zigo"
              name="Mary Pau"
              quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ”'
              avatarSrc="/image562913-ycff-200h.png"
            ></Testimonal>
          </div>
        </div>
        <span className="home-text183">
          <span>Show more</span>
          <br></br>
        </span>
      </section>
      <section className="home-action-bar">
        <div className="home-action">
          <div className="home-heading4">
            <span className="home-text186 title">
              <span>Get leads now </span>
              <br></br>
              <span>with Active!</span>
            </span>
            <span className="home-text190">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <div className="home-get-started9 template-button">
              <span className="home-text191">
                <span>Start free</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-images">
            <img
              alt="image"
              src="/e564eaa3c4fab71792794d666a281742-1200w.png"
              className="home-image4"
            />
          </div>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-heading5">
          <span className="home-text194 title">Frequently asked questions</span>
          <span className="home-text195">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
          </span>
        </div>
        <div className="home-accordion">
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header2">
              <span className="home-text196">
                — What is sit amet, consectetur adipiscing elit, sed do?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text197">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div className="accordionContainer">
            <div className="home-header3">
              <span className="home-text198">
                — Why is dolore magna aliqua excepteur sint
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text199">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header4">
              <span className="home-text200">
                — Is excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum?
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text201">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header5">
              <span className="home-text202">
                — Who quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur magni
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text203">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header6">
              <span className="home-text204">
                — Is minim veniam quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text205">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container25">
            <Script
              html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-top">
          <div className="home-right3">
            <div className="home-category4">
              <span className="home-text206">Solutions</span>
              <div className="home-links3">
                <span className="home-text207">Responsive Web Design</span>
                <span className="home-text208">Responsive Prototypesv</span>
                <span className="home-text209">Design to Code</span>
                <span className="home-text210">Static Website Builder</span>
                <span className="home-text211">Static Website Generator</span>
              </div>
            </div>
            <div className="home-category5">
              <span className="home-text212">Company</span>
              <div className="home-links4">
                <span className="home-text213">About</span>
                <span className="home-text214">Team</span>
                <span className="home-text215">News</span>
                <span className="home-text216">Partners</span>
                <span className="home-text217">Careers</span>
                <span className="home-text218">Press &amp; Media</span>
              </div>
            </div>
            <div className="home-category6">
              <span className="home-text219">Solutions</span>
              <div className="home-links5">
                <span className="home-text220">Twitter</span>
                <span className="home-text221">Linkedin</span>
                <span className="home-text222">Crunchbase</span>
                <span className="home-text223">Instagram</span>
                <span className="home-text224">Facebook</span>
              </div>
            </div>
          </div>
          <div className="home-left5">
            <span className="home-text225">Subscribe to our newsletter</span>
            <div className="home-subscription">
              <input
                type="email"
                placeholder="Enter your email"
                className="home-textinput input"
              />
              <div className="home-subscribe">
                <span className="home-text226">Subscribe</span>
              </div>
            </div>
            <span className="home-text227">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </span>
            <div className="home-contact">
              <span className="home-text228">Scrivici!</span>
              <a
                href="mailto:use@active-app.com?subject=Support"
                className="home-link"
              >
                Se vuoi maggiori informazioni clicca qui
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
