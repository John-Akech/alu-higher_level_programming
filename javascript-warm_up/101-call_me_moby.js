#!/usr/bin/node

const callMeMobby = (x, thefunction) => {
    if (x > 0) {
        thefunction();
        callMeMobby(x - 1 , thefunction);
    }
};

module.exports.callMeMobby = callMeMobby;
