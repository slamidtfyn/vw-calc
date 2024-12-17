import './App.css'
import {Box} from "@mui/material";
import Battery from "./Battery.tsx";

function App() {

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2
        }}>
            <Battery/>
        </Box>
    )
}

export default App
