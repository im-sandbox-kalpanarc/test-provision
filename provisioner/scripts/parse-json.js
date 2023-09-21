const fs = require('fs');
const inputData = require('./issue.json');

// Extract the content of the "organization-name" and "repository-name" fields
const extractedData = {
  "org_name": inputData["organization-name"]["text"],
  "repo_name": inputData["repository-name"]["text"],
  "create-modify-repo": inputData["create-or-modify-repo"]["content"][0]
};

// Extract the content of the "enable-issues", "enable-wiki", and "enable-projects" fields
const enableIssuesContent = inputData["enable-issues"]["content"][0];
const enableWIKIContent = inputData["enable-wiki"]["content"][0];
const enableProjectsContent = inputData["enable-projects"]["content"][0];
const enableDiscussions = inputData["enable-discussions"]["content"][0];
const issueassignee = inputData["issue-assignee"]["text"];


// Add the extracted content to the extractedData object
if (enableIssuesContent !== "None") {
  extractedData["has_issues"] = enableIssuesContent.toLowerCase();
}
if (enableWIKIContent !== "None") {
  extractedData["has_wiki"] = enableWIKIContent.toLowerCase();
}
if (enableProjectsContent !== "None") {
  extractedData["has_projects"] = enableProjectsContent.toLowerCase();
}
if (enableDiscussions !== "None") {
  extractedData["has_discussions"] = enableDiscussions.toLowerCase();
}
if (issueassignee !== " " && issueassignee !== "None") {
  const assigneesArray = issueassignee.split(',').map(item => item.trim());
  const assigneesJSON = JSON.stringify(assigneesArray);
  extractedData["assignees"] = assigneesJSON;
}

// Write the extracted data to a JSON file
fs.writeFileSync('./extracted-data.json', JSON.stringify(extractedData, null, 2));
