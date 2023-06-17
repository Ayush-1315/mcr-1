import { createContext, useContext,useReducer } from "react";
import { booksDB,booksReducer } from "../Reducer/bookReducer";
export const BooksContext = createContext();
export const BooksProvider = ({ children }) => {
  const [books,reducerFun]=useReducer(booksReducer,booksDB);
  const readBooks=books.filter(book=>book.status==="read");
  const willingToReadBooks=books.filter(book=>book.status==="willing-to-read");
  const readingBooks=books.filter(book=>book.status==="reading");
  return (
    <BooksContext.Provider value={{books,reducerFun,readBooks,willingToReadBooks,readingBooks}}>
      {children}
    </BooksContext.Provider>
  );
};
export const useBooks = () => useContext(BooksContext);
