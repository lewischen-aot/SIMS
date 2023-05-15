import { Module } from "@nestjs/common";
import {
  ApplicationService,
  StudentFileService,
  SupportingUserService,
  TokensService,
  DesignationAgreementService,
  FormService,
  InstitutionLocationService,
  DesignationAgreementLocationService,
  EducationProgramOfferingService,
  EducationProgramService,
  InstitutionService,
  BCeIDService,
  UserService,
  StudentAppealRequestsService,
  StudentAppealService,
  StudentAssessmentService,
  StudentService,
  StudentRestrictionService,
  RestrictionService,
  ApplicationExceptionService,
  StudentScholasticStandingsService,
  SINValidationService,
  InstitutionUserAuthService,
  InstitutionTypeService,
  StudentAccountApplicationsService,
  InstitutionRestrictionService,
  EducationProgramOfferingValidationService,
  DisbursementReceiptService,
  DisbursementScheduleService,
} from "./services";
import {
  SupportingUserAESTController,
  DesignationAgreementAESTController,
  DesignationAgreementControllerService,
  ApplicationAESTController,
  InstitutionAESTController,
  InstitutionControllerService,
  AssessmentAESTController,
  StudentAESTController,
  StudentAppealAESTController,
  InstitutionLocationAESTController,
  InstitutionLocationControllerService,
  AssessmentControllerService,
  EducationProgramOfferingAESTController,
  ReportAESTController,
  StudentControllerService,
  ApplicationExceptionAESTController,
  ScholasticStandingAESTController,
  ScholasticStandingControllerService,
  InstitutionUserAESTController,
  EducationProgramAESTController,
  EducationProgramControllerService,
  StudentAccountApplicationAESTController,
  EducationProgramOfferingControllerService,
  NoteAESTController,
  RestrictionAESTController,
  UserAESTController,
  UserControllerService,
  ApplicationControllerService,
  InstitutionUserControllerService,
  ConfirmationOfEnrollmentAESTController,
  ConfirmationOfEnrollmentControllerService,
  OverawardAESTController,
  OverawardControllerService,
  ApplicationExceptionControllerService,
  StudentAppealControllerService,
  RestrictionControllerService,
} from "./route-controllers";
import { AuthModule } from "./auth/auth.module";
import {
  SFASIndividualService,
  SFASApplicationService,
  SFASPartTimeApplicationsService,
} from "@sims/services/sfas";
import {
  SequenceControlService,
  StudentRestrictionSharedService,
  WorkflowClientService,
  ReportService,
  DisbursementOverawardService,
  ConfirmationOfEnrollmentService,
  NoteSharedService,
  RestrictionSharedService,
  MSFAANumberSharedService,
} from "@sims/services";

@Module({
  imports: [AuthModule],
  controllers: [
    SupportingUserAESTController,
    DesignationAgreementAESTController,
    ApplicationAESTController,
    InstitutionAESTController,
    InstitutionUserAESTController,
    AssessmentAESTController,
    StudentAESTController,
    StudentAppealAESTController,
    InstitutionLocationAESTController,
    EducationProgramOfferingAESTController,
    ReportAESTController,
    ApplicationExceptionAESTController,
    ScholasticStandingAESTController,
    EducationProgramAESTController,
    StudentAccountApplicationAESTController,
    NoteAESTController,
    RestrictionAESTController,
    UserAESTController,
    ConfirmationOfEnrollmentAESTController,
    OverawardAESTController,
  ],
  providers: [
    ApplicationExceptionControllerService,
    StudentAppealControllerService,
    WorkflowClientService,
    InstitutionRestrictionService,
    SupportingUserService,
    ApplicationService,
    SequenceControlService,
    StudentFileService,
    TokensService,
    DesignationAgreementService,
    DesignationAgreementControllerService,
    FormService,
    InstitutionLocationService,
    DesignationAgreementLocationService,
    EducationProgramOfferingService,
    EducationProgramService,
    InstitutionService,
    BCeIDService,
    UserService,
    InstitutionControllerService,
    ApplicationControllerService,
    StudentAppealRequestsService,
    StudentAppealService,
    StudentAssessmentService,
    InstitutionLocationControllerService,
    AssessmentControllerService,
    ReportService,
    StudentControllerService,
    StudentService,
    SFASIndividualService,
    SFASApplicationService,
    SFASPartTimeApplicationsService,
    StudentRestrictionService,
    RestrictionService,
    RestrictionControllerService,
    ApplicationExceptionService,
    StudentScholasticStandingsService,
    ScholasticStandingControllerService,
    SINValidationService,
    InstitutionUserAuthService,
    InstitutionUserControllerService,
    InstitutionTypeService,
    EducationProgramControllerService,
    StudentAccountApplicationsService,
    EducationProgramOfferingControllerService,
    EducationProgramOfferingValidationService,
    DisbursementReceiptService,
    StudentRestrictionSharedService,
    UserControllerService,
    ConfirmationOfEnrollmentControllerService,
    ConfirmationOfEnrollmentService,
    DisbursementScheduleService,
    DisbursementOverawardService,
    NoteSharedService,
    OverawardControllerService,
    RestrictionSharedService,
    MSFAANumberSharedService,
  ],
})
export class AppAESTModule {}
