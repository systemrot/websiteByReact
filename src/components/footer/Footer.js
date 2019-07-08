import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.scss'

const FooterPage = () => {
  return (
    <MDBFooter color="#ffffff" className="pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <div className="effect thurio">
              <div className="buttons">
                <a href="#" className="fb" title="Join us on Facebook"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
                <a href="#" className="tw" title="Join us on Twitter"><i className="fab fa-twitter-square" aria-hidden="true"></i></a>
                <a href="#" className="g-plus" title="Join us on Google+"><i className="fab fa-google-plus" aria-hidden="true"></i></a>
                <a href="#" className="dribbble" title="Join us on Dribbble"><i className="fab fa-dribbble" aria-hidden="true"></i></a>
                <a href="#" className="vimeo" title="Join us on Vimeo"><i className="fab fa-vimeo" aria-hidden="true"></i></a>
                <a href="#" className="pinterest" title="Join us on Pinterest"><i className="fab fa-pinterest-p" aria-hidden="true"></i></a>
                <a href="#" className="insta" title="Join us on Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                <a href="#" className="in" title="Join us on Linked In"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
              </div>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <h4 className="title">useful sources</h4>
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
