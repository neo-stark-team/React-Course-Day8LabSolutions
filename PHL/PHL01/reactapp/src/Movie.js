export default function Movie(props)
{
  if(props.name)
  {
    return <h2> Movie Name : {props.name}</h2>
  }
  return <h2>Movie Details not found</h2>;
}