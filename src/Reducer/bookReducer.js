export const booksDB = [
  {
    _id:1,
    title: "To kill a mocking Bird",
    writer: "Novel by Harper Lee",
    category: "Novel",
    status: "reading",
    display:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
  },
  {
    _id:2,
    title: "Ender's Game",
    writer: "Novel by Orson Scott Card",
    category: "ScienceFiction",
    status: "reading",
    display:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Ender%27s_game_cover_ISBN_0312932081.jpg/220px-Ender%27s_game_cover_ISBN_0312932081.jpg",
  },
  {
    _id:3,
    title: "The Pioneers",
    writer: "David McCullough",
    category: "Story",
    status: "reading",
    display:
      "https://m.media-amazon.com/images/I/81G-apL1AIL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    _id:4,
    title: "Harry Potter and the Cursed Child",
    writer: "Play by J. K. Rowling, Jack Thorne, and John Tiffany",
    category: "Novel",
    status: "willing-to-read",
    display: "https://m.media-amazon.com/images/I/51Da+RazehL.jpg",
  },
  {
    _id:5,
    title:
      "Bigger Leaner Stronger: The Simple Science of Building the Ultimate Male Body",
    writer: "Michael Matthews",
    category: "Fitness",
    status: "willing-to-read",
    display: "https://m.media-amazon.com/images/I/51Z5e7hwcQL.jpg",
  },
  {
    _id:6,
    title: "The Fitness Mindset: Eat for Energy",
    writer: "Brian Keane",
    category: "Fitness",
    status: "willing-to-read",
    display:
      "https://m.media-amazon.com/images/I/61maBDeCBRL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    _id:7,
    title: "ACSM Fitness Book",
    writer: " Arnold Schwarzenegger",
    category: "Fitness",
    status: "read",
    display:
      "https://m.media-amazon.com/images/I/511mCGVXp0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    _id:8,
    title: "M.S. DHONI -THE UNTOLD STORY",
    writer: "Adarsh Sharma ",
    category: "Biography",
    status: "read",
    display:
      "https://m.media-amazon.com/images/I/31VMt4GqYZL._SX331_BO1,204,203,200_.jpg",
  },
  {
    _id:9,
    title: "Playing it My Way",
    writer: "Sachin Tendulkar ",
    category: "Biography",
    status: "read",
    display:
      "https://m.media-amazon.com/images/I/410xGn95dmL._SX324_BO1,204,203,200_.jpg",
  },
  {
    _id:10,
    title: "Half Girlfriend",
    writer: "Chetan Bhagat",
    category: "Novel",
    status: "none",
    display:
      "https://m.media-amazon.com/images/I/51TfAbXwNuL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    _id:11,
    title: "Three Men in a Boat",
    writer: "Jerome K. Jerome",
    category: "Novel",
    status: "none",
    display: "https://m.media-amazon.com/images/I/61toNHaO00L.jpg",
  },
  {
    _id:12,
    title: "The Invisible Man",
    writer: "H. G. Wells",
    category: "Novel",
    status: "none",
    display:
      "https://cdn.shopify.com/s/files/1/2789/4914/products/buy-illustrated-classics-the-invisible-man-abridged-novels-with-book-prakash-books-9789389931549-28600175395011.jpg?v=1623543386",
  },
];

export const booksReducer = (state, action) => {
  const { type, payload } = action;
  switch(type){
    case "CHANGE_STATUS":
    const {id,status}=payload;
    return(state.map(book=>book._id===id?{...book,status}:book))
    
    default: return state;
  }
};
