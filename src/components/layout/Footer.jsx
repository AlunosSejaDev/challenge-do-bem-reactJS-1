import styled from 'styled-components'
import H5 from '../typograph/H5'

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.primary};
  width: 100%;
  height: 105px;
  margin-top: 4em;
  background: rgba(1, 107, 155, 0.70);
  backdrop-filter: blur(14px);

  @media (max-width: 650px) {
    height: 230px;
    margin-top: 8em;
  }

  @media (max-width: 500px) {
    display: flex;
    text-align: center;
    width: 100%;
    padding: 0 6px 0 6px;
  }
`

function Footer () {
  return (
    <>
      <StyledFooter>
        <H5>
          Copyright@2022 - Challenge do bem - Todos os direitos reservados - Desenvolvido por @adrianofront | @devbpatriciocosta | @ruanL-Dev
        </H5>
      </StyledFooter>
    </>
  )
}

export default Footer
