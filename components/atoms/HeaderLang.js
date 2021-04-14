import React from "react";
import { Trans } from "@lingui/macro";
import { connect } from "react-redux";
import { setNewLanguage } from "../actions/languageActions";
import PropTypes from "prop-types";

class HeaderLang extends React.Component {
  static propTypes = {
    setNewLanguage: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      language: "",
    };

    this.handleClick = this.handleClick.bind(this);
    this.getNewLanguage = this.getNewLanguage.bind(this);
  }

  getNewLanguage() {
    return this.state.language === "fr" ? "en" : "fr";
  }

  componentDidMount() {
    this.setState({ language: this.props.language });
    console.log("HeaderLang initial language : ");
    console.log(this.props.language);
    console.log(this.state.language);
  }

  handleClick() {
    const lang = this.getNewLanguage();
    this.setState({ language: lang }, () =>
      this.props.setNewLanguage(this.state.language)
    );
  }

  render() {
    const { lang } = this.props.language;
    console.log("HeaderLang render language : ");
    console.log(this.props.language);
    console.log(this.state.language);
    return (
      <React.Fragment>
        <section id="wb-lng" className="text-right">
          <h2 className="wb-inv">
            <Trans>Language selection</Trans>
          </h2>
          <div className="row">
            <div className="col-md-12">
              <ul className="list-inline margin-bottom-none">
                <li>
                  {this.getNewLanguage() === "fr" ? (
                    <a
                      href="/#english"
                      lang="en"
                      onClick={() => this.handleClick(lang)}
                    >
                      Français
                    </a>
                  ) : (
                    <a
                      href="/#français"
                      lang="fr"
                      onClick={() => this.handleClick(lang)}
                    >
                      English
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  language: state.language,
});

export default connect(mapStateToProps, { setNewLanguage })(HeaderLang);
