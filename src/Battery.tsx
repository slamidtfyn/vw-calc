import * as React from 'react'
import {useEffect} from 'react'
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";

type IBil = 'ID' | 'UP';

function Battery() {
    const [soc, setSoc] = React.useState(40);
    const [targetSoc, setTargetSoc] = React.useState(80);
    const [bil, setBil] = React.useState<IBil>('ID');

    const bilData: { targetSoc: number, batteryKwh: number } = React.useMemo(() => {
        switch (bil) {
            case "ID":
                return {targetSoc: 80, batteryKwh: 77};

            case "UP":
                return {targetSoc: 100, batteryKwh: 37};

        }
    }, [bil])

    const kwh = React.useMemo(() => {
        const target = targetSoc * bilData.batteryKwh / 100;
        return Math.ceil(target - target * soc / 100);

    }, [soc, bilData.batteryKwh, targetSoc]);

    const handleChange = (event: SelectChangeEvent) => {
        setBil(event.target.value as IBil);
    };

    useEffect(
        () => {
            setTargetSoc(bilData.targetSoc);
        },
        [bilData.targetSoc])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        }}>
            <Box>
                <FormControl sx={{'width': '100%'}} variant="outlined">
                    <InputLabel id="demo-simple-select-label">Bil</InputLabel>
                    <Select
                        value={bil}
                        onChange={handleChange}>
                        <MenuItem key={'ID'} value={'ID'}>ID</MenuItem>
                        <MenuItem key={'UP'} value={'UP'}>UP</MenuItem>
                    </Select>
                </FormControl>

            </Box>
            <Box>
                <TextField
                    value={targetSoc}
                    label="Mål SoC %" variant="outlined"
                    onChange={(e) =>
                        setTargetSoc(Number(e.target.value))}/>

            </Box>
            <Box>
                <TextField
                    id="outlined-basic"
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
