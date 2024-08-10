export default async function getEmployees(quantity: number) {
    const res = await fetch(`https://randomuser.me/api/?results=${quantity}`, {next: {revalidate: 1000}})

    if(!res.ok) {
    throw new Error('failed to fetch data')
    }

    return res.json()
}