import { Container } from "@mui/material"
import React from "react"
import { Header } from "../components/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          paddingLeft: 24,
          paddingRight: 24,
          paddingBottom: 16,
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="sm">
          <Header />
          {children}
        </Container>
      </body>
    </html>
  )
}
