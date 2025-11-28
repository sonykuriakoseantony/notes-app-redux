import { useState, useEffect } from "react";
// import { Modal, Box, TextField, Button, TextareaAutosize } from "@mui/material";
import { MdClose } from "react-icons/md";
// import { MenuItem, Modal } from "@mui/material";
import { useDispatch } from "react-redux";
import { addNote, editNote } from "../redux/slices/noteSlice";
import { Box, Button, MenuItem, Modal, TextareaAutosize, TextField } from "@mui/material";
import Swal from "sweetalert2";

function NotesForm({ open, handleClose, note }) {
    const [formData, setFormData] = useState(
        {
            id: "",
            title: "",
            description: "",
            tag: "",
            date: "",
            time: ""
        }
    );
    const dispatch = useDispatch();
    const initialFormState = {
        id: "",
        title: "",
        description: "",
        tag: "",
        date: "",
        time: ""
    }
    useEffect(() => {
        if (note) {
            setFormData(note);
        }
        else {
            setFormData(initialFormState);
        }
    }, [note]);

    const categories = ["Work", "Personal", "Todo", "Assignment", "Wishlist", "Study"]


    // Set data to formdata state on change of each input element
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Reset form after Add or update
    const clearForm = () => {
        setFormData(initialFormState);
    }

    // Add or update item on submit of form
    const onSubmit = (e) => {
        e.preventDefault();

        const { title, descritption } = formData

        if (title != "" && descritption != "") {
            const isEdit = !!formData.id;

            console.log(isEdit);

            const now = new Date();

            const day = String(now.getDate()).padStart(2, "0");
            const month = String(now.getMonth() + 1).padStart(2, "0");
            const year = now.getFullYear();

            const date = `${day}-${month}-${year}`;

            // Format Time (hh:mmAM/PM)
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const ampm = hours >= 12 ? "PM" : "AM";

            hours = hours % 12;
            hours = hours ? hours : 12; // convert 0 to 12
            hours = String(hours).padStart(2, "0");

            const time = `${hours}:${minutes}${ampm}`;

            const payload = {
                id: isEdit ? formData.id : Date.now(),
                title: formData.title,
                description: formData.description,
                tag: formData.tag,
                date: date,
                time: time,
            }

            isEdit ? dispatch(editNote(payload)) : dispatch(addNote(payload))
        }
        else {
            Swal.fire({
                title: 'Error!',
                text: 'The Title and Description must not be empty',
                icon: 'error',
                confirmButtonText: 'Cool',
                confirmButtonColor : '#1c398e'
            })
        }

        handleClose();
        clearForm();
    }


    return (
        <>
            <div>
                <Modal open={open} onClose={handleClose}>
                    <Box
                        className="bg-white rounded-xl shadow-xl p-8 relative"
                        sx={{
                            width: 700,
                            top: "50%",
                            left: "50%",
                            position: "absolute",
                            transform: "translate(-50%, -50%)",
                            outline: "none",
                        }}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">{note ? 'Edit' : 'Add New'} Note</h2>
                            <button
                                onClick={handleClose}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <MdClose size={25} />
                            </button>
                        </div>

                        {/* FORM */}
                        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
                            <div className="grid grid-cols-1 gap-4">
                                {/* Note Title */}
                                <TextField
                                    label="Note Title Name"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                />

                                {/* Description */}
                                <TextareaAutosize
                                    aria-label="Type your note here"
                                    minRows={3}
                                    placeholder="Type your note here..."
                                    style={{ width: '100%', borderStyle: 'solid', borderWidth: '1px', borderColor: 'rgba(0, 0, 0, 0.3)' }}
                                    className="rounded p-2"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                />

                                {/* Note Tag */}
                                <TextField
                                    select
                                    label="Choose a Tag"
                                    name="tag"
                                    value={formData.tag}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                >
                                    {categories.length > 0 ? (
                                        categories?.map((cat) => (
                                            <MenuItem key={cat} value={cat}>
                                                {cat}
                                            </MenuItem>
                                        ))
                                    ) : (
                                        <MenuItem disabled>No categories</MenuItem>
                                    )}
                                </TextField>
                            </div>
                        </form>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-3 mt-8">
                            <Button
                                variant="outlined"
                                color="inherit"
                                onClick={handleClose}
                                className="capitalize"
                                sx={{
                                    fontSize: "13px",
                                    fontWeight: "600"
                                }}
                            >
                                Cancel
                            </Button>

                            <Button
                                variant="contained"
                                type="submit"
                                onClick={onSubmit}
                                sx={{
                                    backgroundColor: "#1c398e",
                                    fontSize: "13px",
                                    fontWeight: "600"
                                }}
                            >
                                Save
                            </Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default NotesForm
