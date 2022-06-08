export const fetchuser = async (email: string) => {
  const res = await fetch(`/user435/user/${email}`)

  const comments = await res.json()
  const status = res.status

  return status
}
