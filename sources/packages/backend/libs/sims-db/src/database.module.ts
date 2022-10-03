import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ormConfig } from "./data-source";
import {
  ApplicationExceptionRequest,
  ApplicationException,
  ApplicationStudentFile,
  Application,
  COEDeniedReason,
  CRAIncomeVerification,
  DesignationAgreementLocation,
  DesignationAgreement,
  DisbursementFeedbackErrors,
  DisbursementReceiptValue,
  DisbursementReceipt,
  DisbursementSchedule,
  DisbursementValue,
  EducationProgramOffering,
  EducationProgram,
  FederalRestriction,
  InstitutionLocation,
  InstitutionRestriction,
  InstitutionType,
  InstitutionUserAuth,
  InstitutionUserTypeAndRole,
  InstitutionUser,
  Institution,
  MSFAANumber,
  Note,
  PIRDeniedReason,
  ProgramYear,
  ReportConfig,
  Restriction,
  SequenceControl,
  SFASApplication,
  SFASIndividual,
  SFASPartTimeApplications,
  SFASRestriction,
  SINValidation,
  StudentAccountApplication,
  StudentAppealRequest,
  StudentAppeal,
  StudentAssessment,
  StudentFile,
  StudentRestriction,
  StudentScholasticStanding,
  StudentUser,
  Student,
  SupportingUser,
  User,
} from "./entities";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormConfig,
      logging: ["error", "warn"],
      entities: [
        ApplicationExceptionRequest,
        ApplicationException,
        ApplicationStudentFile,
        Application,
        COEDeniedReason,
        CRAIncomeVerification,
        DesignationAgreementLocation,
        DesignationAgreement,
        DisbursementFeedbackErrors,
        DisbursementReceiptValue,
        DisbursementReceipt,
        DisbursementSchedule,
        DisbursementValue,
        EducationProgramOffering,
        EducationProgram,
        FederalRestriction,
        InstitutionLocation,
        InstitutionRestriction,
        InstitutionType,
        InstitutionUserAuth,
        InstitutionUserTypeAndRole,
        InstitutionUser,
        Institution,
        MSFAANumber,
        Note,
        PIRDeniedReason,
        ProgramYear,
        ReportConfig,
        Restriction,
        SequenceControl,
        SFASApplication,
        SFASIndividual,
        SFASPartTimeApplications,
        SFASRestriction,
        SINValidation,
        StudentAccountApplication,
        StudentAppealRequest,
        StudentAppeal,
        StudentAssessment,
        StudentFile,
        StudentRestriction,
        StudentScholasticStanding,
        StudentUser,
        Student,
        SupportingUser,
        User,
      ],
    }),
  ],
})
export class DatabaseModule {}