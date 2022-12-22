import { EventEmitter } from ".";

let eventEmitter;

beforeEach(() => {
  eventEmitter = new EventEmitter();
});

describe("EventEmitter", () => {
  describe("on", () => {
    test("should add a listener for an event", () => {
      const listener = jest.fn();

      eventEmitter.on("event", listener);
      eventEmitter.emit("event");
      expect(listener).toHaveBeenCalled();
    });

    test('should remove listener when returned "remove" function is called', () => {
      const listener = jest.fn();
      const remove = eventEmitter.on("event", listener);

      remove();
      eventEmitter.emit("event");
      expect(listener).not.toHaveBeenCalled();
    });
  });

  describe("once", () => {
    test("should add a one-time listener for an event", () => {
      const listener = jest.fn();

      eventEmitter.once("event", listener);
      eventEmitter.emit("event");
      eventEmitter.emit("event");
      expect(listener).toHaveBeenCalledTimes(1);
    });
  });

  describe("emit", () => {
    test("should call all listeners for an event", () => {
      const listener1 = jest.fn();
      const listener2 = jest.fn();

      eventEmitter.on("event", listener1);
      eventEmitter.on("event", listener2);
      eventEmitter.emit("event");
      expect(listener1).toHaveBeenCalled();
      expect(listener2).toHaveBeenCalled();
    });

    test("should pass arguments to listeners", () => {
      const listener = jest.fn();

      eventEmitter.on("event", listener);
      eventEmitter.emit("event", "arg1", "arg2");
      expect(listener).toHaveBeenCalledWith("arg1", "arg2");
    });
  });

  describe("off", () => {
    test("should remove a listener for an event", () => {
      const listener = jest.fn();
      eventEmitter.on("event", listener);
      eventEmitter.off("event", listener);
      eventEmitter.emit("event");
      expect(listener).not.toHaveBeenCalled();
    });
  });
});
