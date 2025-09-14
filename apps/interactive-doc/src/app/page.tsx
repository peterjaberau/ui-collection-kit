"use client"
import { Toolbar } from "#components/ui/toolbar"

export default function Page() {
  return (
    <>

      <div className="tw:bg-indigo-600 tw:text-white tw:p-6 tw:rounded-xl">
        <h1 className="tw:text-2xl tw:font-semibold">Prefixed Tailwind v4</h1>
        <p className="tw:mt-2">All classes now require the <code></code> prefix.</p>
      </div>

      <Toolbar />
    </>
  )
}
