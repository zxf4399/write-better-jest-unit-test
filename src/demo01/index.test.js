import { getConfig } from ".";

describe("getConfig", () => {
  test("should return name if have the paramter", () => {
    const name = "zxf4399";
    const config = getConfig(name);

    expect(config.name).toBe(name);
  });

  test("should return default name if doesn't have the paramter", () => {
    const config = getConfig();

    expect(config.name).toBe("Anonymous");
  });
});
