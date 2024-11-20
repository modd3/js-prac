function eventListener(eventType, callback) {
    // this detects eventType
    var eventThatHappened = {
        eventHappen: "click",
        key: "p",
        code: "1234"
    }
    if (eventType === eventThatHappened.eventHappen){
       callback(eventThatHappened);
    }
}