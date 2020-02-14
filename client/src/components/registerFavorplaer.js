import React, { useState } from "react";
import { useFormState } from "react";

function favoritePlayer(){
const [ data, setData] = useState();
const {register, errors, handleSubmit} = useFormState({
    mode: "onBlue"
})
const onSubmit = data => {
    setData(data)
};
return(
<form onSubmit={handleSubmit(onSubmit)}>
<div>
<label htmlFor="favoriteplayer"> Favorite Player</label>
<input 
name="favoriteplayer"
type="text"
placeholder="favoriteplayer"
ref={register({ require: true, maxLength: 20 })} />
{errors.favoritePlayer && (
    <p>An error has occured: {errors.favoritePlayer.type}</p>
)}
</div>


<div>
<label>Why is this you favorite player</label>
<textarea
name="why"
ref={register({ require: false})} />
</div>
{data && (
    <pre style={{ textAlign: "left", color:"white"}} >
    {JSON.stringify(data, null, 2)} </pre>
)}
<input type="submit" />
</form>

)}
export default favoritePlayer;