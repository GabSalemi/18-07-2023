import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MainContext } from '@/state/global'
import { useContext, useReducer } from 'react'
import { loginReducer } from '@/state/reducer'
import { initialState } from '@/state/global'
import DefaultLayout from '@/layouts/defaultLayout'

export default function App({ Component, pageProps }: AppProps) {

  const [state, dispatch] = useReducer(loginReducer, initialState);

  return <MainContext.Provider value={{state, dispatch}}>
      <DefaultLayout />
      <Component {...pageProps} />
  </MainContext.Provider>
}
