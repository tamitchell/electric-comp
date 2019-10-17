import React from "react";

export function FormStatus(props) {
  if (props.status === true) {
    return (
      <div className="form-status">
        <h2>Thank You!</h2>
       
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
  <circle class="path circle" fill="none" stroke="#6AB08D" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
  <polyline class="path check" fill="none" stroke="#6AB08D" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
</svg>

        <p> Your form has been submitted. We will get back with you shortly.</p>
      </div>
    );
  }
  if (props.status === false) {
    return (
      <div className="form-status">
          <h2>Form not senth</h2>
          <p>Seems there has been an error on the server-side. Refresh and try
          again.</p>
      </div>
    );
  }
}
