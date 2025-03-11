"use client"
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'


const BreadcrumbsComoponent = ({elements}) => {
    return (
        <Breadcrumbs>
        {
            elements.map((element, index) => {
                return (
                    <BreadcrumbItem key={index}>{element}</BreadcrumbItem>
                )
            })
        }
        </Breadcrumbs>
    )
}

export default BreadcrumbsComoponent