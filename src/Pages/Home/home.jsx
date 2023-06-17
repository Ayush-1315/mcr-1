import { BookCard } from "../../Components/Book Card/bookCard";
import { useBooks } from "../../Context/booksContext";
import home from "./home.module.css";

export const Home = () => {
  const { readingBooks, readBooks, willingToReadBooks} =
    useBooks();
  return (
    <>
      <div>
        <div className={home.headContainer}>
        <h2 className={home.contentsHead}>Currently Reading</h2>
        </div>
        <div className={home.container}>
          {readingBooks.map((book, index) => (
            <BookCard {...book} key={index} />
          ))}
        </div>
      </div>
      <div>
        <div className={home.headContainer}>
        <h2 className={home.contentsHead}>Want To Read</h2>
        </div>
        <div className={home.container}>
          {willingToReadBooks.map((book, index) => (
            <BookCard {...book} key={index} />
          ))}
        </div>
      </div>
      <div>
       <div className={home.headContainer}> <h2 className={home.contentsHead}>Read</h2></div>
        <div className={home.container}>
          {readBooks.map((book, index) => (
            <BookCard {...book} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
