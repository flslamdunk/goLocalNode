
/*
 * GET events.
 */

exports.list = function(req, res){
  var events = {
    id: 1,
    name: 'Li Fan'
  }
  res.json(events);
};