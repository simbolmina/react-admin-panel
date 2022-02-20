import React, { useState } from 'react';
import './ProductList.css';
import { DataGrid } from '@material-ui/data-grid';
import { productRows } from '../../dummyData';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

function Products() {
  const [data, setData] = useState(productRows);

  const deleteHandler = id => {
    setData(data.filter(item => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: params => {
        return (
          <div className="productListUser">
            <img className="productListImage" src={params.row.img} alt="" />{' '}
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 220,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => {
                deleteHandler(params.row.id);
              }}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="products">
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}

export default Products;
