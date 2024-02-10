import { Cast } from "./Cast";


export  function CastList({cast}) {
  return (
    <div>
        {
            cast.map(el=> <Cast key={el.person.id} item={el}/>)
        }
    </div>
  )
}
