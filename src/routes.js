const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  updateBookByIdHandler,
  deleteBookByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },

  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: updateBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookByIdHandler,
  },
  
  {
    method: "*",
    path: "/",
    // eslint-disable-next-line no-unused-vars
    handler: (request, h) => {
      const response = h.response({
        status: "fail",
        message: "Halaman tidak dapat diakses dengan method tersebut",
      });
      response.code(404);
      return response;
    },
  },
];

module.exports = routes;
