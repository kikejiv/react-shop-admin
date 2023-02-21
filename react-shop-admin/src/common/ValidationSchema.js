import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  title: Yup.string().min(2, 'El Nombre es muy corto!').max(25, 'El Nombre es muy largo!').required('El Nombre es Obligatorio!'),

  price: Yup.number().min(1, 'El Precio es muy corto').max(100000, 'El Precio es muy corto!').required('El Precio es Obligatorio!!!'),

  /* description: Yup.string()
    .min(1, 'La Descripcion es muy corto!')
    .max(100, 'La Descripcion es muy corto!')
    .required('La Descripcion es Obligatorio!!!'), */

  categoryId: Yup.string().min(1, 'La Categoria muy corta').max(10, 'La Categoria muy corta!').required('La Categoria Obligatoria!!!'),
  images: Yup.array().of(Yup.string()),
});
export { ValidationSchema };
