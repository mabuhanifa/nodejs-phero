/**
 * @api {get} /tools all tools
 * @api {get} /tool by id
 **/

const tools = [
  { id: 1, name: "hammer" },
  { id: 2, name: "hammer2" },
  { id: 3, name: "hammer3" },
];

const getTools = (req, res) => {
  const { limit, page } = req.query;
  res.json(tools.slice(0, limit));
};

const getTool = (req, res) => {
  const { id } = req.params;
  const tool = tools.find((t) => t.id === Number(id));
  res.json(tool);
};

const createTool = (req, res) => {
  const body = req.body;

  tools.push(body);

  res.send(tools);
};
const updateTool = (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const tool = tools.find((t) => t.id === Number(id));
  tool.id = Number(id);
  tool.name = body.name;
  res.send(tools);
};

module.exports = { getTools, getTool, createTool, updateTool };
