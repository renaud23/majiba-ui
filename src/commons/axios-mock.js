function json() {
  return { token: "FAKE" };
}

function get() {
  return Promise.resolve({ json });
}

function mock() {
  return {
    get,
  };
}

export default mock;
