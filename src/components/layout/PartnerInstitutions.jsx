import styled from 'styled-components'

import H1 from '../typograph/H1'
import IconImages from '../icons/IconImages'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
  gap: 25px;
`

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`

const StyledAllImages = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`

const StyledAllImages2 = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`

const StyledAllImages3 = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`

const StyledImage1 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  box-sizing: border-box;
  border: 4px solid;
  width: 345px;
  height: 345px;
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 15px 40px;
`
const StyledImage2 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  box-sizing: border-box;
  border: 4px solid;
  width: 345px;
  height: 345px;
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 5px 10px;
`

const StyledImage3 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  box-sizing: border-box;
  border: 4px solid; 
  width: 345px;
  height: 345px;
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 20px 60px;
`

const StyledImage4 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  box-sizing: border-box;
  border: 4px solid;
  width: 345px;
  height: 345px;  
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledImage5 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  width: 345px;
  height: 345px;
  box-sizing: border-box;
  border: 4px solid;  
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledImage6 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  width: 345px;
  height: 345px;
  box-sizing: border-box;
  border: 4px solid;  
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
`

const StyledImage7 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  width: 345px;
  height: 345px;
  box-sizing: border-box;
  border: 4px solid;  
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 10px 20px;
`

const StyledImage8 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  width: 345px;
  height: 345px;
  box-sizing: border-box;
  border: 4px solid;  
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 40px 45px;
`

const StyledImage9 = styled.div`
  background-color: ${props => props.theme.cardBackground};
  box-sizing: border-box;
  border: 4px solid;
  border-color: ${props => props.theme.primary};
  border-radius: 50px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 150px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 500px;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
`

function PartnerInstitutions () {
  return (
    <>
      <StyledContainer>
        <StyledTitle>
          <H1>Instituições apoiadas</H1>
        </StyledTitle>
        <StyledAllImages>
          <StyledImage1>
            <IconImages imageName='becoDaEsperanca' type='svg' />
          </StyledImage1>
          <StyledImage2>
            <IconImages imageName='institutoDuCao' type='svg' />
          </StyledImage2>
          <StyledImage3>
            <IconImages imageName='asiloSaoVicente' type='svg' />
          </StyledImage3>
        </StyledAllImages>
        <StyledAllImages2>
          <StyledImage4>
            <IconImages imageName='CrazyCatOficial' type='svg' />
          </StyledImage4>
          <StyledImage5>
            <IconImages imageName='JardimDasBorboletasOficial' type='svg' />
          </StyledImage5>
          <StyledImage6>
            <IconImages imageName='MaestroOficial' type='svg' />
          </StyledImage6>
        </StyledAllImages2>
        <StyledAllImages3>
          <StyledImage7>
            <IconImages imageName='RangoDeRuaOficial' type='svg' />
          </StyledImage7>
          <StyledImage8>
            <IconImages imageName='SocorroOficial' type='svg' />
          </StyledImage8>
        </StyledAllImages3>
          <StyledImage9>
            <IconImages imageName='amigosDoCaximba' type='svg' />
          </StyledImage9>
      </StyledContainer>
    </>
  )
}

export default PartnerInstitutions