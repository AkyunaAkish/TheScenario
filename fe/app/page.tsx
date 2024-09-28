"use client";

import { TopNav } from './components/TopNav'
import { DataProvider } from "./context/DataContext"
import { Data } from "./components/Data"

export default () => {
  return (
    <main className="main">
      <DataProvider>
        <TopNav />
        <Data />
      </DataProvider>
    </main>
  )
}
