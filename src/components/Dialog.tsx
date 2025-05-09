import React from 'react'
import { Dialog, DialogContent } from '@mui/material';


export default function Popup(props) {

    const { children, openPopup, setOpenPopup } = props;

    return (
        <Dialog open={openPopup} maxWidth="md">
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}