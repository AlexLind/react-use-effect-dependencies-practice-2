import { useState, useEffect } from "react";

function StarshipsListItem(props) {
  const { starship } = props;

  const [firstPilot, setFirstPilot] = useState('')

  useEffect(() => {
    if (starship.pilots?.length) { 
      fetch(starship.pilots[0])
      .then((res) => res.json())
      .then((data) => {setFirstPilot(data.name)});
    } else {
      setFirstPilot('no pilots');
    }
  }, [starship]);


  return <li>{starship.name} - First Pilot: {firstPilot}</li>;
}

export default StarshipsListItem;
