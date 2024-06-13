import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import styled from '@emotion/styled'

const Container = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 40vh;
`

const ErrorPage = () => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <Container>
        <h1>{`${error?.status ?? 'Error'} | ${error?.statusText || error.data?.message}`}</h1>
        <span>{error?.data?.message || '문제가 발생했습니다'}</span>
      </Container>
    )
  }

  if (error instanceof Error) {
    return (
      <Container>
        <h1>{`Error | ${error?.name}`}</h1>
        <span>{error?.message || '문제가 발생했습니다'}</span>
        <span>{error?.stack || ''}</span>
      </Container>
    )
  }

  return (
    <Container>
      <h1>{`Error`}</h1>
      <span>{'문제가 발생했습니다'}</span>
    </Container>
  )
}

export default ErrorPage
