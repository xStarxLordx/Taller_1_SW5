class Persona {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
  
    // Métodos para acceder y modificar el email y la contraseña
    getEmail() {
      return this.email;
    }
  
    setEmail(newEmail) {
      this.email = newEmail;
    }
  
    getPassword() {
      return this.password;
    }
  
    setPassword(newPassword) {
      this.password = newPassword;
    }
  }
  


  // Ejemplo de uso:
  const persona = new Persona('usuario@example.com', 'contraseña123');
  console.log(`Email: ${persona.getEmail()}`);
  console.log(`Contraseña: ${persona.getPassword()}`);
  
  // Modificar el email y la contraseña
  /* persona.setEmail('nuevoemail@example.com');
  persona.setPassword('nuevacontraseña456');
  console.log(`Nuevo Email: ${persona.getEmail()}`);
  console.log(`Nueva Contraseña: ${persona.getPassword()}`); */
export default Persona;
