const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
    auth:{
        login: `${API}/api/${VERSION}/auth/login`,
        profile:  `${API}/api/${VERSION}/auth/profile`
    },
    products: {
        getProductList:(limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
        getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
        postProduct: `${API}/api/${VERSION}/products`,
        putProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
        deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`
    },
    users: {
        getUserList:(limit) => `${API}/api/${VERSION}/users?limit=${limit}`,
        postUser: `${API}/api/${VERSION}/users`,
        isAvailable: `${API}/api/${VERSION}/users/is-Available`
    },
    categories: {
        getCategoriesList: (limit) => `${API}/api/${VERSION}/catagories?limit=${limit}`,
        getCategories: (id) => `${API}/api/${VERSION}/categories/${id}`,
        postCategories:`${API}/api/${VERSION}/categories`,
        putCategories: (id) => `${API}/api/${VERSION}/categories/${id}`,
        deleteProduct: (id) => `${API}/api/${VERSION}/categories/${id}`
    },
    files: {
        postFiles: `${API}/api/${VERSION}/files/upload`,
        getFiles: (filename) =>  `${API}/api/${VERSION}/files/${filename}`
    },
};

export default endPoints;