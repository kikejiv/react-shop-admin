import FormProduct from '@components/FormProduct';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Alert from '@common/Alert';
import useAlert from '@hooks/useAlert';
import axios from 'axios';
import endPoints from '@services/api';

export default function Edit() {
  const [open, setOpen] = useState(false);
  const { alert, setAlert, toggleAlert } = useAlert;
  const [product, setProduct] = useState({});
  const router = useRouter();
  
  

  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    async function getProduct() {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
    }
    getProduct();
  }, [router?.isReady]);

  return <FormProduct product={product} />;
  <>
    <Alert alert={alert} handleClose={toggleAlert} />;
    <FormProduct setOpen={setOpen} setAlert={setAlert} product={product} />;
  </>
}
