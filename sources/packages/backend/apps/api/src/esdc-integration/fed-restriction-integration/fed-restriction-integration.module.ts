import { Module } from "@nestjs/common";
import { SshService } from "@sims/integrations/services";
import {
  FederalRestrictionService,
  RestrictionService,
  StudentRestrictionService,
  StudentService,
} from "../../services";
import { FedRestrictionIntegrationService } from "./fed-restriction-integration.service";
import { FedRestrictionProcessingService } from "./fed-restriction-processing.service";
import { SFASIndividualService } from "@sims/services/sfas";

@Module({
  providers: [
    SshService,
    FedRestrictionIntegrationService,
    FedRestrictionProcessingService,
    RestrictionService,
    StudentService,
    StudentRestrictionService,
    SFASIndividualService,
    FederalRestrictionService,
  ],
  exports: [FedRestrictionIntegrationService, FedRestrictionProcessingService],
})
export class FedRestrictionIntegrationModule {}
