// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const { projectDescription, installationInstructions, usageInformation, contributionGuidelines, testInstructions, projectName, userName, emailAddress } = data;



  return `
  
  # ${projectName}
  ## ${projectDescription}
  ### Table of Contents
  - [Description] (#projectDescription)
  - [Installation Instructions] (#installationInstructions)
  - [Usage Information] (#usageInformation)
  - [Contribution Guidelines] (#contributionGuidelines)
  - [Test Instructions] (#testInstructions)
  
  
  ## Description
  - Description: ${projectDescription}

  ## Installation
  - Installation: ${installationInstructions}

  ## Usage
  - Usage: ${usageInformation}

  ## Contributing
  - Contributing: ${contributionGuidelines}

  ## Tests
  - Tests: ${testInstructions}

  ## Questions 
  Github username: [a link](https://github.com/${userName})
  Email Address: Please send an email address to ${emailAddress} with whatever questions you have! 
`;
}

// exports generateMarkdown function output 
module.exports = data => {
  return generateMarkdown(data);
};