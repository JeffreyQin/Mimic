# OpenAI Mimic

This is a mini project that uses the OpenAI API to accept instructions and imitate how certain people talk.  

- Frontend: HTML, JavaScript  
- Backend: Javascript (Node.js, Express.js, OpenAI API)

## How to use

1. Clone the repository.
2. Modify the following to your needs:
    - In ".env", fill in the OPENAI_API_KEY with yours.
    - In "data/groups.json", fill in the group names (passcode) and add people to your groups.
    - In "data/instructions.json", add and fill in the instructions for each person. See example below.
3. Install node.js. Run "npm install" and "node server.js" to start server.
4. Open index.html in the browser, and fill in the passcode as you defined in "data/group.json".

### Example instructions

prompt: "contains information related to Canada"  
message: ["It's a good country!", "Canada is beautiful!", "Where do you live?"]

## Features in development

- Generate responses defined by a "tone" or "style", rather than limited to particular phrases.
- Generate responses that uses existing conversation as context.
