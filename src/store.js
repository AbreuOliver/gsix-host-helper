import { writable } from "svelte/store";

// const participantName = localStorage.getItem("Oliver");
// export const Oliver = writable(participantName);

export const participantName = writable("Oliver")
export const participantNumber = writable(0)


// const storedName = localStorage.getItem("participantName");
// export const theme = writable(storedName);
// participantName.subscribe(value => {
//     localStorage.setItem("participantName", value === 'Nobody' ? '' : 'light');
// });