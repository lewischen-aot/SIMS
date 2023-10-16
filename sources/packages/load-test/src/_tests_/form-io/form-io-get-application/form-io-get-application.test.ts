/**
 * Methods like setup and default are part of the K6 life cycle.
 * @see https://k6.io/docs/using-k6/test-lifecycle
 * The exported options are part of the K6 configuration.
 * @see https://k6.io/docs/using-k6/k6-options
 */
import { check, sleep } from "k6";
import {
  createFormAuthHeader,
  getFormByAlias,
} from "../../../utils/form-io-api";

interface SetupData {
  formIOHeader: Record<string, string>;
}

/**
 * Define test-run behavior.
 * Part of the K6 life cycle.
 */
export const options = {
  vus: 50,
  duration: "60s",
};

/**
 * Set up data for processing, share data among VUs.
 * Part of the K6 life cycle.
 * @returns data to be consumed
 */
export function setup(): SetupData {
  const formIOHeader = createFormAuthHeader();
  return { formIOHeader };
}

/**
 * Test scenario to executed as many times as defined by the test options.
 * Part of the K6 life cycle.
 * @param setupData setup data returned by setup method.
 */
export default function (setupData: SetupData) {
  const response = getFormByAlias("sfaa2023-24", setupData.formIOHeader);
  check(response, {
    "Created with success": (r) => r.status === 200,
  });
  sleep(1);
}