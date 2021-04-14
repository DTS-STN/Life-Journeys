import React from "react";
import gocEn from "../assets/sig-blk-en.svg";
import gocFr from "../assets/sig-blk-fr.svg";
import { Trans } from "@lingui/macro";
import { connect } from "react-redux";

class HeaderLogo extends React.Component {
  render() {
    const { language } = this.props.language;

    return (
      <React.Fragment>
        <div className="row">
          <div
            className="brand col-xs-5 col-md-4"
            property="publisher"
            typeof="GovernmentOrganization"
          >
            {language === "fr" ? (
              <div>
                <a href="https://www.canada.ca/fr.html" property="url">
                  <img src={gocFr} alt="" property="logo" />
                  <span className="wb-inv" property="name">
                    <Trans>Governement du Canada</Trans>
                  </span>
                </a>
              </div>
            ) : (
              <div>
                <a href="https://www.canada.ca/en.html" property="url">
                  <img src={gocEn} alt="" property="logo" />
                  <span className="wb-inv" property="name">
                    <Trans>Government of Canada</Trans>
                  </span>
                </a>
              </div>
            )}
            <meta property="areaServed" typeof="Country" content="Canada" />
            <link property="logo" href="../assets/wmms-blk.svg" />
          </div>
          <div></div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  language: state.language,
});

export default connect(mapStateToProps)(HeaderLogo);
