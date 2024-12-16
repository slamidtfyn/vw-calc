import * as React from 'react'
import {Box, TextField} from "@mui/material";

function Battery(props : {targetSoc: number, batteryKwh: number, name: string}) {
    const [soc, setSoc] = React.useState(40);
    const [targetSoc, setTargetSoc] = React.useState(props.targetSoc);


    const kwh = React.useMemo(() => {
        const target = targetSoc * props.batteryKwh / 100;
        return Math.ceil(target - target * soc / 100);

    }, [soc, props.batteryKwh, targetSoc]);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap:2
        }}>
            <h2>{props.name}</h2>
                <Box>
                    <TextField disabled={true}
                        value={props.batteryKwh}
                        label="Batteri kwh" variant="outlined" />

                </Box>
                <Box>
                    <TextField
                        value={targetSoc} tabIndex={1}
                        label="Mål SoC %" variant="outlined"
                        onChange={(e) =>
                            setTargetSoc(Number(e.target.value))}/>

                </Box>
                <Box>
                    <TextField
                        id="outlined-basic" tabIndex={0}
                        label="nuværende SoC %"
                        variant="outlined" value={soc}
                        onChange={(e) =>
                            setSoc(Number(e.target.value))}/>
                </Box>
                <Box>
                    <TextField
                        value={kwh} aria-readonly={true} disabled={true}
                        label="Kwh mangler" variant="outlined"
                    />
                </Box>
        </Box>
    )
}

export default Battery
