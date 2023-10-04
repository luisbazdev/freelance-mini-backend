const asyncWrapper = async (asyncFunction, params = []) => {
  try {
    const data = await asyncFunction(...params);
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = asyncWrapper;
