//POST /registro
request: [
    payload: {
        nombre: String,
        apellido: String,
        correo: String,
        contraseña: String
    }
]

//POST /login
request: [
    payload: {
        correo: String,
        contrasena: String
    }
]
response:[
{
    token: String,
        user: {
            id: Number,
            correo: String,
            perfil: String
    }
}
]

//POST /solicitudes
request: [
    headers: {
        Authorization: String < token >
    }
    payload: {
        idUsuario: Number,
        idActividad: Number,
        tipoServicio: String,
        descripcion: String
    }
]
response:[
{
    token: String,
        user: {
            id: Number,
            correo: String,
            perfil: String
    }
}
]

//GET /solicitudes
request:[
    headers: {
        Authorization: String < token >
    }
]
response: [
    {
        idSolicitud: Number,
        nombSolicitud: String,
        estado: String
    }
]

//GET /solicitudes/:idCliente
request: [
    headers: {
        Authorization: String < token >
    }
]
response: [
    {
        idSolicitud: Number,
        nombSolicitud: String,
        estado: String
    }
]

//GET /solicitudes/:idSolicitudes
request: [
    headers: {
        Authorization: String < token >
    }
]
response: [
    {
        idSolicitud: Number,
        nombSolicitud: String,
        estado: String
    }
]


//DELETE /solicitudes/:idSolicitudes
request:[
    headers: {
        Authorization: String < token >
    }
]
response:[
    {
        codigo: String,
        Mensaje: String
    }
]
//PUT /solicitudes/:idSolicitudes
request: [
    headers: {
        Authorization: String < token >
    }
]
response:[
    {
        codigo: String,
        Mensaje: String
    }
]

//POST /servicio
request: [
    headers: {
        Authorization: String < token >
    }
    payload: {
        
        nomServicio: String,
        descServicio: String,
        imagen: String
    }
]
response:[
    {
        codigo: String,
        Mensaje: String
    }
]

//GET /servicio
request: [
    headers: {
        Authorization: String < token >
    }
    
]
response:[
    {
        idServicio: Number,
        nomServicio: String,
        descServicio: String,
        imagen: String
    }
]

//POST /subservicio
request: [
    headers: {
        Authorization: String < token >
    }
    payload: {
        
        nomSubServicio: String,
        descAyuda: String,
        idServicio: Number
    }
]
response:[
    {
        codigo: String,
        Mensaje: String
    }
]

//GET /subservicio
request: [
    headers: {
        Authorization: String < token >
    }
]
response:[
    {
        idSubservicio: Number,
        nomSubServicio: String,
        descAyuda: String,
        idServicio: Number
    }
]
//POST /estados
request: [
    headers: {
        Authorization: String < token >
    }
    payload: {
        
        nombreEstado: String
    }
]
response:[
    {
        codigo: String,
        Mensaje: String
    }
]

//POST /perfiles
request: [
    headers: {
        Authorization: String < token >
    }
    payload: {
        
        nombrePerfil: String
    }
]
response:[
    {
        codigo: String,
        Mensaje: String
    }
]
