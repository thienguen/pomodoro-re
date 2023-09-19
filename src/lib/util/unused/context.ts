// previously, we use this context to wrap the Pomodoro app
// Now we immitate a redux/zustand store with react hooks
// reason why we don't actually npm install redux/zustand is because
// me no like them, the syntax is heinous
'use client'

import React from "react";
export const Context = React.createContext({});
