import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";

const Disclaimer = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    navigate("/"); 
    window.location.reload(); 
  };

  const handleDecline = () => {
    navigate("/decline");
  };

  return (
    <Dialog open={true} onClose={handleDecline} fullWidth maxWidth="lg">
      <DialogContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            onClick={() => navigate("/")}
            style={{
              background: "black",
              padding: "10px",
              borderRadius: "5px",
              color: "white",
              cursor: "pointer",
            }}
          >
            Deshmukh & Associates
          </span>
        </div>
        <h1 style={{ textAlign: "center" }}>DISCLAIMER</h1>
        <p>
          The information provided on this website is for general informational
          purposes only and does not constitute legal advice. While we strive to
          ensure that the content is accurate and up-to-date, Deshmukh &
          Associates makes no representations or warranties of any kind, express
          or implied, about the completeness, accuracy, reliability, suitability,
          or availability with respect to the website or the information,
          products, services, or related graphics contained on the website for
          any purpose. Any reliance you place on such information is therefore
          strictly at your own risk.
        </p>
        <p>
          The use of this website does not create an attorney-client relationship
          between you and Deshmukh & Associates. You should not act or refrain
          from acting on the basis of any information included on this website
          without seeking appropriate legal advice from a qualified attorney
          licensed in your state or jurisdiction.
        </p>
        <p>
          Deshmukh & Associates disclaims all liability for any loss or damage
          arising out of or in connection with the use of this website. This
          includes, without limitation, direct, indirect, incidental, punitive,
          and consequential damages.
        </p>
        <p>
          We may provide links to other websites that are not under the control
          of Deshmukh & Associates. We have no control over the nature, content,
          and availability of those sites. The inclusion of any links does not
          necessarily imply a recommendation or endorse the views expressed
          within them.
        </p>
        <p>
          By using our website, you hereby consent to our disclaimer and agree to
          its terms.
        </p>
      </DialogContent>
      <DialogActions
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button
         className="bg-gold hover:bg-gold-600 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
          onClick={handleDecline}
        >
          Decline
        </button>
        <button
          className="bg-gold hover:bg-gold-600 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
          onClick={handleAccept}
        >
          Accept
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default Disclaimer;
