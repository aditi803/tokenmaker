import React, { useState, useEffect } from "react";
import axios from 'axios'
import { TERMS } from "../../api/Api";
import parse from 'html-react-parser';


export const TermsModal = () => {

  const [terms, setTerms] = useState({ content: '' })
  useEffect(() => {
    fetchData()
  }, [setTerms])

  const fetchData = async () => {
    await axios
      .get(TERMS)
      .then(res => {
        setTerms(res.data.msg)
        // console.log(res.data.msg, "?>>>>>>>>>>>>>>>>>>terms msg")
      })
      .catch(err => {
        console.log(err);
      })
  }


  // console.log(terms, '>>>>>>>>>>>>>>>>>>')

  return (
    <>
      <div
        className="modal fade bd-example-modal-lg"
        style={{ color: "black", textAlign: "left", padding: "20px", fontSize: "15px" }}
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
