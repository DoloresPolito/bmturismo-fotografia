import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  width: 90%;
  /* max-width: 1140px; */
  @media only screen and (min-width: 701px) and (max-width: 1200px) {
    max-width: 90%;
  }
  @media only screen and (min-width: 1900px) {
    margin: auto;
  }
  @media only screen and (max-width: 700px) {
    max-width: 95%;
    margin: 0 24px;
    padding: 24px 0;
  }

`


