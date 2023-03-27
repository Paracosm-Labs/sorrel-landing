import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import USDDSvg from '../components/usddsvg'
import FeatureCard from '../components/feature-card'
import Slide from '../components/slide'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div id="home" className="home-container">
      <Helmet>
        <title>Sorrel Banq</title>
        <meta property="og:title" content="Sorrel Banq" />
      </Helmet>
      <Navbar
        image_src="/playground_assets/logox.png"
        image_src1="/playground_assets/logox.png"
        rootClassName="navbar-root-class-name"
      ></Navbar>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text">
                <span className="home-text02">Essential Banking</span>
                <span> For Anyone. Anywhere.</span>
              </h1>
              <div className="home-features-container">
                <div className="home-feature">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text04">
                    Transact in local and regional digital currencies
                  </span>
                </div>
                <div className="home-feature1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text04">
                    Accept gStables - gTTD, gXCD, gBBD & more, online or in the real world
                  </span>
                </div>
                <div className="home-feature2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon"
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text04">
                    Exchange your gStables for USDD anytime
                  </span>
                </div>
              </div>
              <div className="home-input-container">
                <a href="https://app.sorrelbanq.org"  target="_blank">
                  <button className="home-button button-primary button">
                    Get started
                  </button>
                </a>
                <a href="https://docs.sorrelbanq.org/">
                  <button className="home-button1 button-primary button">
                    How it Works
                  </button>
                </a>
              </div>
            </div>
            <div className="home-image-container">
              <img src="/playground_assets/hero-image.png"/>
            </div>
          </div>
        </div>
        <div className="home-stats">
          <div className="home-stat">
            <h1 className="home-text07">$6,000,789</h1>
            <span className="home-text08">Total Volume</span>
          </div>
          <div className="home-stat1">
            <h1 className="home-text09">$4,693,089</h1>
            <span className="home-text10">Total Supply</span>
          </div>
          <div className="home-stat2">
            <h1 className="home-text11">990,023</h1>
            <span className="home-text12">Transactions</span>
          </div>
        </div>
        <div className="home-section-one section-container">
          <div className="home-max-width1 max-content-container">
            <h2 className="home-text13">
              <span className="home-text14">
                Enabling easier access to financial services
              </span><br/>
              <span className="heading2">
                via Localized Stablecoins
              </span>
              <br className="heading2"></br>
            </h2>
            <div className="home-container01">
              <div className="home-container02">
                <div className="home-container03">
                  <div className="home-container04">
                    <div className="home-container05">
                    <img
                      alt="image"
                      src="/playground_assets/gTTD.png"
                      className="home-image02"
                    />
                    </div>
                      <img
                        alt="image"
                        src="/playground_assets/gXCD.png"
                        className="home-image01"
                      />
                  </div>
                  <img
                    alt="image"
                    src="/playground_assets/gBBD.png"
                    className="home-image03"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gJMD.png"
                    className="home-image04"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gBSD.png"
                    className="home-image05"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gAWG.png"
                    className="home-image05"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gCUP.png"
                    className="home-image05"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gKYD.png"
                    className="home-image05"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gDOP.png"
                    className="home-image05"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gHTG.png"
                    className="home-image05"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/gEUR.png"
                    className="home-image05"
                  />

                </div>

              </div>

            </div>
          </div>
        </div>
        <div id="features" className="section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-image-container1">
              <img
                alt="Sorrel and goStables Integration"
                src="https://via.placeholder.com/600x500"
                className="home-image08"
              />
            </div>
            <div className="home-content-container1">
              <h1 className="home-text19">
                <span className="home-text41">Sorrel Banq </span><span className="home-text40"> + </span><br/>
                <span className="home-text24">goStables</span>
              </h1>
              <span className="home-text25">
                <span>
                  Sorrel Banq is a decentralized/on-chain bank for stablecoins. <br/><br/>Sorrel is built on top of the goStables protocol, which enables anyone to mint, spend, trade and earn localized stablecoins, collectively called gStables.
                </span>
                <br></br>
                <br></br>
                <span>gStables are collateralized with USDD.</span>
                <br></br>
                <br></br>
                <span>
                  gStables can be swapped from/to USDD anytime, at their
                  real-world exchange rate
                </span>
                <span className="home-text33"> *</span>
                <br></br>
                <br></br>
                <br></br>
                <span className="home-text37">*+ 0.3% </span>
                <span className="home-text38">Protocol fee</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-content-container2">
              <h1 className="home-text40">
                <span className="home-text41">Easy Account</span>
                <span> Creation + Transfers</span>

              </h1>
              <div className="home-container06">
                <div className="home-container07">
                  <div className="home-container08">
                    <div className="home-container09"></div>
                  </div>
                </div>
              </div>
              <span className="home-text43">
                <span>
                  View and manage your Sorrel Account in a simple, unified view.<br/><br/>
                  Enjoy <b>FREE</b> gStable transfers between other Sorrel members.<br/><br/>
                  Transferring gStables to non members automatically makes them a new Sorrel member.
                </span>
                <br></br><br/>
                <span>
                </span>
                <br></br>
              </span>
              <div className="home-container10">

              </div>
                <a href="https://app.sorrelbanq.org/"  target="_blank"><button className="button-primary button navbar-primary-btn1">Launch App</button></a>
            </div>
            <div className="home-image-container2 accounts-ux">
              <img alt="Sorrel Accounts UI" className="home-image08" src="/playground_assets/accounts-ui.png"/>

            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-image-container3">
              <img
                alt="Sorrel Vaults UI"
                src="/playground_assets/vaults-ui.png"
                className="home-image08"
              />
            </div>
            <div className="home-container11">
              <div className="home-content-container3">
                <h1 className="home-text40">
                  <span className="heading2">Support + Earn via</span><br/>
                  <span className="home-text60">Sorrel Vaults</span>
                </h1>


                <span className="home-text61">
                  <span>Support Sorrel Banq by adding TRX into vaults to facilitate energy free transactions for Sorrel members.<br/><br/>
                  Support goStables Protocol by adding USDD into vaults to help increase the protocol's over-collateralization and stability.<br/><br/>
                  Earn gStables, deposited into your Sorrel Account.
                  </span>
                  <br></br>
                  <br></br>
                  <br></br>
                </span>


              <div className="home-container10">

              </div>
                <a href="https://app.sorrelbanq.org/"  target="_blank"><button className="button-primary button navbar-primary-btn1">Launch App</button></a>
              </div>

            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-content-container2">
              <h1 className="home-text55">
                  <span>Wallet </span>
                  <span className="home-text41">Cards</span>
              </h1>
              <div className="home-container06">
                <div className="home-container07">
                  <div className="home-container08">
                    <div className="home-container09"></div>
                  </div>
                </div>
              </div>

       
              <span className="home-text43">
                <span>
                  Sorrel Wallet Cards are hardware wallets that store private keys securely on an NFC chip. <br/><br/>These cards allow our members to easily access and manage their funds as well as sign transactions by simply tapping them on other NFC enabled mobile devices.
                </span>
                <br></br>
                <br></br>
              </span>


              
              <button className="button-primary button navbar-primary-btn1 disabled">Coming Soon</button>
          </div>


            <div className="home-image-container2 wallet-ux">
              <img alt="Sorrel Cards UI" className="home-image08" src="/playground_assets/hero-image-2.png"/>

            </div>
          </div>
        </div>

        <div className="home-features">
          <h1 className="home-text91">
            <span className="home-text85">Sorrel Addons</span>
            <span> </span>
            <span className="home-text91">at a glance</span>
          </h1>
          <div className="home-container12">
            <FeatureCard
              title="AIA Concierge Services"
              description="Sorrel's AIA Concierge will be able to provide our members with support, tailored advice and recommendations based on their individual needs and preferences."
              rootClassName="rootClassName"
            ></FeatureCard>

            <FeatureCard
              title="Bill Payments and Remittances"
              description="Send to anyone, with or without a Sorrel account. Accept gStables for new and existing products and services - boosting local and inter-regional commerce."
              rootClassName="rootClassName2"
            ></FeatureCard>
            <FeatureCard
              title="Branch Lounges"
              description="Explore our services in a 3D explorable and interactive environment across all devices including VR. Lounges are great for attending and hosting virtual events."
              rootClassName="rootClassName1"
            ></FeatureCard>
            <FeatureCard
              title="Administrative Services"
              description="Generate official statements, bank letters and other administrative documents for your Sorrel account for proofs and possible use in the real world."
              rootClassName="rootClassName1"
            ></FeatureCard>
            <FeatureCard
              title="Family Office Services"
              description="Sorrel Family Office will be able to help families maximize the value of their investments and create a secure financial future."
              rootClassName="rootClassName1"
            ></FeatureCard>
          </div>
          <span className="home-text88 mt-3">
            <span className="home-text89">Limitless</span>
            <span className="home-text90"> Possibilites...</span>
          </span>
        </div>
        <div className="home-section-four section-container">
          <div className="home-max-width5 max-content-container">
            <h2 id="vision"className="home-text91">
              <span className="home-text93">Vision</span>
            </h2>
          </div>
          <div data-type="slider" className="home-slider">
            <Slide rootClassName="slide-root-class-name2"></Slide>
          </div>
        </div>

        <div className="home-section-five section-container">
          <div className="home-banner">
            <h1 id="community" className="home-text94">
              <span>Join</span>
              <span className="home-text95"> The Community</span>
            </h1>
            <span className="home-text97">
              Become part of this journey. Let&apos;s see where we can take this
              together.
            </span>
            <div className="home-btn-group">
              <a href="https://discord.gg/kBtNQ9dtFV"  target="_blank"><button className="home-button1 button-primary button">Discord</button></a>
              <a href="https://twitter.com/sorrelbanq"  target="_blank"><button className="home-button1 button-primary button">Twitter</button></a>
              <a href="https://app.sorrelbanq.org"  target="_blank"><button className="home-button1 button-primary button">Launch App</button></a>
            </div>
            
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Home
