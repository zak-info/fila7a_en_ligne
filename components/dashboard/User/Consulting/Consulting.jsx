"use client"

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@node_modules/@nextui-org/table/dist'
import React from 'react'
import AddConsulting from './AddConsulting'
import JustText from '@components/just-text/JustText'

const Consultings = ({ user, consultings }) => {
    return (
        <div className='w-full '>
            <h1 className=' font-bold text-xl'><JustText text={"consulting_page"} /></h1>

            <div className='w-full flex flex-col border rounded-xl p-4 mt-12 '>
                <AddConsulting userId={user?._id} />
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
                    {
                        consultings?.map((c, index) => (
                            <TableRow key={index}>
                                <TableCell>{index+1}</TableCell>
                                <TableCell>{c.title}</TableCell>
                                <TableCell>{c.description} .....</TableCell>
                                <TableCell>pengin</TableCell>
                                <TableCell>--</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>


        </div>
    )
}

export default Consultings