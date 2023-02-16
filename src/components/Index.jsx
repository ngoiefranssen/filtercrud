import {
  Button,
    ButtonGroup,
    Grid,
    Paper,
    styled,
    Table,
    TableBody,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
} from '@mui/material'
import React, { useState } from 'react'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import { deleteUser, getAllUser, postData } from './api/apiUser'
import EditIcon from '@mui/icons-material/Edit'
import RemoveIcon from '@mui/icons-material/Remove'
import MuiFormUser from './MuiFormUser'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

const Index = () => {

  const [users, setUsers] = React.useState([])
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  
  const [user,setUser]=useState({
    id:"",
    first_name:"",
    last_name:"",
    email:"",
    phone:""
  });
  const {id} = us 
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name] : e.target.value });
  }
  const handleRowToEdit=(row)=> {
    setUser(row)
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    handleFetchDatas()
  },[])

  const handleFetchDatas = async () =>{
    const response = await getAllUser()
    setUsers(response?.data)
    // console.log(response?.data)
  }
  const handleToAddUser = async () => {
    await postData(user);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(user?.id){ // id exist on fait l'edit
        // return the function with edit
    }else{
        // elle n'existe pas la c'new user
        handleToAddUser()
    } 
  }
  const handleChangePage = (even,newPage) =>{
    setPage(newPage)
  }
  const handlePerChangeRowsPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10))
    setPage(0)
  }
  
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage)

  // const handleToDeleteUser
  const handleToDeleteUser = async () => {
    await deleteUser(id)
  }
  return (
    <Grid style={{ width: "90%", margin: "50px auto 0 auto" }}>
      <Grid position='revert-layer' margin="15px" marginLeft={144.6}>
        <MuiFormUser
          user={user}
          open={open}
          setOpen={setOpen}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Grid>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>#</StyledTableCell>
                        <StyledTableCell >First name</StyledTableCell>
                        <StyledTableCell >Last name</StyledTableCell>
                        <StyledTableCell >Email</StyledTableCell>
                        <StyledTableCell >Phone</StyledTableCell>
                        <StyledTableCell>Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {
                    users
                    ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    ?.map((user, index) => (
                      <StyledTableRow key={user?.id}>
                          <StyledTableCell component="th" scope="row" key={index?.id}>
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell>{user.first_name}</StyledTableCell>
                          <StyledTableCell>{user.last_name}</StyledTableCell>
                          <StyledTableCell>{user.email}</StyledTableCell>
                          <StyledTableCell>{user.phone}</StyledTableCell>
                          <StyledTableCell>
                            <ButtonGroup>
                              <Button variant='container' onClick={()=>{
                                handleRowToEdit(user)
                                handleClickOpen()
                              }}><EditIcon/></Button>
                              <Button variant='container'
                                onClick={ () => handleToDeleteUser(user.id) }
                              >
                                <RemoveIcon/>
                              </Button>
                            </ButtonGroup>
                          </StyledTableCell>
                      </StyledTableRow>
                    ))
                  }
                  {
                    emptyRows > 0 &&(
                      <TableRow style={{ height: 10 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )
                  }
                </TableBody>
                <TableFooter >
                  <TablePagination
                    component='div'
                    page = {page}
                    rowsPerPageOptions = {[5, 10, 20]}
                    rowsPerPage = {rowsPerPage}
                    count = {users.length}
                    onPageChange = {handleChangePage}
                    onRowsPerPageChange = {handlePerChangeRowsPage}
                  />
                </TableFooter>
            </Table>
      </TableContainer>
    </Grid>
    
  )
}

export default Index