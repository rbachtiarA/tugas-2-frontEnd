export default async function getEmployees():Promise<any> {
    const res = await fetch(`https://randomuser.me/api/?results=16`, {next: {revalidate: 1000}})

    if(!res.ok) {
    throw new Error('failed to fetch data')
    }

    return res.json()
}