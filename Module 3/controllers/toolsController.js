/**
 * @api {get} /tools all tools
 *
 **/
const getTools = (req, res, next) => {
  const { ip, query, params, body, headers } = req;
  console.log(ip, query, params, body, headers);
  res.send("tools found here");
};

module.exports = { getTools };
