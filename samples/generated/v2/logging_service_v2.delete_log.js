// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(logName) {
  // [START logging_v2_generated_LoggingServiceV2_DeleteLog_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the log to delete:
   *      "projects/[PROJECT_ID]/logs/[LOG_ID]"
   *      "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
   *      "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
   *      "folders/[FOLDER_ID]/logs/[LOG_ID]"
   *  `[LOG_ID]` must be URL-encoded. For example,
   *  `"projects/my-project-id/logs/syslog"`,
   *  `"organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
   *  For more information about log names, see
   *  LogEntry google.logging.v2.LogEntry.
   */
  // const logName = 'abc123'

  // Imports the Logging library
  const {LoggingServiceV2Client} = require('@google-cloud/logging').v2;

  // Instantiates a client
  const loggingClient = new LoggingServiceV2Client();

  async function callDeleteLog() {
    // Construct request
    const request = {
      logName,
    };

    // Run request
    const response = await loggingClient.deleteLog(request);
    console.log(response);
  }

  callDeleteLog();
  // [END logging_v2_generated_LoggingServiceV2_DeleteLog_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));