export async function GET(){
    const lab = {
        "lab": {
            "id": "34213",
            "name": "Laboratorio de campos magneticos",
            "ubicacion": "APR P2",
            "capacidad": 20,
            "equipos": {
                "1": {
                    "id": "1",
                    "name": "Magnetometro de campo magnetico",
                    "descripcion": "Magnetometro de campo magnetico",
                    "imagen": "https://www.ingenieria.unam.mx/ingenieria/",
                    "video": "https://www.youtube.com/watch?v=QK8mJJJvaes",
                },
                "2": {
                    "id": "2",
                    "name": "Magnetometro de campo magnetico 2",
                    "descripcion": "Magnetometro de campo magnetico 2",
                    "imagen": "https://www.ingenieria.unam.mx/ingenieria/",
                    "video": "https://www.youtube.com/watch?v=QK8mJJJvaes",
                }
            }
        }
    }

    return Response.json({ lab })
}