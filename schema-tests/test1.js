const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "string",
  format: "test",
};

ajv.addFormat("test", (data) => {
  console.log(data);
  return data === "af";
});

const data = "af";
const valid = ajv.validate(schema, data);
if (!valid) console.log(ajv.errors);
