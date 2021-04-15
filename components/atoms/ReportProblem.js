import React from "react";

class ReportProblem extends React.Component {
  render() {
    return (
      <details className="brdr-0">
        <summary className="btn btn-default text-center">
          Report a problem or mistake on this page
        </summary>
        <div className="clearfix"></div>
        <div className="well row">
          <div>
            <div className="gc-rprt-prblm">
              <div
                className="gc-rprt-prblm-frm gc-rprt-prblm-tggl"
                id="wb-auto-6"
              >
                <form
                  id="gc-rprt-prblm-form"
                  action="/gc/services/generateemail"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="pageTitle"
                    value="Departments and agencies"
                  />
                  <input
                    type="hidden"
                    name="submissionPage"
                    value="/content/canadasite/en/government/dept.html"
                  />
                  <input type="hidden" name="lang" value="en" />
                  <input
                    type="hidden"
                    name="pageOwner"
                    value="gc:institutions/service-canada"
                  />
                  <input
                    id="emailTemplate"
                    name="emailTemplate"
                    type="hidden"
                    value="reportaproblem/rap"
                  />
                  <input
                    name="subject"
                    type="hidden"
                    value="Report a problem or mistake on this page"
                  />
                  <fieldset>
                    <legend>
                      <span className="field-name">
                        Please select all that apply:
                      </span>
                    </legend>
                    <div className="checkbox">
                      <label for="problem1">
                        <input
                          name="problem1"
                          id="problem1"
                          type="checkbox"
                          value="Yes"
                          data-reveal="#broken"
                          data-gc-analytics-rap="A link, button or video is not working-Un lien, un bouton ou une vidéo ne fonctionne pas"
                        />
                        A link, button or video is not working
                      </label>
                      <input name="problem1" type="hidden" value="No" />
                    </div>
                    <div className="checkbox">
                      <label for="problem2">
                        <input
                          name="problem2"
                          id="problem2"
                          type="checkbox"
                          value="Yes"
                          data-reveal="#spelling"
                          data-gc-analytics-rap="It has a spelling mistake-Il y a une erreur d'orthographe ou de grammaire"
                        />
                        It has a spelling mistake
                      </label>
                      <input name="problem2" type="hidden" value="No" />
                    </div>
                    <div className="checkbox">
                      <label for="problem3">
                        <input
                          name="problem3"
                          id="problem3"
                          type="checkbox"
                          value="Yes"
                          data-reveal="#wrong"
                          data-gc-analytics-rap="Information is missing-Les renseignements sont incomplets"
                        />
                        Information is missing
                      </label>
                      <input name="problem3" type="hidden" value="No" />
                    </div>
                    <div className="checkbox">
                      <label for="problem4">
                        <input
                          name="problem4"
                          id="problem4"
                          type="checkbox"
                          value="Yes"
                          data-reveal="#outdated"
                          data-gc-analytics-rap=" Information is outdated or wrong-L'information n'est plus à jour ou est erronée"
                        />
                        Information is outdated or wrong
                      </label>
                      <input name="problem4" type="hidden" value="No" />
                    </div>
                    <div className="checkbox">
                      <label for="problem5">
                        <input
                          name="problem5"
                          id="problem5"
                          type="checkbox"
                          value="Yes"
                          data-reveal="#find"
                          data-gc-analytics-rap=" Login error when trying to access an account (e.g. My Service Canada Account)-Message d'erreur à l'ouverture de la session lorsque je tente d'accéder à un compte (ex. Mon dossier Service Canada)"
                        />
                        Login error when trying to access an account (e.g. My
                        Service Canada Account)
                      </label>
                      <input name="problem5" type="hidden" value="No" />
                    </div>
                    <ul>
                      <li className="checkbox">
                        <label for="problem6a">
                          <input
                            name="problem6"
                            id="problem6a"
                            type="checkbox"
                            value="Yes"
                            data-reveal="#find"
                            data-gc-analytics-rap="GC Key access-Accès CléGC"
                          />
                          GC Key access
                        </label>
                        <input name="problem6" type="hidden" value="No" />
                      </li>
                      <li className="checkbox">
                        <label for="problem7">
                          <input
                            name="problem7"
                            id="problem7"
                            type="checkbox"
                            value="Yes"
                            data-reveal="#find"
                            data-gc-analytics-rap="SecureKey Concierge (Banking Credential) access-Accès SecureKey Service de Concierge (justificatifs d'identité bancaires)"
                          />
                          SecureKey Concierge (Banking Credential) access{" "}
                        </label>
                        <input name="problem7" type="hidden" value="No" />
                      </li>
                      <li className="checkbox">
                        <label for="problem8">
                          <input
                            name="problem8"
                            id="problem8"
                            type="checkbox"
                            value="Yes"
                            data-reveal="#find"
                            data-gc-analytics-rap="Personal Access Code (PAC) problems or EI Access Code (AC) problems-Problème avec le Code d'accès personnel (CAP) ou avec le Code d'accès (CA) de l'assurance emploi"
                          />
                          Personal Access Code (PAC) problems or EI Access Code
                          (AC) problems
                        </label>
                        <input name="problem8" type="hidden" value="No" />
                      </li>
                      <li className="checkbox">
                        <label for="problem9">
                          <input
                            name="problem9"
                            id="problem9"
                            type="checkbox"
                            value="Yes"
                            data-reveal="#find"
                            data-gc-analytics-rap="Social Insurance Number (SIN) validation problems-Problème lié à la validation du numéro d'assurance sociale (NAS)"
                          />
                          Social Insurance Number (SIN) validation problems
                        </label>
                        <input name="problem9" type="hidden" value="No" />
                      </li>
                      <li className="checkbox">
                        <label for="problem10">
                          <input
                            name="problem10"
                            id="problem10"
                            type="checkbox"
                            value="Yes"
                            data-reveal="#find"
                            data-gc-analytics-rap="Other login error not in this list-Autre erreur lors de l'ouverture de session qui ne figure pas sur cette liste"
                          />
                          Other login error not in this list
                        </label>
                        <input name="problem10" type="hidden" value="No" />
                      </li>
                    </ul>
                    <div className="checkbox">
                      <label for="problem11">
                        <input
                          name="problem11"
                          id="problem11"
                          type="checkbox"
                          value="Yes"
                          data-reveal="#find"
                          data-gc-analytics-rap="I can't find what I'm looking for-Je n'arrive pas à trouver ce que je cherche"
                        />
                        I can't find what I'm looking for
                      </label>
                      <input name="problem11" type="hidden" value="No" />
                    </div>
                    <div className="checkbox">
                      <label for="problem12">
                        <input
                          name="problem12"
                          id="problem12"
                          type="checkbox"
                          value="Yes"
                          data-reveal="#find"
                          data-gc-analytics-rap="Other issue not in this list-Autre problème qui ne figure pas sur cette liste"
                        />
                        Other issue not in this list
                      </label>
                      <input name="problem12" type="hidden" value="No" />
                    </div>
                  </fieldset>
                  <button
                    data-wb5-click="postback@#gc-rprt-prblm-form@"
                    type="submit"
                    className="btn btn-primary wb-toggle wb-init wb-toggle-inited"
                    data-toggle='{"stateOff": "hide", "stateOn": "show", "selector": ".gc-rprt-prblm-tggl"}'
                    aria-controls="wb-auto-6 wb-auto-7"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div
                className="gc-rprt-prblm-thnk gc-rprt-prblm-tggl hide"
                id="wb-auto-7"
              >
                <h3>Thank you for your help!</h3>
                <p>
                  You will not receive a reply. For enquiries,&nbsp;
                  <a href="https://www.canada.ca/en/contact/index.html">
                    contact us
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </details>
    );
  }
}

export default ReportProblem;
