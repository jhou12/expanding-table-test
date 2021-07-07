import { Paper, TableHead, TableRow, Typography, Table, TableBody } from "@material-ui/core"

export const TablePlain = () => {
    return (
        <Paper>
            <Typography>title</Typography>
            <Table size="small">
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