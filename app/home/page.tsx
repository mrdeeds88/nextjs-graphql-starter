import { ApolloQueryResult, gql } from "@apollo/client";
import client from "@/apollo-client";
import getCountriesQuery from '@/gql/queries/getCountries.gql'

export default async function Home({
}) {
  const countries = await client().query({
    query: getCountriesQuery
  }) as ApolloQueryResult<{
    countries: API.Country[]
  }>

  console.log(countries)

  return <>
    <main className="bg-white">
      {countries?.data?.countries?.map((i: API.Country) => (
        <div key={i.code} className="p-2 m-1 text-blue-500 shadow-md">
          {i.name} - {i.code}
        </div>
      ))}
    </main>
  </>
  
}