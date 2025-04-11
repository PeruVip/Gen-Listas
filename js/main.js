function copyUrl() {
    let lista2 = document.querySelector("#lista2");
    navigator.clipboard.writeText(lista2.textContent);
  }
  function copyUrl2() {
      let lista = document.querySelector("#lista");
      navigator.clipboard.writeText(lista.textContent);
    }
  
  function ObtenerLista() {
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
  
    //  document.write(`http://gazytv.com:8880/get.php?username=${usuario}&password=${password}=Ua7vofbxiS&type=m3u_plus&output=hls`)
    //document.getElementById("lista").textContent = (URL = `http://gzytv.vip:8880/get.php?username=${usuario}&password=${password}=Ua7vofbxiS&type=m3u_plus&output=mpegts`)
  
    document.getElementById("lista").textContent = new URL(
      `http://fuxionprotv.online:80/get.php?username=${usuario}&password=${password}&type=m3u_plus&output=hls`
    );
  }
  
  function ObtenerLista2() {
    let usuario2 = document.getElementById("usuario2").value;
    let password2 = document.getElementById("password2").value;
  
    document.getElementById("lista2").textContent = new URL(
      `http://playext.uno:8080/get.php?username=${usuario2}&password=${password2}&type=m3u_plus&output=hls`
    );
  }
  function limpiar() {
    let limpiar = document.querySelector('#limpiar')
    usuario.value = ("")
    password.value = ("")
  }
  
  /*DARK THEME*/
  /*
  const boton = document.querySelector('#boton_cambiar')
  const prefresLightScheme = window.matchMedia('(prefers-color-scheme: light-theme)')
  
  boton.addEventListener('click', () => {
  
      if (prefresLightScheme.matches) {
          document.body.classList.toggle('light-theme')
      } else {
          document.body.classList.toggle('dark-theme')
      }
  })
  */
