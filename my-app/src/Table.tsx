import { makeStyles, Paper, TableHead, TableRow, Typography, Table, TableBody } from "@material-ui/core"
const useStyles = makeStyles(theme => ({
}))
export const TablePlain = () => {
    const classes = useStyles()
    return (
        <Paper>
            <Typography>title</Typography>
            <Table size="small" >
                <TableHead>
                    <TableRow>header row</TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>body row</TableRow>
                </TableBody>
            </Table>
        </Paper>
    )
}