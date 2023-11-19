import { LitElement, html, css } from 'lit-element';

class LoginComponent extends LitElement {
  static styles = css`
    /* Estilos CSS específicos para tu componente de inicio de sesión */
    form {
      max-width: 300px;
      margin: auto;
    }

    label {
      display: block;
      margin-bottom: 8px;
    }

    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 16px;
    }

    button {
      padding: 8px;
      background-color: #4caf50;
      color: white;
      border: none;
      cursor: pointer;
    }
  `;

  static properties = {
    username: { type: String },
    password: { type: String },
  };

  constructor() {
    super();
    this.username = '';
    this.password = '';
  }

  render() {
    return html`
      <form @submit="${this.handleSubmit}">
        <label for="username">Usuario:</label>
        <input
          type="text"
          id="username"
          .value="${this.username}"
          @input="${this.handleUsernameInput}"
        />

        <label for="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          .value="${this.password}"
          @input="${this.handlePasswordInput}"
        />

        <button type="submit">Iniciar sesión</button>
      </form>
    `;
  }

  handleUsernameInput(e) {
    this.username = e.target.value;
  }

  handlePasswordInput(e) {
    this.password = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();

    // Aquí podrías realizar la lógica de autenticación, por ejemplo, enviar datos al servidor.
    // En este ejemplo, simplemente muestra las credenciales en la consola.
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);
  }
}

customElements.define('login-component', LoginComponent);
