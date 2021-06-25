import styled from 'styled-components'

export const StyledCard = styled.div`
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.08);
  padding: 2em;
  background-color: #ffffff;
  border-radius: 8px;

  .card {
    &__body {
      display: flex;
      margin-top: 2em;
    }

    &__buttons {
      margin-top: 2em;
      display: flex;

      button:first-child {
        margin-left: auto;
        margin-right: 2em;
      }
    }
  }
`
