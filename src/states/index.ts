import { configureStore } from '@reduxjs/toolkit'

import result from './result'

export const store = configureStore({
  reducer: { result },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
