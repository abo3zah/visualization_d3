import { useState, useEffect } from 'react'
import { csv, autoType, sort } from 'd3'

// const url = 'https://gist.githubusercontent.com/omarish/5687264/raw/7e5c814ce6ef33e25d5259c1fe79463c190800d9/mpg.csv'
const url = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv'
// const url = 'https://population.un.org/wpp/Download/Files/1_Indicators%20(Standard)/CSV_FILES/WPP2022_Locations_notes.csv'

export const useData = (xValue) => {
     const [data, setData] = useState(null);

     useEffect(() => {
          csv(url, autoType, (d) => {
               return {
                    '2020': d['2020'] * 1000,
                    Country: d.Country
               };
          }).then(data => {
               let tempData = sort(data, (a, b) => xValue(b) - xValue(a)).slice(0, 10)
               console.log(data[0]);
               setData(tempData)
          })
     }, [])

     return data
}