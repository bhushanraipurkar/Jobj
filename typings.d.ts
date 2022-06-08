type Data = {
  title: string
  desc: string
  experience: number
  noopen: number
  location: string[]
  availabel: boolean
  hired: number
  image: string
  type: string
  pg: string
  timing: string
}

type brief = {
  image: string
  title: string
  subTopics: string[]
}

type job = {
  title: string
  type: string
  location: string[]
  image?: string
}

type user = {
  email: string
  pass: string
  cpass?: string
}

type apply = {
  orgname: string
  name: string
  address: string
  aadharnumber: number
  phonenumber: number
  email: string
}

type userde = {
  name: string
  email: string
  phone?: string
}

type jobdetail = {
  _id?: string
  title: string
  topic: string
  desc: string
  noopen: number
  postrequired: string
  salary: number
  time: string
  experience: number
  contact: number
  hiring: boolean
  pgender: string
  location: string
  aadhar: string
  rphoto?: string
  owner: string
}

type jobwithapplied = {
  title: string
  topic: string
  desc: string
  noopen: number
  postrequired: string
  salary: number
  time: string
  experience: number
  contact: number
  hiring: boolean
  pgender: string
  location: string
  aadhar: string
  rphoto?: string
  owner: string
  appliedby: string[]
}

type apply = {
  email: string
}
