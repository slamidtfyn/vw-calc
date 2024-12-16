import './App.css'
import {Box} from "@mui/material";
import Battery from "./Battery.tsx";

function App() {

    return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap:2
            }}>
                <Battery targetSoc={80} batteryKwh={77} name="ID"/>
                <Battery targetSoc={100} batteryKwh={37} name="UP"/>
        </Box>
    )
}

export default App
