class EventEmitter {
  constructor() {
    //维护callbacks 订阅者
    this.events = {}//type,[]
  }
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(listener)
  }
  //手动触发
  emitter(event, ...args) {
    if (!this.events[event]) {
      return
    }

    this.events[event].forEach(listener => {
      listener.apply(this, args)
    })
  }
  off(event, listener) {
    // removeEventListener type + callback 具体的订阅者
    if (!this.events[event]) return
    this.events[event] = this.events[event].filter(item => item !== listener)
  }
  once() {

  }
}
const ws = new EventEmitter()
ws.on('a', () => {
  console.log('a')
})
ws.on('b', () => {
  console.log('b')
})
ws.emitter('a')
setTimeout(() => {
  ws.emitter('b')
}, 10000)
ws.emitter('a')
