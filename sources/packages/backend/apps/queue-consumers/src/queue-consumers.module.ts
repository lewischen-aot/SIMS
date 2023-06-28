import { Module } from "@nestjs/common";
import { QueueModule, QueueService } from "@sims/services/queue";
import {
  StartApplicationAssessmentProcessor,
  CancelApplicationAssessmentProcessor,
  ProcessNotificationScheduler,
  IER12IntegrationScheduler,
  CRAResponseIntegrationScheduler,
  CRAProcessIntegrationScheduler,
  SINValidationProcessIntegrationScheduler,
  SINValidationRequestIntegrationScheduler,
  FullTimeMSFAAProcessIntegrationScheduler,
  PartTimeMSFAAProcessIntegrationScheduler,
  PartTimeECertProcessIntegrationScheduler,
  FullTimeECertProcessIntegrationScheduler,
  FullTimeECertFeedbackIntegrationScheduler,
  PartTimeECertFeedbackIntegrationScheduler,
  FullTimeDisbursementReceiptsFileIntegrationScheduler,
  FINProcessProvincialDailyDisbursementsIntegrationScheduler,
  FederalRestrictionsIntegrationScheduler,
  FullTimeMSFAAProcessResponseIntegrationScheduler,
  PartTimeMSFAAProcessResponseIntegrationScheduler,
  SFASIntegrationScheduler,
  ATBCResponseIntegrationScheduler,
  ProcessArchiveApplicationsScheduler,
  ECEProcessIntegrationScheduler,
  ECEResponseIntegrationScheduler,
} from "./processors";
import {
  DisbursementScheduleSharedService,
  RestrictionSharedService,
  SequenceControlService,
  StudentRestrictionSharedService,
  WorkflowClientService,
  ZeebeModule,
  ConfirmationOfEnrollmentService,
  MSFAANumberSharedService,
} from "@sims/services";
import { DatabaseModule } from "@sims/sims-db";
import { IER12IntegrationModule } from "@sims/integrations/institution-integration/ier12-integration";
import { NotificationsModule } from "@sims/services/notifications";
import {
  SystemUserModule,
  SystemUsersService,
} from "@sims/services/system-users";
import { MSFAANumberService, SshService } from "@sims/integrations/services";
import {
  DisbursementReceiptIntegrationModule,
  ECertIntegrationModule,
  FedRestrictionIntegrationModule,
  MSFAAIntegrationModule,
  SINValidationModule,
} from "@sims/integrations/esdc-integration";
import { CRAIntegrationModule } from "@sims/integrations/cra-integration/cra-integration.module";
import { StudentAssessmentService, ApplicationService } from "./services";
import { SFASIntegrationModule } from "@sims/integrations/sfas-integration";
import { ATBCIntegrationModule } from "@sims/integrations/atbc-integration";
import { ECEIntegrationModule } from "@sims/integrations/institution-integration/ece-integration";

@Module({
  imports: [
    DatabaseModule,
    QueueModule,
    ZeebeModule.forRoot(),
    IER12IntegrationModule,
    ECEIntegrationModule,
    NotificationsModule,
    SystemUserModule,
    CRAIntegrationModule,
    SFASIntegrationModule,
    ATBCIntegrationModule,
    DisbursementReceiptIntegrationModule,
    ECertIntegrationModule,
    FedRestrictionIntegrationModule,
    MSFAAIntegrationModule,
    SINValidationModule,
  ],
  providers: [
    StartApplicationAssessmentProcessor,
    CancelApplicationAssessmentProcessor,
    WorkflowClientService,
    IER12IntegrationScheduler,
    ECEProcessIntegrationScheduler,
    ProcessNotificationScheduler,
    SFASIntegrationScheduler,
    ATBCResponseIntegrationScheduler,
    StudentAssessmentService,
    SshService,
    QueueService,
    CRAResponseIntegrationScheduler,
    CRAProcessIntegrationScheduler,
    SequenceControlService,
    WorkflowClientService,
    SINValidationProcessIntegrationScheduler,
    SINValidationRequestIntegrationScheduler,
    FullTimeMSFAAProcessIntegrationScheduler,
    MSFAANumberService,
    PartTimeMSFAAProcessIntegrationScheduler,
    PartTimeECertProcessIntegrationScheduler,
    DisbursementScheduleSharedService,
    StudentRestrictionSharedService,
    RestrictionSharedService,
    FullTimeECertProcessIntegrationScheduler,
    FullTimeECertFeedbackIntegrationScheduler,
    PartTimeECertFeedbackIntegrationScheduler,
    FullTimeDisbursementReceiptsFileIntegrationScheduler,
    FINProcessProvincialDailyDisbursementsIntegrationScheduler,
    FederalRestrictionsIntegrationScheduler,
    FullTimeMSFAAProcessResponseIntegrationScheduler,
    PartTimeMSFAAProcessResponseIntegrationScheduler,
    ProcessArchiveApplicationsScheduler,
    ECEResponseIntegrationScheduler,
    SystemUsersService,
    ApplicationService,
    ConfirmationOfEnrollmentService,
    MSFAANumberSharedService,
  ],
})
export class QueueConsumersModule {}
