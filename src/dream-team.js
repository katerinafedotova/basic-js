const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if ( !members || !members.length) return false
  let filteredMembers = members.filter(i => (typeof i === 'string'))

  return filteredMembers.map(j => j.trim().substr(0,1).toUpperCase())
  .sort().join('')
};
