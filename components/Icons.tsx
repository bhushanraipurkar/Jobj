import React, { SVGProps } from 'react'

interface Props {
  Ic: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

const Icons = ({ Ic, title }: Props) => {
  return (
    <div>
      <Ic
        name={title}
        className="h-8 w-8 max-w-fit cursor-pointer transition-all duration-200 
        hover:text-blue-500
        "
      />
    </div>
  )
}

export default Icons
