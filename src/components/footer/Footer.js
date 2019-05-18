import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'

const FooterPage = () => {
  return (
    <MDBFooter color="#ffffff" className="pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://github.com/vaneenige/phenomenon">Phenomenon On Github</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/crsandeep/simple-react-full-stack">React Full Stack App</a>
              </li>
              <li className="list-unstyled">
                <a href="https://use-the-platform.com/">About Colin van Eenige</a>
              </li>
              <li className="list-unstyled">
                <a href="https://reacttraining.com/react-router/web/guides/quick-start">React-Router</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> newxpyct@gmail.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
