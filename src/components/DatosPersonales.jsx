

function DatosPersonales(){
    return(
        <div className="DatosPersonales">
            <div className="ImagenPerfil">
                <img src="https://scontent.fhex5-2.fna.fbcdn.net/v/t1.6435-9/171803378_1153075688448380_9031300905632326541_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEYidf4rOpQ3fEd6Tppp1N0fBtsPCkBiyF8G2w8KQGLIZI03bMQDr48tnXruFT3rf6EmA-jHIepRRoN0X0Ah6Ck&_nc_ohc=CtN4U6G0qeUAX8cxXVS&_nc_ht=scontent.fhex5-2.fna&oh=00_AT9zRPYuX7qCra4KmsvzaUnikQFn5RI4fT6ukIwyWGf6bw&oe=62F63792" alt="Mi Perfil" width="500" height="500" />
            </div>
            <div className="MiNombre">
                <h1>Plinio Antonio Palmer Rojas</h1>
            </div>
            <div className="MiCorreo">
                <a href="email">pliniopalmer@gmail.com</a>
            </div>
        </div>
    );
}

export default DatosPersonales;