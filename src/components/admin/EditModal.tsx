import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import FirebaseServices from "../../firebase/firebaseServices";

interface EditModalProps {
  descriptions: string;
  title: string;
  id?: string;
}
export default function EditModal(props: EditModalProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [descriptions, setDescriptions] = useState(props.descriptions);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submit = () => {
    if (props.id) {
      FirebaseServices.editData(title, descriptions, props.id)
        .then(() => {
          handleClose();
        })
        .catch(() => {
          console.log("Something went wrong...");
        });
    }
  };

  return (
    <>
      <IconButton color='primary' aria-label='edit' onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
        PaperProps={{
          style: {
            width: "1000px", // Set the custom width here
            maxWidth: "1000px", // Ensure it doesn't apply the default max width
          },
        }}
      >
        <DialogTitle id='responsive-dialog-title'>
          <TextField
            fullWidth
            id='outlined-multiline-static'
            defaultValue={props.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            id='outlined-multiline-static'
            multiline
            rows={4}
            defaultValue={props.descriptions}
            onChange={(e) => setDescriptions(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            style={{ textTransform: "none" }}
          >
            Cancel
          </Button>
          <Button onClick={submit} autoFocus style={{ textTransform: "none" }}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
