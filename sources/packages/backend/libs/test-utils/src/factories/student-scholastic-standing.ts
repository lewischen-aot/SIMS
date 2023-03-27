import {
  Application,
  StudentAssessment,
  StudentScholasticStanding,
  StudentScholasticStandingChangeType,
  User,
} from "@sims/sims-db";

/**
 * Creates a scholastic standing record ready to be saved to the database.
 * @param relations dependencies.
 * - `submittedBy` institution user submitting the scholastic standing change.
 * - `application` related student application.
 * - `studentAssessment` related assessment.
 * @returns scholastic standing record ready to be saved to the database.
 */
export function createFakeStudentScholasticStanding(relations?: {
  submittedBy: User;
  application?: Application;
  studentAssessment?: StudentAssessment;
}): StudentScholasticStanding {
  const scholasticStanding = new StudentScholasticStanding();
  scholasticStanding.application = relations?.application;
  scholasticStanding.submittedData = {} as unknown;
  scholasticStanding.submittedDate = new Date();
  scholasticStanding.submittedBy = relations?.submittedBy;
  scholasticStanding.note = null;
  scholasticStanding.studentAssessment = relations?.studentAssessment;
  scholasticStanding.referenceOffering = null;
  scholasticStanding.unsuccessfulWeeks = null;
  scholasticStanding.changeType =
    StudentScholasticStandingChangeType.StudentDidNotCompleteProgram;
  return scholasticStanding;
}
