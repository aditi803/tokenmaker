import React, { useState, useEffect } from "react";
import axios from 'axios'
import { PRIVACY } from "../../api/Api";
import parse from 'html-react-parser';


export const PrivacyPolicy = () => {

  const [terms, setTerms] = useState({ content: '' })
  useEffect(() => {
    fetchData()
  }, [setTerms])

  const fetchData = async () => {
    await axios
      .get(PRIVACY)
      .then(res => {
        setTerms(res.data.msg)
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <>
      <div
        className="modal fade bd-example-modal-lg"
        style={{ color: "black", textAlign: "left", padding: "20px", fontSize: "15px" }}
        id="exampleModal1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {/* Terms of use of the « Token Maker » */}
                {terms.title}
                {/* {parse(terms.title)} */}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-content" style={{ padding: "20px" }}>
              {parse(terms.content.trim())}
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
