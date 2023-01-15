import { useState, useEffect } from 'react'
import { csv, autoType, sort, filter } from 'd3'

// const url = 'https://gist.githubusercontent.com/omarish/5687264/raw/7e5c814ce6ef33e25d5259c1fe79463c190800d9/mpg.csv'
// const url = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv'
const url = 'https://raw.githubusercontent.com/abo3zah/visualization_d3/master/src/data/population.csv'

export const useData = (xValue) => {
     const [data, setData] = useState(null);

     useEffect(() => {
          csv(url, autoType, d => {

               d['Births'] = +d['Births']*1000;
               d['Births by women aged 15 to 19'] = +d['Births by women aged 15 to 19']*1000;
               
               d['Total Population'] = +d['Total Population']*1000;
               d['Female Population'] = +d['Female Population']*1000;
               d['Male Population'] = +d['Male Population']*1000;
               d['Change'] = +d['Change']*1000;

               d['Total Deaths'] = +d['Total Deaths']*1000;
               d['Male Deaths'] = +d['Male Deaths']*1000;
               d['Female Deaths'] = +d['Female Deaths']*1000;
               
               d['Median Age'] = +d['Median Age']*1000;

               return d;

          }).then(data => {
               let tempData = filter(data, x => x.Type === 'Country/Area' && x.Year === '2021');
               tempData = sort(tempData, (a, b) => xValue(b) - xValue(a)).slice(0, 10)
               console.log(tempData[0]);
               setData(tempData)
          })
     }, [])

     return data
}