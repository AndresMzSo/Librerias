 var provider = new firebase.auth.GoogleAuthProvider();
 $("#logueo").click(function(){
    firebase.auth()
    .signinWithPopup(provider)
    .then(function(result){
         console.log(result.user);
         almacenaDatos(result.user);
         $("#logueo").hide();
         $("#principal").append("<img src ='" +result.user.photoURL+"'/>")
    });
 });

 // guardado de datos automático
function almacenaDatos(user){
    var datosDelUsuario={
        nombre:user.displayName,
        email: user.email,
        foto: user.photoURL,
        uid:user.uid
    }
    firebase.database().ref("datosinicioDeSesión/"+user.uid)
    .push(datosDelUsuario)
}