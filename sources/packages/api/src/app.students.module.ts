import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import {
  ApplicationService,
  FormService,
  StudentService,
  WorkflowActionsService,
  ProgramYearService,
  EducationProgramOfferingService,
  SFASApplicationService,
  SFASPartTimeApplicationsService,
  ConfigService,
  DisbursementScheduleService,
  InstitutionLocationService,
  EducationProgramService,
  SequenceControlService,
  StudentFileService,
  MSFAANumberService,
  SFASIndividualService,
  WorkflowService,
  StudentRestrictionService,
  DesignationAgreementLocationService,
  StudentAssessmentService,
  StudentAppealService,
} from "./services";
import {
  ApplicationStudentsController,
  StudentStudentsController,
  StudentAppealStudentsController,
} from "./route-controllers";
import { AuthModule } from "./auth/auth.module";
import { LoggerModule } from "./logger/logger.module";
import { ApplicationControllerService } from "./route-controllers/application/application.controller.service";

@Module({
  imports: [LoggerModule, DatabaseModule, AuthModule],
  controllers: [
    ApplicationStudentsController,
    StudentStudentsController,
    StudentAppealStudentsController,
  ],
  providers: [
    ApplicationService,
    FormService,
    StudentService,
    WorkflowActionsService,
    ProgramYearService,
    EducationProgramOfferingService,
    SFASApplicationService,
    SFASPartTimeApplicationsService,
    ConfigService,
    DisbursementScheduleService,
    InstitutionLocationService,
    EducationProgramService,
    SequenceControlService,
    StudentFileService,
    MSFAANumberService,
    SFASIndividualService,
    WorkflowService,
    StudentRestrictionService,
    DesignationAgreementLocationService,
    StudentAssessmentService,
    ApplicationControllerService,
    StudentAppealService,
  ],
})
export class AppStudentsModule {}