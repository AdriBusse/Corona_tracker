import { gql } from 'apollo-boost';

export const GetCountries = gql`
{
  countries(names:[]){
  name
    mostRecent{
      confirmed
      deaths
      recovered
      recovered
      
    }

}
}
`