const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
    allProducts: `${API}/api/${VERSION}/products`,
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API}/api/${VERSION}/products`,
    updateProducts: (id) => `${API}/api/${VERSION}/products/${id}/`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}/`,
  },
  /*users: {
    getUserList: (limit) => `${API}/api/${VERSION}/users?limit=${limit}`,
    postUser: `${API}/api/${VERSION}/users`,
    isAvailable: `${API}/api/${VERSION}/users/is-Available`,
  }, */
  categories: {
    getCategoriesList: `${API}/api/${VERSION}/categories/`,
    addCategory: `${API}/api/${VERSION}/categories/`,
    getCategoryItems: (id) => `${API}/api/${VERSION}/categories/${id}/products/`,
    updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}/`,
  },
  files: {
    addFiles: `${API}/api/${VERSION}/files/upload`,
    getFiles: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;
