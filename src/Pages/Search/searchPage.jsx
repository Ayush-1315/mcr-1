import { useState } from "react"
import { BookCard } from "../../Components/Book Card/bookCard";
import { useBooks } from "../../Context/booksContext";
import explorer from "../../assets/search.jpg"
import search from "./search.module.css";
export const SearchPage=()=>{
    const [searchedBooks,setSearchBooks]=useState([]);
    const{books}=useBooks();
    const changeHandler=(e)=>{
        setSearchBooks(
            e.target.value===""?[]:books.filter(book=>book.category.toLowerCase().startsWith(e.target.value.toLowerCase()) || book.title.toLowerCase().startsWith(e.target.value.toLowerCase()))
        )
    }
    return<>
    <div>
        <input type="text" placeholder="Search Books"onChange={changeHandler} className={search.srchbar}/>
    </div>
    <div className={search.results}>
        {searchedBooks.length===0?<div className={search.message}>
        <img src={explorer} alt="search" />
        <h2>Search Something</h2>
        </div>:searchedBooks.map((books,index)=><BookCard key={index} {...books}/>)}
    </div>
    </>
}