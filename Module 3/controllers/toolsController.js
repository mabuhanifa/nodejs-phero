/**
 * @api {get} /tools all tools
 *
 **/
const getTools = (req, res, next) => {
  res.send("tools found here");
};

module.exports = { getTools };
