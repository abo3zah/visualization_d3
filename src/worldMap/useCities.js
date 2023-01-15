import { autoType, csv } from 'd3'
import { useState, useEffect } from 'react';

const csvUrl = 'https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv';

export const useCities = () => {
     const [data, setData] = useState(null);

     useEffect(() => {
          csv(csvUrl, autoType).then(setData)
     }, [])

     return data
}