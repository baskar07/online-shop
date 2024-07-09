import axios from 'axios';

const getAllProducts = async()=>{
    const res = await axios.get('/api/product/all-products');
    console.log(res.data);
    return res.data;
}


const productService = { getAllProducts };

export default productService;