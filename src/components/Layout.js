import React from "react"
import Header from "./Header"
import "../styles/Global.css"
export default function layout({ children }) {
  return (
    <div>
      <div >
        <Header />
      </div>

      <div>{children}</div>
      <footer>CopyRight 2021</footer>
    </div>
  )
}
