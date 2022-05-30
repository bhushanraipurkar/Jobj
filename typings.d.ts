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
