const fetch = require('node-fetch');

// Change this values to run propper this test case.
const ip = "192.168.99.100";
const port = "30001"

const func = async () => {
  let response = await fetch(`http://${ip}:${port}/`);
  return response;
}

test("Test sum",  async () => {
  let response = await func();
  expect(response).toContain("Hello from kubernetes cluster, this is my number:");
});