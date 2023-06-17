import { useBooks } from "../../Context/booksContext";
import bookCardCSS from "./bookCard.module.css";

export const BookCard=({_id,title,writer,display})=>{
const {reducerFun}=useBooks();
const changeHandler=(e)=>{
    reducerFun({
        type: "CHANGE_STATUS",
        payload: { id:_id, status: e.target.value },
      })
}
return <div className={bookCardCSS.card}>
    <div className="bookTop" >
        <img src={display} alt={title} className={bookCardCSS.display}/>
        <h3 className={bookCardCSS.bookTitle}>{title}</h3>
        <p>{writer}</p>
    </div>
    <div className="bookBottom">
        <select name="status" id="status" onChange={changeHandler} defaultValue={"0"}>
            <option value="0"disabled >Select</option>
            <option value="reading">Currently Reading</option>
            <option value="willing-to-read">Want To Read</option>
            <option value="read">Read</option>
            <option value="none">none</option>
        </select>
    </div>
</div>
}