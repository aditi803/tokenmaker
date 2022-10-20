import React from "react";
import "./Front_style/FrontMain.css";

export const FrontMain = () => {
  return (
    <>
      <div className="page-content">
        <main className="">
          <section className="page-section hero" id="hero">
            <div className="container self">
              <h1>
                <span className="sub-highlight">Automatic Token Maker</span>
              </h1>
              <div className="my-5">
                <p className="m-0">
                  You’re looking for a solution to create your own token on the
                  blockchain?
                </p>
                <p>
                  Blocktech Brew has you covered: we will help you generate a
                  token automatically, and deploy it in a matter of minutes.
                </p>
              </div>
              <div className="my-5">
                <a
                  className="btn btn-primary btn-pad btn-rounded me-3"
                  href="/generator"
                >
                  Create your token
                </a>
              </div>
            </div>
          </section>
          <section className="page-section section-how" id="how-it-works">
            <div className="container">
              <h2 className="section-title">
                Create your token in just a few{" "}
                <span className="sub-highlight">easy steps:</span>
              </h2>
              <div className="row mt-5">
                <div className="col-12 col-lg-6">
                  <div className="icon-container">
                    <span className="svg-icon icon-metamask"></span>
                  </div>
                  <div className="title">
                    <span className="step-number">1 /</span>Install MetasMask
                  </div>
                  <p className="mb-0">
                    If you don't have it yet, please make sure to{" "}
                    <a
                      href="https://metamask.io/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      install MetaMask
                    </a>{" "}
                    or any of the supported wallets
                  </p>
                </div>
                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                  <div className="icon-container">
                    <span className="svg-icon icon-deposit"></span>
                  </div>
                  <div className="title">
                    <span className="step-number">2 /</span>Deposit cryto on
                    your wallet
                  </div>
                  <p className="mb-0">
                    Make sure you have enough crypto available to pay for Smart
                    Contract creation
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 col-lg-6">
                  <div className="icon-container">
                    <span className="svg-icon icon-fill"></span>
                  </div>
                  <div className="title">
                    <span className="step-number">3 /</span>Fill-out Token
                    details
                  </div>
                  <p className="mb-0">
                    We need basic information (Token Name, Symbol) and
                    eventually more depending on the complexity of your Token
                  </p>
                </div>
                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                  <div className="icon-container">
                    <span className="svg-icon icon-deploy"></span>
                  </div>
                  <div className="title">
                    <span className="step-number">4 /</span>Deploy your Token
                  </div>
                  <p className="mb-0">
                    That's it, you're good to go! Confirm transaction on
                    MetaMask and your Token will be ready in a matter of
                    minutes.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="page-section section-ready">
            <div className="container">
              <h2 className="section-title-small text-center">
                Ready to deploy your token ?
              </h2>
              <div className="mt-3 text-center">
                <a
                  href="/generator"
                  className="btn btn-action btn-rounded btn-pad"
                >
                  Start now
                </a>
              </div>
            </div>
          </section>
          <section className="page-section section-features" id="features">
            <div className="container">
              <h2 className="section-title text-center">
                <span className="sub-highlight">Features:</span>
              </h2>
              <div className="feature-item">
                <div className="icon-container">
                  <span className="svg-icon icon-compliant"></span>
                </div>
                <div>
                  <h4>ERC20 / BEP20 Compliant</h4>
                  <p>
                    Your Token will be completely compliant with the
                    specification and will work with any wallet anywhere on the
                    planet. It will have a name, a symbol, and an amount in
                    decimals.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="icon-container">
                  <span className="svg-icon icon-token"></span>
                </div>
                <div>
                  <h4>Verified Source Code</h4>
                  <p>
                    Your contract code will be automatically published and
                    verified.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="icon-container">
                  <span className="svg-icon icon-burnable"></span>
                </div>
                <div>
                  <h4>Burnable Token</h4>
                  <p>
                    Make your token burnable to give you the option to control
                    supply and boost your asset's price when needed.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="icon-container">
                  <span className="svg-icon icon-money"></span>
                </div>
                <div>
                  <h4>Mintable Token</h4>
                  <p>
                    Choose the "mint" option if you want to be able to generate
                    more tokens later on.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="icon-container">
                  <span className="svg-icon icon-pausable"></span>
                </div>
                <div>
                  <h4>Pausable</h4>
                  <p>
                    If you want to make sure token is not traded till a given
                    date, just use the pause feature.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="icon-container">
                  <span className="svg-icon icon-ownable"></span>
                </div>
                <div>
                  <h4>Ownable Access</h4>
                  <p>
                    Own your Token and control minting function (mint new
                    tokens, end minting...) Role Based Access Set up roles for
                    your Token (Admin, Minter) and give control to whoever you
                    want.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <div className="icon-container">
                  <span className="svg-icon icon-supplyControl"></span>
                </div>
                <div>
                  <h4>Control your supply</h4>
                  <p>Choose between fixed, capped or unlimited token supply.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="icon-container">
                  <span className="svg-icon icon-recovery"></span>
                </div>
                <div>
                  <h4>Recover lost tokens</h4>
                  <p>
                    No need to worry about lost tokens sent to your Smart
                    Contracts by mistake. Our recovery feature got you covered!
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="page-section section-custom-dev p-4 p-md-5">
            <div className="container">
              <h2 className="section-title-small text-center">
                Need a custom development ?
              </h2>
              <div className="mt-3 text-center">
                <a
                  type="button" href="https://www.blocktechbrew.com/"
                  className="btn btn-primary btn-rounded btn-pad"
                >
                  Contact us
                </a>
              </div>
            </div>
          </section>
          <section className="page-section section-faq" id="faq">
            <div className="container">
              <div className="faq-container">
                <h2 className="section-title text-center">FAQ</h2>
                <p className="section-subtitle mt-3 mb-5">
                  As a leader in the field of Blockchain coding, Blocktech Brew
                  not only teaches you how to make tokens, smart contracts and
                  more, but also offers you tools like this token generator that
                  allows you to save time and deploy tokens automatically
                </p>
                {/* Accordion */}
                <div className="faq-list-container">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div faq-header>
                      <div class="accordion-item faq-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            <h4 className="me-3">What is an ERC-20 Token?</h4>
                          </button>
                        </h2>
                        <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body ">
                          The ERC-20 introduces a standard for Fungible Tokens,
                          which means that each Token has a property that makes
                          it identical to another Token (in terms of type and
                          value). An ERC-20 Token, for example, functions
                          similarly to ETH, meaning that one Token is and will
                          always be equal to all other Tokens.
                        </div>
                      </div>
                      </div>
                      
                    </div>
                    <div class="accordion-item faq-item">
                      <h2 class="accordion-header" id="flush-headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          <h4 className="me-3">
                            What is a BEP-20 Token standard?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          It is a native token standard of the Binance Smart
                          Chain. It acts as a blueprint of how the BEP-20 tokens
                          can be utilized. It is an extension of the ERC-20
                          token standard and can be used to represent shares or
                          fiat.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item faq-item">
                      <h2 class="accordion-header" id="flush-headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          <h4 className="me-3">What is Fixed Supply Token?</h4>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Once you deploy the token, the entire supply will be
                          sent to the owner's wallet. Fixed supply means that
                          this supply can't be modified later on.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item faq-item">
                      <h2 class="accordion-header" id="flush-headingFour">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          <h4 className="me-3">What is Capped Supply Token?</h4>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          When you create the token, you will have the option to
                          choose to send an initial supply to the owner's
                          wallet. Supply can be adjusted later on by minting or
                          burning tokens if you chose those options. You won't
                          be able to generate more tokens that supply cap
                          allows.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item faq-item">
                      <h2 class="accordion-header" id="flush-headingFive">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive"
                          aria-expanded="false"
                          aria-controls="flush-collapseFive"
                        >
                          <h4 className="me-3">
                            How is the smart contract's source code verified?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFive"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          When we deploy your smart contract, a third party such
                          as Etherscan verifies the source code and publishes it
                          on their website. The source code can be found on the
                          contract's webpage.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item faq-item">
                      <h2 class="accordion-header" id="flush-headingSix">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseSix"
                          aria-expanded="false"
                          aria-controls="flush-collapseSix"
                        >
                          <h4 className="me-3">
                            What kind of acces type can i set up?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseSix"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingSix"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          None: there is no central authority which can make
                          people trust your token more
                          <br />
                          Ownable: The token will have an owner who will act as
                          admin and be able to conduct different actions such as
                          mining, burning...
                          <br />
                          Role based: You will be able to assign different users
                          to different tasks such as mining, burning...
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item faq-item">
                      <h2 class="accordion-header" id="flush-headingSeven">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseSeven"
                          aria-expanded="false"
                          aria-controls="flush-collapseSeven"
                        >
                          <h4 className="me-3">
                            How can those tokens be used?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseSeven"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingSeven"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <p>
                            The tokens we will generate for you can be used for
                            a wide range of applications. As a crypto currency,
                            to run an ICO, as proof of ownership (i.e. shares in
                            a company), for gaming, charity, loyalty program,
                            you name it!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item faq-item">
                      <h2 class="accordion-header" id="flush-headingEight">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseEight"
                          aria-expanded="false"
                          aria-controls="flush-collapseEight"
                        >
                          <h4 className="me-3">Who owns generated tokens</h4>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseEight"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingEight"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <p>
                            You will be the sole owner of the tokens except if
                            you decide to make somebody else the owner
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item faq-item">
                      <h2 class="accordion-header" id="flush-headingNine">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseNine"
                          aria-expanded="false"
                          aria-controls="flush-collapseNine"
                        >
                          <h4 className="me-3">
                            What kind of tokens are used for ICOs
                          </h4>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseNine"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingNine"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <p>
                            Your tokens generated on this website will meet all
                            the requirements to be used for an ICO
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item faq-item">
                      <h2 class="accordion-header" id="flush-headingTen">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTen"
                          aria-expanded="false"
                          aria-controls="flush-collapseTen"
                        >
                          <h4 className="me-3">
                            What are the famous coins that are based on ERC20?
                          </h4>
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTen"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingTen"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          <p>
                            Here is a list of ERC20 tokens: Chainlink (LINK)
                            Tether (USDT) Wrapped Bitcion (WBTC) OmiseGO (OMG)
                            0x (ZRX) Populous (PPT) Maker (MKR) Augur (REP)
                            Golem (GNT) IOStoken (IOST) Status (SNT) DigixDAO
                            (DGD and DGX) Loopring (LRC) Basic Attention Token
                            (BAT)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Accordion */}
              </div>
            </div>
          </section>
          <section className="page-section section-ready-i">
            <div className="container">
              <div className="mt-3 text-center">
                <a
                  href="/generator"
                  className="btn btn-primary btn-lg btn-rounded btn-pad"
                >
                  Deploy your token
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
