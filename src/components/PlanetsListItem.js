import { useState, useEffect } from "react";

function PlanetsListItem(props) {
  const { planet } = props;

  const [firstFilm, setFirstFilm] = useState('')

  useEffect(() => {
    fetch(planet.films[0])
    .then((res) => res.json())
    .then((data) => {setFirstFilm(data.title)});
  }, [planet]);


  return <li>{planet.name} - First Film: {firstFilm}</li>;
}

export default PlanetsListItem;
