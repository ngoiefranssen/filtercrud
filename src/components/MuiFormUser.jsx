import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import MuiFormUser from '.'

const MuiFormUser = ({user,open,setOpen,handleChange,handleClickOpen,handleClose}) => {
   
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                New user
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                    <form onSubmit={handleSubmit}>
                          <TextField
                                autoFocus
                                margin="dense"
                                id="first_name"
                                name="first_name"
                                label="Fsirst_name"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={user?.first_name}
                                onChange={handleChange}
                            />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="last_name"
                        name="last_name"
                        label="Last_name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={user?.last_name}
                        onChange={handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={user?.email}
                        onChange={handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phone"
                        name="phone"
                        label="Phone"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={user?.phone}
                        onChange={handleChange}
                    />
                    </form>
                  
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default MuiFormUser