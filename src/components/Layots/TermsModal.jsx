import React from "react";

export const TermsModal = () => {
  return (
    <>
      <div
        className="modal fade bd-example-modal-lg"
        style={{color:"black",textAlign:"left",padding:"20px",fontSize:"15px"}}
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Terms of use of the « Token Maker »
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-content" style={{ padding: "20px" }}>
              The Token Maker provides you with the service of automatically
              creating ERC20 and BEP20 Tokens.
              <br />
              <br /> You or the person you decide to transfer your Tokens to
              will be the owner of tokens and will have full responsibility over
              them and how they are used.
              <br />
              <br /> We will never own, store or be in control of your Tokens
              that are created and can be transferred on the Ethereum
              blockchain.
              <br />
              <br /> We decline any responsibility of the use that will be made
              your Token and of any financial loss that might be related.
              <br />
              <br />
              Transactions conducted with your Token will be made through your
              MetaMask wallet. MetaMask is a third party application, we decline
              responsibility of the use that is being made of MetaMask and of
              the consequences.
              <br />
              <br /> Be aware that your Ethereum public address and the
              information it contains might be visible to other persons while
              you will use the Token Maker.
              <br />
              <br /> We decline responsibility over the use or of the
              interaction with MetaMask, the Ethereum network, Binance Smart
              Chain or any other third party involved in the creation your
              Token.
              <br />
              <br /> We have no control over the transactions you make with
              MetaMask, the Ethereum network, Binance Smart Chain or any other
              third party and we are not able to cancel any transaction, or to
              make any refund.
              <br />
              <br />
              You are conducting those transactions at your own risk and will
              bear full responsibility over your Token, your funds in fiat or
              crypto currency and any loss that might occur.
              <br />
              <br /> In the process of building a Token with the Token Maker,
              all transactions made with MetaMask on the Ethereum network or
              Binance Smart Chain are out of our control. We won’t be able to
              reverse those transactions or to reimburse you. Please make sure
              that you fully understand the consequences before proceeding to
              the creation of ERC20 Tokens with the Token Maker.
              <br />
              <br /> Prices of crypto currencies are volatile, be aware that
              this could affect the value of your token.
              <br />
              <br /> You are responsible for any taxes or any other other cost
              related to your Token or the transactions conducted with your
              Token.
              <br />
              <br /> We decline any responsalbity for the loss of assets related
              to any malfunction in hardware, software, internet connection, the
              attack of any malicious person or software, the possiblity of a
              third party gaining access to your wallet and its content.
              <br />
              <br />
              Changes or upgrades of the Ethereum network or Binance Smart Chain
              might afftect your Token, this is out of our control and we won’t
              bear any responsibility.
              <br />
              <br /> Be aware of the laws and regulations in your country and in
              any country where you will be operating related to crypto
              currencies, and blockchain technologies, including your Token. We
              decline any responsibility of the consequences if you don’t comply
              with those laws and regulations
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
