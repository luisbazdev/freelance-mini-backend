function createQueryObject(query, gte, lt, nombre) {
  if (!isNaN(gte)) {
    query[nombre] = {};
    query[nombre].$gte = gte;
  }

  if (!isNaN(lt)) {
    query[nombre] = query[nombre] || {};
    query[nombre].$lt = lt;
  }

  return query;
}

module.exports = createQueryObject;
