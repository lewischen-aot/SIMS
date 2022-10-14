import { Module } from "@nestjs/common";
import { DatabaseModule } from "@sims/sims-db";
import {
  ApplicationService,
  ConfigService,
  MSFAANumberService,
  SequenceControlService,
  StudentFileService,
  SupportingUserService,
  TokensService,
  WorkflowActionsService,
  WorkflowService,
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
  SFASApplicationService,
  SFASPartTimeApplicationsService,
  GCNotifyService,
  GCNotifyActionsService,
  ReportService,
  StudentService,
  SFASIndividualService,
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
  NotificationService,
  NotificationMessageService,
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
} from "./route-controllers";
import { AuthModule } from "./auth/auth.module";
import { LoggerModule } from "./logger/logger.module";
import { ApplicationControllerService } from "./route-controllers/application/application.controller.service";
import { InstitutionUserControllerService } from "./route-controllers/institution-user/institution-user.controller.service";

@Module({
  imports: [LoggerModule, DatabaseModule, AuthModule],
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
  ],
  providers: [
    InstitutionRestrictionService,
    SupportingUserService,
    ApplicationService,
    SequenceControlService,
    StudentFileService,
    WorkflowActionsService,
    MSFAANumberService,
    WorkflowService,
    ConfigService,
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
    SFASApplicationService,
    SFASPartTimeApplicationsService,
    InstitutionLocationControllerService,
    GCNotifyService,
    GCNotifyActionsService,
    AssessmentControllerService,
    ReportService,
    StudentControllerService,
    StudentService,
    SFASIndividualService,
    StudentRestrictionService,
    RestrictionService,
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
    NotificationService,
    NotificationMessageService,
  ],
})
export class AppAESTModule {}
