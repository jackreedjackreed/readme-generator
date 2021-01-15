// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const linkISC = "https://choosealicense.com/licenses/isc/";
  const linkApache = "https://choosealicense.com/licenses/apache-2.0/";
  const linkGNU = "https://choosealicense.com/licenses/gpl-3.0/";
  const linkMIT = "https://choosealicense.com/licenses/mit/";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
