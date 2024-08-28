export async function GET(){
    const user = {
        "user": {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@example.com",
            "password": "12345",
            "role": "student",
            "city": "Anytown",
            "state": "CA",
            "zip": "12345",
        }
    }

    return Response.json({ user })
}