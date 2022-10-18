import React from "react";
import "./Front_style/Front.css"
export const FrontMain = () => {
  return (
    <>
      <div className="page-content">
        <main className="">
          <section className="page-section hero" id="hero">
            <div className="container">
              <h1>
                <span className="sub-highlight">Automatic Token Make - 456</span>
              </h1>
              <div className="my-5">
                <p className="m-0">
                  You’re looking for a solution to create your own token on the
                  blockchain?
                </p>
                <p>
                  Eat The Blocks has you covered: we will help you generate a
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
                    <span className="step-number">2 /</span>Deposit cryto on your
                    wallet
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
                    <span className="step-number">3 /</span>Fill-out Token details
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
                <a href="/generator" className="btn btn-action btn-rounded btn-pad">
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
          <section className="page-section section-custom-dev">
            <div className="container">
              <h2 className="section-title-small text-center">
                Need a custom development ?
              </h2>
              <div className="mt-3 text-center">
                <button
                  type="button"
                  className="btn btn-primary btn-rounded btn-pad"
                >
                  Contact us
                </button>
              </div>
            </div>
          </section>
          <section className="page-section section-faq" id="faq">
            <div className="container">
              <div className="faq-container">
                <h2 className="section-title text-center">FAQ</h2>
                <p className="section-subtitle mt-3 mb-5">
                  As a leader in the field of Blockchain coding, Eat The Blocks
                  not only teaches you how to make tokens, smart contracts and
                  more, but also offers you tools like this token generator that
                  allows you to save time and deploy tokens automatically
                </p>
                <div className="faq-list-container">
                  <div className="faq-item">
                    <div className="faq-header">
                      <h4 className="me-3">What is an ERC-20 Token?</h4>
                    </div>
                    <div className="faq-body">
                      <p>
                        The ERC-20 introduces a standard for Fungible Tokens,
                        which means that each Token has a property that makes it
                        identical to another Token (in terms of type and value).
                        An ERC-20 Token, for example, functions similarly to
                        ETH, meaning that one Token is and will always be equal
                        to all other Tokens.
                      </p>
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-header">
                      <h4 className="me-3">What is a BEP-20 Token standard?</h4>
                    </div>
                    <div className="faq-body">
                      <p>
                        It is a native token standard of the Binance Smart
                        Chain. It acts as a blueprint of how the BEP-20 tokens
                        can be utilized. It is an extension of the ERC-20 token
                        standard and can be used to represent shares or fiat.
                      </p>
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-header">
                      <h4 className="me-3">What is Fixed Supply Token?</h4>
                    </div>
                    <div className="faq-body">
                      <p>
                        Once you deploy the token, the entire supply will be
                        sent to the owner's wallet. Fixed supply means that this
                        supply can't be modified later on.
                      </p>
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-header">
                      <h4 className="me-3">What is Capped Supply Token?</h4>
                    </div>
                    <div className="faq-body">
                      <p>
                        When you create the token, you will have the option to
                        choose to send an initial supply to the owner's wallet.
                        Supply can be adjusted later on by minting or burning
                        tokens if you chose those options. You won't be able to
                        generate more tokens that supply cap allows.
                      </p>
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-header">
                      <h4 className="me-3">
                        How is the smart contract's source code verified?
                      </h4>
                    </div>
                    <div className="faq-body">
                      <p>
                        When we deploy your smart contract, a third party such
                        as Etherscan verifies the source code and publishes it
                        on their website. The source code can be found on the
                        contract's webpage.
                      </p>
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-header">
                      <h4 className="me-3">
                        What kind of acces type can i set up?
                      </h4>
                    </div>
                    <div className="faq-body">
                      <p>
                        None: there is no central authority which can make
                        people trust your token more
                      </p>
                      <p>
                        Ownable: The token will have an owner who will act as
                        admin and be able to conduct different actions such as
                        mining, burning...
                      </p>
                      <p>
                        Role based: You will be able to assign different users
                        to different tasks such as mining, burning...
                      </p>
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-header">
                      <h4 className="me-3">How can those tokens be used?</h4>
                    </div>
                    <div className="faq-body">
                      <p>
                        The tokens we will generate for you can be used for a
                        wide range of applications. As a crypto currency, to run
                        an ICO, as proof of ownership (i.e. shares in a
                        company), for gaming, charity, loyalty program, you name
                        it!
                      </p>
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-header">
                      <h4 className="me-3">Who owns generated tokens</h4>
                    </div>
                    <div className="faq-body">
                      <p>
                        You will be the sole owner of the tokens except if you
                        decide to make somebody else the owner
                      </p>
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-header">
                      <h4 className="me-3">
                        What kind of tokens are used for ICOs
                      </h4>
                    </div>
                    <div className="faq-body">
                      <p>
                        Your tokens generated on this website will meet all the
                        requirements to be used for an ICO
                      </p>
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-header">
                      <h4 className="me-3">
                        What are the famous coins that are based on ERC20?
                      </h4>
                    </div>
                    <div className="faq-body">
                      <p>
                        Here is a list of ERC20 tokens: Chainlink (LINK) Tether
                        (USDT) Wrapped Bitcion (WBTC) OmiseGO (OMG) 0x (ZRX)
                        Populous (PPT) Maker (MKR) Augur (REP) Golem (GNT)
                        IOStoken (IOST) Status (SNT) DigixDAO (DGD and DGX)
                        Loopring (LRC) Basic Attention Token (BAT)
                      </p>
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-header">
                      <h4 className="me-3">What is ERC20</h4>
                    </div>
                    <div className="faq-body">
                      <p>
                        ERC20 is the main technical standard for Ethereum
                        tokens. It is used to create and issue smart contracts
                        on the Ethereum blockchain to create tokens. A list of
                        rules must be followed in order to comply with ERC20
                      </p>
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-header">
                      <h4 className="me-3">Create an ERC20 or BEP20 token</h4>
                    </div>
                    <div className="faq-body">
                      <p>
                        If you want to create an ERC20 token you have different
                        options: do it yourself if you have the knowledge, hire
                        a developer (but make sure to work with someone you can
                        trust) or do it automatically with our Token Maker
                      </p>
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-header">
                      <h4 className="me-3">Where can I buy or sell ERC20 Tokens</h4>
                    </div>
                    <div className="faq-body">
                      <p>
                        It will depend on tokens, there is not only one official
                        ERC20 Token exchange. You need to find an exchange where
                        the token is being traded.{" "}
                      </p>
                    </div>
                  </div>
                </div>
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


