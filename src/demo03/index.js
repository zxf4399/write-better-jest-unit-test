export class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(listener);

    return () => this.off(event, listener);
  }

  once(event, listener) {
    const remove = this.on(event, (...args) => {
      remove();
      listener(...args);
    });
  }

  emit(event, ...args) {
    this.events[event]?.forEach((listener) => listener(...args));
  }

  off(event, listener) {
    this.events[event] = this.events[event]?.filter((l) => l !== listener);
  }
}
