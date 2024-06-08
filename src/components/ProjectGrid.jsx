import { useState } from "react";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ProjectGrid = ({ data }) => {
  const [open, setOpen] = useState(Array(data.length).fill(false));

  const handleClickOpen = (index) => {
    const newOpen = [...open];
    newOpen[index] = true;
    setOpen(newOpen);
  };

  const handleClose = (index) => {
    const newOpen = [...open];
    newOpen[index] = false;
    setOpen(newOpen);
  };

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {data.slice(0, 6).map((item, index) => (
        <div key={item.title} className="max-w-[345px]">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={item.img}
                alt={item.title}
                className="h-[220px] border border-teal-700"
              />
            </CardActionArea>
          </Card>
          <div className="flex justify-between mt-2">
            <p className="text-gray-400 flex items-center">{item.title}</p>
            <Button color="secondary" onClick={() => handleClickOpen(index)}>
              Explore
            </Button>
          </div>
          <BootstrapDialog
            onClose={() => handleClose(index)}
            aria-labelledby="customized-dialog-title"
            open={open[index]}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              {item.title}
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={() => handleClose(index)}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
              <h2 className=" text-[18px] font-semibold underline">
                Descriptions
              </h2>
              <ul className="px-2">
                {item.description.map((list, index) => (
                  <li key={index} className="list-disc">
                    {list}
                  </li>
                ))}
              </ul>

              <hr className="mt-2" />
              <h2 className=" text-[18px] font-semibold underline">
                Tech stacks
              </h2>
              <ul className="px-2 flex w-full justify-between">
                {item.technologies.map((list, index) => (
                  <li key={index} className="list-disc">
                    {list}
                  </li>
                ))}
              </ul>
              <hr className="mt-2 mb-2" />
              <a href={item.liveUrl} target="blank">
                <Button
                  color="secondary"
                  onClick={() => handleClickOpen(index)}
                >
                  Vist website
                </Button>
              </a>
            </DialogContent>
          </BootstrapDialog>
        </div>
      ))}
    </main>
  );
};

export default ProjectGrid;
