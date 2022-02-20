import React, { useState } from 'react';
import './UserList.css';
import { DataGrid } from '@material-ui/data-grid';
import { userRows } from '../../dummyData';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

function UserList() {
  const [data, setData] = useState(userRows);

  const deleteHandler = id => {
    setData(data.filter(item => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: params => {
        return (
          <div className="userListUser">
            <img className="userListImage" src={params.row.avatar} alt="" />{' '}
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 220,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
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
    <div className="userList">
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

export default UserList;
