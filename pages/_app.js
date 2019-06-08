import App, { Container } from "next/app"
import Page from "../components/Page"

// Wrapper container component for Next's App
class _App extends App {
  render() {
    const { Component } = this.props

    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    )
  }
}
export default _App
