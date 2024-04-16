function WeatherToDegree({weather}){

  function weatherToDegree(weather){

    // splitting the string into parts
    const splitParts=weather.split(' ');

    const degree=splitParts[1].replace('C','°C');

    return `${splitParts[0]+','+degree}`
  }
  return(
    <>
      {weatherToDegree(weather)}
    </>
  )
}
export default WeatherToDegree;