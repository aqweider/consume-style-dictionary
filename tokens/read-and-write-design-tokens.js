const { graphql } = require("@octokit/graphql");
const fs = require("fs");

// https://github.com/motdotla/dotenv
// You'll need to create a ".env" file with your secrets. See the ".env.example" I included.
require("dotenv").config();

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  },
});

const PLATFORM_DELIVERABLE = "css";
const variables = {
  owner: "aqweider",
  name: "consume-style-dictionary",
  tree: `main:output/${PLATFORM_DELIVERABLE}`,
};

async function main() {
  // https://github.com/octokit/graphql.js
  const { repository } = await graphqlWithAuth(
    `
    query FetchDesignTokens($owner: String!, $name: String!, $tree: String!) {
      repository(name: $name, owner: $owner) {
        content: object(expression: $tree) {
          ... on Tree {
            entries {
              name
              object {
                ... on Blob {
                  text
                }
              }
            }
          }
        }
      }
    }
    `,
    variables
  );

  console.log("result", repository)
  // https://nodejs.org/api/fs.html
  repository.content.entries.forEach(({ name, object: { text } }) => {
    fs.writeFileSync(`./tokens/${name}`, text);
  });
}

main();
