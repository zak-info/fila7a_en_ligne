"use client"

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@node_modules/@nextui-org/table/dist'
import React from 'react'
import AddConsulting from './AddConsulting'

const Consulting = () => {
    return (
        <div className='w-full '>
            <h1 className=' font-bold text-xl'>Consulting Page</h1>

            <div className='w-full flex flex-col border rounded-xl p-4 mt-12 '>
                <AddConsulting />
            </div>

            <Table isStriped aria-label="Example static collection table" className='bg-gray-100 mt-20 rounded-xl '>
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>title</TableColumn>
                    <TableColumn>Discription</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                    <TableColumn>Actions</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No consulting to display."} >
                    <TableRow key="1">
                        <TableCell>id1</TableCell>
                        <TableCell>Cows Sicks</TableCell>
                        <TableCell>salam alikom , j ai un probleme .....</TableCell>
                        <TableCell>pengin</TableCell>
                        <TableCell>--</TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell>id1</TableCell>
                        <TableCell>Cows Sicks</TableCell>
                        <TableCell>salam alikom , j ai un probleme .....</TableCell>
                        <TableCell>pengin</TableCell>
                        <TableCell>--</TableCell>
                    </TableRow>
                </TableBody>
            </Table>


        </div>
    )
}

export default Consulting