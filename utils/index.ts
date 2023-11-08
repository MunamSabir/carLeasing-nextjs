export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "bc98e6e2demsh0c27ddab30abb45p1ff7a3jsn45e6d79ea155",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const result = await response.json();

  return result;
}
