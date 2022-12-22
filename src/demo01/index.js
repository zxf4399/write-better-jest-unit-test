/* istanbul ignore next */
export const noop = () => {};

export const getConfig = (name) => {
  return {
    foo: noop,
    name: name || "Anonymous",
  };
};
