import { Module } from "@nestjs/common";
import {
  DesignationAgreementService,
  FormService,
  InstitutionService,
  BCeIDService,
  UserService,
  InstitutionLocationService,
  DesignationAgreementLocationService,
  ApplicationService,
  StudentFileService,
  StudentRestrictionService,
  RestrictionService,
  StudentScholasticStandingsService,
  StudentAssessmentService,
  InstitutionUserAuthService,
  DisbursementScheduleService,
  COEDeniedReasonService,
  InstitutionTypeService,
  EducationProgramOfferingService,
  EducationProgramService,
  PIRDeniedReasonService,
  StudentService,
  EducationProgramOfferingImportCSVService,
  EducationProgramOfferingValidationService,
  DisbursementReceiptService,
  StudentAppealService,
  ApplicationExceptionService,
  StudentAppealRequestsService,
} from "./services";
import {
  ApplicationControllerService,
  DesignationAgreementInstitutionsController,
  DesignationAgreementControllerService,
  InstitutionInstitutionsController,
  InstitutionControllerService,
  InstitutionLocationInstitutionsController,
  InstitutionLocationControllerService,
  ScholasticStandingInstitutionsController,
  ScholasticStandingControllerService,
  InstitutionUserInstitutionsController,
  InstitutionUserControllerService,
  ConfirmationOfEnrollmentInstitutionsController,
  ProgramInfoRequestInstitutionsController,
  EducationProgramInstitutionsController,
  EducationProgramControllerService,
  EducationProgramOfferingInstitutionsController,
  EducationProgramOfferingControllerService,
  ConfirmationOfEnrollmentControllerService,
  StudentInstitutionsController,
  OverawardInstitutionsController,
  StudentControllerService,
  AssessmentInstitutionsController,
  AssessmentControllerService,
  OverawardControllerService,
  ApplicationExceptionInstitutionsController,
  ApplicationExceptionControllerService,
  UserInstitutionsController,
  ApplicationInstitutionsController,
  UserControllerService,
  StudentAppealInstitutionsController,
  StudentAppealControllerService,
  RestrictionInstitutionsController,
  NoteInstitutionsController,
  RestrictionControllerService,
} from "./route-controllers";
import { AuthModule } from "./auth/auth.module";
import {
  ConfirmationOfEnrollmentService,
  DisbursementOverawardService,
  SequenceControlService,
  StudentRestrictionSharedService,
  WorkflowClientService,
  NoteSharedService,
  RestrictionSharedService,
} from "@sims/services";
import {
  SFASIndividualService,
  SFASApplicationService,
  SFASPartTimeApplicationsService,
} from "@sims/services/sfas";

@Module({
  imports: [AuthModule],
  controllers: [
    DesignationAgreementInstitutionsController,
    InstitutionInstitutionsController,
    InstitutionUserInstitutionsController,
    InstitutionLocationInstitutionsController,
    ApplicationInstitutionsController,
    ScholasticStandingInstitutionsController,
    ConfirmationOfEnrollmentInstitutionsController,
    EducationProgramInstitutionsController,
    ProgramInfoRequestInstitutionsController,
    EducationProgramOfferingInstitutionsController,
    UserInstitutionsController,
    StudentInstitutionsController,
    AssessmentInstitutionsController,
    OverawardInstitutionsController,
    ApplicationExceptionInstitutionsController,
    StudentAppealInstitutionsController,
    RestrictionInstitutionsController,
    OverawardInstitutionsController,
    NoteInstitutionsController,
  ],
  providers: [
    ApplicationControllerService,
    WorkflowClientService,
    FormService,
    DesignationAgreementService,
    DesignationAgreementControllerService,
    InstitutionService,
    BCeIDService,
    UserService,
    InstitutionLocationService,
    InstitutionControllerService,
    DesignationAgreementLocationService,
    InstitutionLocationControllerService,
    ApplicationService,
    SequenceControlService,
    StudentFileService,
    StudentRestrictionService,
    RestrictionService,
    RestrictionControllerService,
    StudentScholasticStandingsService,
    StudentAssessmentService,
    ScholasticStandingControllerService,
    InstitutionUserAuthService,
    InstitutionUserControllerService,
    DisbursementScheduleService,
    COEDeniedReasonService,
    InstitutionTypeService,
    EducationProgramService,
    EducationProgramOfferingService,
    EducationProgramOfferingService,
    PIRDeniedReasonService,
    EducationProgramControllerService,
    EducationProgramOfferingControllerService,
    StudentService,
    SFASIndividualService,
    SFASApplicationService,
    SFASPartTimeApplicationsService,
    EducationProgramOfferingImportCSVService,
    EducationProgramOfferingValidationService,
    StudentRestrictionSharedService,
    UserControllerService,
    ConfirmationOfEnrollmentControllerService,
    ConfirmationOfEnrollmentService,
    DisbursementOverawardService,
    NoteSharedService,
    StudentControllerService,
    RestrictionSharedService,
    AssessmentControllerService,
    DisbursementReceiptService,
    StudentAppealService,
    ApplicationExceptionService,
    StudentAppealRequestsService,
    OverawardControllerService,
    ApplicationExceptionControllerService,
    StudentAppealControllerService,
  ],
})
export class AppInstitutionsModule {}
