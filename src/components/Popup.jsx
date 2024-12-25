import React from "react";
import PropTypes from "prop-types";
import { useAuth } from "../context/Authprovider";

function Popup({ isOpen, onClose, children, islogout }) {
  if (!isOpen) return null;
  const { isautenticated, logout } = useAuth();
  const handlelogout = () => {
    logout();
  };
  return (
    <div style={popupStyles}>
      <div style={popupContentStyles}>
        {children}
        <div className="flex justify-around">
          <button style={closeButtonStyles} onClick={onClose}>
            Close
          </button>
          {islogout ? (
            isautenticated ? (
              <button style={logoutstyle} onClick={handlelogout}>
                {isautenticated ? "logout" : ""}
              </button>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

const popupStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const popupContentStyles = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  position: "relative",
  width: "50%",
};

const closeButtonStyles = {
  marginTop: "10px",
  padding: "10px 20px",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
const logoutstyle = {
  marginTop: "10px",
  padding: "10px 20px",
  backgroundColor: "red",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Popup;
