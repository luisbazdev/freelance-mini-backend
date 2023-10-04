function createQueryObject(query, gte, lt) {
  if (!isNaN(gte)) {
    query.monto_restante = {};
    query.monto_restante.$gte = gte;
  }

  if (!isNaN(lt)) {
    query.monto_restante = query.monto_restante || {};
    query.monto_restante.$lt = lt;
  }

  return query;
}
