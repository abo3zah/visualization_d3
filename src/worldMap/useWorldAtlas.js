import { json } from 'd3'
import { useState, useEffect } from 'react';
import { feature, mesh } from 'topojson-client'

const jsonUrl = 'https://unpkg.com/world-atlas/countries-110m.json';

export const useWorldAtlas = () => {
     const [data, setData] = useState(null);

     // console.log(data)

     useEffect(() => {
          json(jsonUrl).then(data => {
               const { countries } = data.objects

               // console.log(countries);

               setData({
                    countries: feature(data, countries),
                    interiors: mesh(data, countries, (a,b) => a!==b)
               })
          })
     }, [])

     return data
}