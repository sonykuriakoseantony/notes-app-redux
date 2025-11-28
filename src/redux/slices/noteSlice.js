import { createSlice } from "@reduxjs/toolkit";

/*
    {
        id: 1,
        title: "Client Meeting Review",
        description: "Meeting summary & action items.",
        tag: "Work",
        date: "2025-01-07",
        time: "09:38PM"
    },
    {
        id: 2,
        title: "Social Media Chat",
        description: "Content planning & scheduling.",
        tag: "Wishlist",
        date: "2025-01-06",
        time: "10:00PM"
    }
*/
const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        allNotes: [
            {
                id: 1,
                title: "Client Meeting Review",
                description: "Meeting summary & action items.",
                tag: "Work",
                date: "2025-01-07",
                time: "09:38PM"
            },
            {
                id: 2,
                title: "Client Meeting Review",
                description: "Meeting summary & action items.",
                tag: "Work",
                date: "2025-01-07",
                time: "09:38PM"
            },
            {
                id: 3,
                title: "Client Meeting Review",
                description: "Meeting summary & action items.",
                tag: "Work",
                date: "2025-01-07",
                time: "09:38PM"
            },
            {
                id: 4,
                title: "Client Meeting Review",
                description: "Meeting summary & action items.",
                tag: "Work",
                date: "2025-01-07",
                time: "09:38PM"
            },
            {
                id: 5,
                title: "Client Meeting Review",
                description: "Meeting summary & action items.",
                tag: "Personal",
                date: "2025-01-07",
                time: "09:38PM"
            },
            {
                id: 6,
                title: "Client Meeting Review",
                description: "Meeting summary & action items.",
                tag: "Personal",
                date: "2025-01-07",
                time: "09:38PM"
            },
            {
                id: 7,
                title: "Social Media Chat",
                description: "Content planning & scheduling.",
                tag: "Wishlist",
                date: "2025-01-06",
                time: "10:00PM"
            },
            {
                id: 8,
                title: "Social Media Chat",
                description: "Content planning & scheduling.",
                tag: "Wishlist",
                date: "2025-01-06",
                time: "10:00PM"
            },
            {
                id: 9,
                title: "Social Media Chat",
                description: "Content planning & scheduling.",
                tag: "Wishlist",
                date: "2025-01-06",
                time: "10:00PM"
            },
            {
                id: 10,
                title: "Social Media Chat",
                description: "Content planning & scheduling.",
                tag: "Todo",
                date: "2025-01-06",
                time: "10:00PM"
            },
            {
                id: 11,
                title: "Social Media Chat",
                description: "Content planning & scheduling.",
                tag: "Assignment",
                date: "2025-01-06",
                time: "10:00PM"
            }
            ,
            {
                id: 12,
                title: "Social Media Chat",
                description: "Content planning & scheduling.",
                tag: "Assignment",
                date: "2025-01-06",
                time: "10:00PM"
            }
        ],
        backupNotes: [
            {
                id: 1,
                title: "Client Meeting Review",
                description: "Meeting summary & action items.",
                tag: "Work",
                date: "2025-01-07",
                time: "09:38PM"
            },
            {
                id: 2,
                title: "Client Meeting Review",
                description: "Meeting summary & action items.",
                tag: "Work",
                date: "2025-01-07",
                time: "09:38PM"
            },
            {
                id: 3,
                title: "Client Meeting Review",
                description: "Meeting summary & action items.",
                tag: "Work",
                date: "2025-01-07",
                time: "09:38PM"
            },
            {
                id: 4,
                title: "Client Meeting Review",
                description: "Meeting summary & action items.",
                tag: "Work",
                date: "2025-01-07",
                time: "09:38PM"
            },
            {
                id: 5,
                title: "Client Meeting Review",
                description: "Meeting summary & action items.",
                tag: "Personal",
                date: "2025-01-07",
                time: "09:38PM"
            },
            {
                id: 6,
                title: "Client Meeting Review",
                description: "Meeting summary & action items.",
                tag: "Personal",
                date: "2025-01-07",
                time: "09:38PM"
            },
            {
                id: 7,
                title: "Social Media Chat",
                description: "Content planning & scheduling.",
                tag: "Wishlist",
                date: "2025-01-06",
                time: "10:00PM"
            },
            {
                id: 8,
                title: "Social Media Chat",
                description: "Content planning & scheduling.",
                tag: "Wishlist",
                date: "2025-01-06",
                time: "10:00PM"
            },
            {
                id: 9,
                title: "Social Media Chat",
                description: "Content planning & scheduling.",
                tag: "Wishlist",
                date: "2025-01-06",
                time: "10:00PM"
            },
            {
                id: 10,
                title: "Social Media Chat",
                description: "Content planning & scheduling.",
                tag: "Todo",
                date: "2025-01-06",
                time: "10:00PM"
            },
            {
                id: 11,
                title: "Social Media Chat",
                description: "Content planning & scheduling.",
                tag: "Assignment",
                date: "2025-01-06",
                time: "10:00PM"
            }
            ,
            {
                id: 12,
                title: "Social Media Chat",
                description: "Content planning & scheduling.",
                tag: "Assignment",
                date: "2025-01-06",
                time: "10:00PM"
            }
        ],
        activeFilter: "All"
    },
    reducers: {
        addNote: (state, action) => {
            console.log("Adding note");
            state.allNotes.push(action.payload)
            state.backupNotes.push(action.payload)
        },
        removeNote: (state, action) => {
            console.log("Removing note");
            const filteredNotes = state.allNotes.filter(item => item.id != action.payload);
            state.backupNotes = filteredNotes;
            state.allNotes = filteredNotes
        },
        editNote: (state, action) => {
            console.log("Updating note");
            const index = state.allNotes.findIndex(n => n.id == action.payload.id)
            if (index != -1) {
                state.allNotes[index] = action.payload;
                state.backupNotes[index] = action.payload
            }
        },
        searchNote: (state, action) => {
            console.log("Searching notes");
            state.allNotes = state.backupNotes.filter(n => n.title.toLowerCase().includes(action.payload))
        },
        filterNotes: (state, action) => {
            console.log("Filtering notes", action.payload);
            
            const tag = action.payload;
            state.activeFilter = tag;

            if (tag.toLowerCase() == "all") {
                state.allNotes = state.backupNotes
            }
            else {
                state.allNotes = state.backupNotes.filter(n => n.tag.toLowerCase() == (action.payload.toLowerCase()))
            }
        }
    }
})

export const { addNote, editNote, removeNote, searchNote, filterNotes } = noteSlice.actions;
export default noteSlice.reducer;