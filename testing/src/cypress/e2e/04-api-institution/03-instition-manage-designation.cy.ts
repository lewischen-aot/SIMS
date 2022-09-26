import InstitutionHelperActions from "../../custom-command/institution/common-helper-functions.cy";
import Authorization, {
  ClientId,
} from "../../custom-command/common/authorization";
import CommonRegex from "../../custom-command/common/commonRegex";

const institutionHelperActions = new InstitutionHelperActions();
const commonRegexObject = new CommonRegex();

const USERNAME = institutionHelperActions.getUserNameForApiTest();
const PASSWORD = institutionHelperActions.getUserPasswordForApiTest();
const TOKEN_URL = institutionHelperActions.getApiUrlForKeyCloakToken();

describe("[Designation details] ", () => {
  let token: string;

  before(async () => {
    const authorizer = new Authorization();
    token = await authorizer.getAuthToken(
      USERNAME,
      PASSWORD,
      ClientId.Institution,
      TOKEN_URL
    );
  });

  it("Verify GET call for designation-agreement endpoint", () => {
    cy.request({
      method: "GET",
      url: institutionHelperActions.getApiForDesignationAgreement(),
      followRedirect: false,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      const body = response.body;
      expect(response.status).to.be.eq(200);
      body.forEach((designation: JSON) => {
        expect(designation.designationId).to.be.a("number");
        expect(designation.designationStatus).to.be.oneOf([
          "Approved",
          "Declined",
          "Pending",
        ]);
        expect(designation.endDate).to.match(commonRegexObject.dateTimeRegex);
        expect(designation.startDate).to.match(commonRegexObject.dateTimeRegex);
        expect(designation.submittedDate).to.match(
          commonRegexObject.timeStampRegex
        );
      });
    });
  });

  it("Verify GET call for designation-agreement view endpoint", () => {
    cy.request({
      method: "GET",
      url: `${institutionHelperActions.getApiForDesignationAgreement()}/1`,
      followRedirect: false,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response: JSON) => {
      const body = response.body;
      expect(response.status).to.be.eq(200);
      expect(body.designationId).to.be.a("number");
      expect(body.designationStatus).to.be.oneOf([
        "Approved",
        "Declined",
        "Pending",
      ]);
      expect(body.endDate).to.match(commonRegexObject.timeStampRegex);
      expect(body.startDate).to.match(commonRegexObject.timeStampRegex);
      expect(body.institutionId).to.be.a("number");
      expect(body.institutionName).to.be.eq("College F");
      expect(body.institutionType).to.be.eq("BC Private");
      if (body.institutionType == "BC Private") {
        expect(body.isBCPrivate).to.be.true;
      } else {
        expect(body.isBCPrivate).to.be.false;
      }
      body.locationsDesignations.forEach((location: JSON) => {
        expect(location.locationId).to.be.a("number");
        expect(location.designationLocationId).to.be.a("number");
        expect(location.approved).to.be.a("boolean");
        expect(location.locationData.address.addressLine1).to.be.a("string");
        expect(location.locationData.address.country).to.be.a("string");
        expect(location.locationData.address.city).to.be.a("string");
        expect(location.locationData.address.postalCode).to.be.a("string");
        expect(location.locationData.address.provinceState).to.be.a("string");
        expect(location.locationData.address.selectedCountry).to.be.a("string");
        expect(location.locationId).to.be.a("number");
        expect(location.locationName).to.be.a("string");
      });
      expect(body.submittedData.agreementAccepted).to.be.a("boolean");
      body.submittedData.eligibilityOfficers.forEach((officerData: JSON) => {
        expect(officerData.email).to.match(commonRegexObject.emailRegex);
        expect(officerData.phone).to.match(commonRegexObject.phoneNumberRegex);
        expect(officerData.name).to.be.a("string");
        expect(officerData.positionTitle).to.be.oneOf(["Admin"]);
      });
      body.submittedData.enrolmentOfficers.forEach((officerData: JSON) => {
        expect(officerData.email).to.match(commonRegexObject.emailRegex);
        expect(officerData.phone).to.match(commonRegexObject.phoneNumberRegex);
        expect(officerData.name).to.be.a("string");
        expect(officerData.positionTitle).to.be.oneOf(["AEO"]);
      });
      expect(body.submittedData.legalAuthorityEmailAddress).to.match(
        commonRegexObject.emailRegex
      );
      expect(body.submittedData.legalAuthorityName).to.be.a("string");
      expect(body.submittedData.scheduleA).to.be.a("boolean");
      expect(body.submittedData.scheduleB).to.be.a("boolean");
      expect(body.submittedData.scheduleD).to.be.a("boolean");
      expect(body.submittedData.textArea).to.be.a("string");
    });
  });
});
